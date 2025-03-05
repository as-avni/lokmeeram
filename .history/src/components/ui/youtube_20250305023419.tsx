"use client";
import React, { useState } from "react";

const PLAYLIST_ID = "PL_bx64ia-qJl2URWkR1VQEok6ZWvOScvg";
const CHANNEL_URL = "https://youtube.com/@andtvchannel";

const YouTubeEmbed: React.FC = () => {
  const [visibleVideos, setVisibleVideos] = useState(3);
  const totalVideos = 9; // Limit to prevent infinite loop

  const loadMoreVideos = () => {
    setVisibleVideos((prev) => Math.min(prev + 3, totalVideos));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: visibleVideos }).map((_, index) => (
          <div key={index} className="relative w-full aspect-square">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&index=${index + 1}`}
              title={`YouTube Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      {visibleVideos < totalVideos && (
        <div className="text-center mt-4">
          <button
            onClick={loadMoreVideos}
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
          >
            Load More Videos
          </button>
        </div>
      )}
    </div>
  );
};

export default YouTubeEmbed;
