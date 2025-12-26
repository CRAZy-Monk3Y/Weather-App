import { NextRequest, NextResponse } from "next/server";

const key = process.env.NEXT_WEB_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const { location } = await request.json();
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7&aqi=yes&alerts=yes`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    return NextResponse.json({ message: "success", data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
