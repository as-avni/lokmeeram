"use client";
import React from "react";

const PLAYLIST_ID = "PL_bx64ia-qJl2URWkR1VQEok6ZWvOScvg";

const YouTubeEmbed: React.FC = () => {
  return (
    <div className="p-12 flex flex-col items-center">
      <div className="grid grid-cols-1 gap-8 w-full max-w-3xl">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-full flex justify-center">
            <iframe
              className="w-full max-w-lg aspect-[4/3] rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed?listType=playlist&list=${PLAYLIST_ID}&index=${index + 1}`}
              title={`YouTube Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-orange-300 font-semibold text-black rounded-lg shadow-md hover:bg-red-700 transition inline-block"
        >
          Watch Full Playlist
        </a>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
