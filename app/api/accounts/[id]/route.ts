import Account from "@/database/account.model";
import handleError from "@/lib/handlers/error";
import { NotFoundError, ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { AccountSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";

// GET /api/account/[id]
export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // destructuring the id from the params object
  const { id } = await params;

  // if id does not exist, return an error
  if (!id) throw new NotFoundError("User not found");

  try {
    await dbConnect();

    const account = await Account.findById(id);

    // if account does not exist, return an error
    if (!account) throw new NotFoundError("Account not found");

    return NextResponse.json(
      {
        success: true,
        data: account,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// DELETE /api/account/[id]
export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) throw new NotFoundError("Account not found");

  try {
    await dbConnect();

    const account = await Account.findByIdAndDelete(id);

    if (!account) throw new NotFoundError("Account not found");

    return NextResponse.json(
      {
        success: true,
        message: "account deleted successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// PUT /api/account/[id]
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) throw new NotFoundError("Account not found");

  try {
    await dbConnect();

    const body = await request.json();
    const validatedData = AccountSchema.partial().safeParse(body);

    if (!validatedData.success)
      throw new ValidationError(validatedData.error.flatten().fieldErrors);

    const updatedAccount = await Account.findByIdAndUpdate(id, validatedData, {
      new: true,
    });

    if (!updatedAccount) throw new NotFoundError("Account not found");

    return NextResponse.json(
      {
        success: true,
        data: updatedAccount,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
