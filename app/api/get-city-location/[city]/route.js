import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
export async function GET(res, context) {
  try {
    const city = context.params.city;
    let data = await axios.get(
      `${process.env.BASE_URL}?q=${city}&appid=${process.env.WEATHER_API_KEY}`
    );
    data = data.data;

    return NextResponse.json({ success: true, message: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "not found" },
      { status: 404 }
    );
  }
}
