"use client";
import React, { useEffect, useState } from "react";

const INSTAGRAM_USERNAME = "vaidhya.foods";
const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/vaidhya.foods/reels/";

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<{ embedUrl: string; reelUrl: string }[]>([]);

  useEffect(() => {
    setPosts([
      { embedUrl: "https://www.instagram.com/reel/DGr0SrNvZJy/embed", reelUrl: "https://www.instagram.com/reel/DGr0SrNvZJy/" },
      { embedUrl: "https://www.instagram.com/reel/DGuVqQEoyWY/embed", reelUrl: "https://www.instagram.com/reel/DGuVqQEoyWY/" },
      { embedUrl: "https://www.instagram.com/reel/DGx0yTMAv2H/embed", reelUrl: "https://www.instagram.com/reel/DGx0yTMAv2H/" },
    ]);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-4">Instagram Feed</h2>

      {/* Follow Button in Center */}
      <div className="flex justify-center my-4">
        <a
          href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full shadow-md hover:scale-105 transition"
        >
          Follow @vaidhya.foods
        </a>
      </div>

      {/* Instagram Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <a href={post.reelUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <iframe
                className="w-full h-full rounded-lg shadow-lg pointer-events-none"
                src={post.embedUrl}
                title={`Instagram Post ${index + 1}`}
                frameBorder="0"
                allow="encrypted-media"
              ></iframe>
            </a>
          </div>
        ))}
      </div>

      {/* View Full Profile Button */}
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