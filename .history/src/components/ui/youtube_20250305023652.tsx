"use"
import React, { useState } from "react";

const PLAYLIST_ID = "PL_bx64ia-qJl2URWkR1VQEok6ZWvOScvg";
const CHANNEL_URL = "https://youtube.com/@andtvchannel";

const YouTubeEmbed: React.FC = () => {
  const [visibleVideos, setVisibleVideos] = useState(3);

  const loadMoreVideos = () => {
    setVisibleVideos((prev) => prev + 3);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: visibleVideos }).map((_, index) => (
          <div key={index} className="relative w-full aspect-w-16 aspect-h-9">
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
        <button
          onClick={loadMoreVideos}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Load More Videos
        </button>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
