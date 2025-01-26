import { ActionResponse } from "@/types/global"; // Import ActionResponse type
import logger from "../logger"; // Import logger for logging
import handleError from "./error"; // Import handleError function
import { RequestError } from "../http-errors"; // Import RequestError class

interface FetchOptions extends RequestInit {
  timeout?: number; // Extend RequestInit to include optional timeout property
}

function isError(error: unknown): error is Error {
  return error instanceof Error; // Type guard to check if error is an instance of Error
}

export async function fetchHandler<T>(
  url: string,
  options: FetchOptions = {}
): Promise<ActionResponse<T>> {
  const {
    timeout = 5000, // Default timeout is 5000ms
    headers: customHeaders = {}, // Default custom headers is an empty object
    ...restOptions // Rest of the options
  } = options;

  const controller = new AbortController(); // Create an AbortController instance

  const id = setTimeout(() => controller.abort(), timeout); // Set a timeout to abort the request

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json", // Default Content-Type header
    Accept: "application/json", // Default Accept header
  };

  const headers = new Headers({ ...defaultHeaders, ...customHeaders }); // Merge default and custom headers

  const config: RequestInit = {
    ...restOptions, // Spread the rest of the options
    headers, // Include the merged headers
    signal: controller.signal, // Include the abort signal
  };

  try {
    const response = await fetch(url, config); // Make the fetch request
    clearTimeout(id); // Clear the timeout
    if (!response.ok)
      throw new RequestError(response.status, `HTTP Error: ${response.status}`); // Throw an error if response is not OK

    return await response.json(); // Parse and return the response as JSON
  } catch (err) {
    const error = isError(err) ? err : new Error("An error occurred"); // Check if the error is an instance of Error
    if ((error.name = "AbortError")) {
      logger.warn("Request aborted", { url }); // Log a warning if the request was aborted
    } else {
      logger.error(error.message, { url }); // Log an error message
    }

    return handleError(error) as ActionResponse<T>; // Handle the error and return the result
  }
}
