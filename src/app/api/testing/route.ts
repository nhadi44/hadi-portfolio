import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/libs/prisma';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  const auth = await prisma.auth.findMany();

  revalidatePath(req.nextUrl.pathname);
  return NextResponse.json({ message: 'Hello, World!', data: auth });
}
