import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
export async function GET(res, context) {
  try {
    const lon = context.params.lon;
    const lat = context.params.lat;
    let data = await axios.get(
      `${process.env.BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`
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
