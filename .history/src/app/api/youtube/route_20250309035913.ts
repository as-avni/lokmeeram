import { NextResponse } from "next/server";
import axios from "axios";

const API_KEYS = process.env.YOUTUBE_API_KEYS?.split(",") || []; 
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID; 
const MAX_RESULTS = 3;

let currentKeyIndex = 0; // Track API key usage

function getAPIKey() {
  const key = API_KEYS[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length; 
  return key;
}

export async function GET() {
  if (!API_KEYS.length || !CHANNEL_ID) {
    return NextResponse.json({ error: "Missing API keys or Channel ID" }, { status: 500 });
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${getAPIKey()}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${MAX_RESULTS}`;

    console.log("Fetching YouTube videos from:", url);

    const response = await axios.get(url);
    return NextResponse.json(response.data);
    
  } catch (error: any) {
    console.error("YouTube API Error:", error.response?.data || error.message);

    // Check if the error is due to quota exceeded and try another key
    if (error.response?.data?.error?.errors?.[0]?.reason === "quotaExceeded") {
      console.warn("Quota exceeded! Switching API keys...");
      return await GET(); // Retry with the next API key
    }

    return NextResponse.json({ error: "Failed to fetch YouTube videos" }, { status: 500 });
  }
}
