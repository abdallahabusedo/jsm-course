import tickets from "@/app/database/database";
import { NextResponse } from "next/server";

// GET /api/tickets
export async function GET() {
  return NextResponse.json(tickets);
}

// POST /api/tickets
export async function POST(request: Request) {
  const ticket = await request.json();
  tickets.push({ id: tickets.length + 1, ...ticket });
  return NextResponse.json(ticket);
}
