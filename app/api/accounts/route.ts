import Account from "@/database/account.model";
import handleError from "@/lib/handlers/error";
import { ForbiddenError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { AccountSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";

// GET /api/users
export async function GET() {
  try {
    await dbConnect();
    const accounts = await Account.find();

    return NextResponse.json(
      {
        success: true,
        data: accounts,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// POST /api/users
export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const validatedUser = AccountSchema.parse(body);

    const existingAccount = await Account.findOne({
      provider: validatedUser.provider,
      providerAccountId: validatedUser.providerAccountId,
    });

    if (existingAccount)
      throw new ForbiddenError(
        "An account with the same provider already exists."
      );

    const newAccount = await Account.create(validatedUser);

    return NextResponse.json(
      {
        success: true,
        data: newAccount,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
