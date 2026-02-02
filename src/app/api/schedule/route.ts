import { NextResponse } from "next/server";
import { getThunderSchedule } from "@/lib/api/balldontlie";

export const revalidate = 3600; // revalidate every hour

export async function GET() {
  try {
    const schedule = await getThunderSchedule();
    return NextResponse.json(schedule);
  } catch (error) {
    console.error("Schedule API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedule" },
      { status: 500 }
    );
  }
}
