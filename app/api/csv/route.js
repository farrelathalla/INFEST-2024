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

    // Set cache control headers directly in the response
    return new NextResponse(JSON.stringify(users), {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Expires': '0',
        'Pragma': 'no-cache',
        'Surrogate-Control': 'no-store',
      },
    });
    
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
