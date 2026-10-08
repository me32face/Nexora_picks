import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { password } = await request.json();
    const expectedPassword = process.env.ADMIN_PASSWORD;

    if (!password || password !== expectedPassword) {
      return NextResponse.json(
        { ok: false, error: "Incorrect password. Please try again." },
        { status: 401 }
      );
    }

    return NextResponse.json({ ok: true, message: "Authenticated successfully" });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Authentication failed" },
      { status: 500 }
    );
  }
}
