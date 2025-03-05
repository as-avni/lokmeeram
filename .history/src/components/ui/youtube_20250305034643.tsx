"use client";
import React, { useState } from "react";

const PLAYLIST_ID = "PL_bx64ia-qJl2URWkR1VQEok6ZWvOScvg";
const CHANNEL_URL = "https://youtube.com/@andtvchannel";

const YouTubeEmbed: React.FC = () => {
  const [visibleVideos, setVisibleVideos] = useState(3);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols gap-4">
        {Array.from({ length: visibleVideos }).map((_, index) => (
          <div key={index} className="relative w-full h-64 md:h-80 overflow-hidden">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed?listType=playlist&list=${PLAYLIST_ID}&index=${index + 1}`}
              title={`YouTube Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a
          href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition inline-block"
        >
          Watch Full Playlist
        </a>
      </div>
    </div>
  );
};

export default YouTubeEmbed;