import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(req: Request) {
  try {
    const { serialNumber } = await req.json();

    if (!serialNumber) {
      return NextResponse.json(
        { error: "Serial number is required" },
        { status: 400 }
      );
    }

    const sql = neon(process.env.DATABASE_URL!);

    const users = await sql`
      SELECT * FROM users
      WHERE serial_number = ${serialNumber}
      LIMIT 1
    `;

    if (!users || users.length === 0) {
      return NextResponse.json(
        { error: "Invalid serial number" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        response: {
          message: "Serial number authenticated successfully",
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error authenticating serial number:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
