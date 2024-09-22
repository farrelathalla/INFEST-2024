import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust this path based on your Prisma setup

export async function GET() {
  try {
    // Fetch all users from the database
    const users = await prisma.register.findMany({
      where: {
        email: {
          contains: "@", // Ensure the email contains '@'
        },
      },
      distinct: ['email'],
    });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
