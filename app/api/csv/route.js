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

    const response = NextResponse.json(users, { status: 200 });
    response.headers.set('Cache-Control', 'no-store');
    return response;
    
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
