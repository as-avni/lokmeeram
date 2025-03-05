import { NextResponse } from "next/server";
import axios from "axios";

const API_KEY = process.env.YOUTUBE_API_KEY; // Use environment variable
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID; // Use environment variable
const MAX_RESULTS = 6;

export async function GET() {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return NextResponse.json(
      { error: "Failed to fetch YouTube videos" },
      { status: 500 }
    );
  }
}
