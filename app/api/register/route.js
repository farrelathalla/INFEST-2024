import prisma from '@/lib/prisma'; // Ensure you have Prisma set up

export async function POST(req) {
  const { email, fullName, status, institusi, phoneNumber, media, sesi, image, place } = await req.json();

  try {
    // Create a new registration record in the database
    const newRegister = await prisma.register.create({
      data: {
        email,
        fullName,
        status,
        institusi,
        phoneNumber,
        media,
        sesi,
        image, // This is the uploaded image URL
        place,
      },
    });
    return new Response(JSON.stringify(newRegister), { status: 200 });
  } catch (error) {
    console.error('Error creating registration:', error);
    return new Response(JSON.stringify({ error: 'Error creating registration' }), { status: 500 });
  }
}
