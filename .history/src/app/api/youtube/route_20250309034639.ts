import { NextResponse } from "next/server";
import axios from "axios";

// const API_KEY = process.env.YOUTUBE_API_KEY; // Use environment variable
// const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID; // Use environment variable
// const MAX_RESULTS = 3;

// export async function GET() {
//   try {
//     const response = await axios.get(
//       `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
//     );

//     return NextResponse.json(response.data);
//   } catch (error) {
//     console.error("Error fetching YouTube videos:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch YouTube videos" },
//       { status: 500 }
//     );
//   }
// }

const API_KEYS = ["API_KEY_1", "API_KEY_2", "API_KEY_3"];
let currentKeyIndex = 0;

function getAPIKey() {
  const key = API_KEYS[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
  return key;
}

export async function GET() {
  try {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${getAPIKey()}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=5`;
    const response = await axios.get(url);
    return Response.json(response.data);
  } catch (error) {
    console.error("YouTube API Error:", error.response?.data || error.message);
    return Response.json({ error: "Failed to fetch videos" }, { status: 500 });
  }
}
