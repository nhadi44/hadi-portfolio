import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(req: NextRequest) {
  const auth = await prisma.auth.findMany();

  return NextResponse.json({ message: "Hello, World!", data: auth });
}
