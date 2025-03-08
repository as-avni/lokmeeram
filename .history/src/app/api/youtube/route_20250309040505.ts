import { NextResponse } from "next/server";
import axios from "axios";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;
const MAX_RESULTS = 3;

export async function GET() {
  if (!API_KEY || !CHANNEL_ID) {
    return NextResponse.json({ error: "Missing API key or Channel ID" }, { status: 500 });
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;

    console.log("Fetching YouTube Videos from:", url);
    
    const response = await axios.get(url);
    return NextResponse.json(response.data);
    
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("YouTube API Error:", error.response?.data || error.message);
    } else {
      console.error("YouTube API Error:", error);
    }

    if (error.response?.status === 403) {
      return NextResponse.json({ error: "Access forbidden. Check API key and permissions." }, { status: 403 });
    }

    return NextResponse.json({ error: "Failed to fetch YouTube videos" }, { status: 500 });
  }
}
