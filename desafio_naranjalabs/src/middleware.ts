import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {

  const secret = req.headers.get('secret');
  console.log(secret);


  if (secret !== 'naranja-labs') {
    return NextResponse.json(
      { message: `Unauthorized. Invalid credential.` },
      { status: 401 }
    );
  }

  return NextResponse.next();
}