import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.redirect("api/login");
  response.cookies.delete("token");
  return response;
}
