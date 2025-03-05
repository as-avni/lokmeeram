"use client";
import React, { useEffect, useState } from "react";

const INSTAGRAM_USERNAME = "vaidhya.foods";
const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/vaidhya.foods/reels/";

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<string[]>([]);

  useEffect(() => {
    setPosts([
      "https://www.instagram.com/reel/DGr0SrNvZJy/embed",
      "https://www.instagram.com/reel/DGuVqQEoyWY/embed",
      "https://www.instagram.com/reel/DGx0yTMAv2H/embed",
    ]);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 min-h-screen">
      <h2 className="text-2xl text-black font-bold text-center mb-4">Instagram Feed</h2>

      {/* Follow Button in Center */}
      <div className="flex justify-center my-4">
        <a
          href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-orange-300 to-red-500 text-black font-bold rounded-full shadow-md hover:scale-105 transition"
        >
          Follow @vaidhya.foods
        </a>
      </div>

      {/* Instagram Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((postUrl, index) => (
          <div key={index} className="relative w-full overflow-hidden" style={{ aspectRatio: "9/46" }}>
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={postUrl}
              title={`Instagram Post ${index + 1}`}
              frameBorder="0"
              allow="encrypted-media"
            ></iframe>
          </div>
        ))}
      </div>

      {/* View Full Profile Button */}
      <div className="text-center mt-4">
        <a
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-orange-300 text-black rounded-lg shadow-md hover:bg-orange-500 transition inline-block"
        >
          View Full Profile
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;