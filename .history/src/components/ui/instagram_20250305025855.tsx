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
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Instagram Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((postUrl, index) => (
          <div key={index} className="relative w-full overflow-hidden">
            <iframe
              className="w-full h-96 rounded-lg shadow-lg"
              src={postUrl}
              title={`Instagram Post ${index + 1}`}
              frameBorder="0"
              allow="encrypted-media"
            ></iframe>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition inline-block"
        >
          View Full Profile
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;
