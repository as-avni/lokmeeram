"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const PLAYLIST_ID = "PL_bx64ia-qJl2URWkR1VQEok6ZWvOScvg";
// const CHANNEL_URL = "https://youtube.com/@andtvchannel";

const YouTubeEmbed: React.FC = () => {
  const [visibleVideos] = useState(3);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="w-full md:min-h-screen max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        {Array.from({ length: visibleVideos }).map((_, index) => (
          <div 
            key={index} 
            className="relative w-full aspect-w-16 aspect-h-16 cursor-pointer"
            onClick={() => setSelectedVideo(`https://www.youtube.com/embed?listType=playlist&list=${PLAYLIST_ID}&index=${index + 1}`)}
          >
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
          className="px-4 py-2 bg-orange-300 font-semibold text-black rounded-lg shadow-md hover:bg-red-700 transition inline-block"
        >
          Watch Full Playlist
        </a>
      </div>

      <Dialog open={!!selectedVideo} onClose={() => setSelectedVideo(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div className="relative w-full max-w-4xl bg-white p-4 rounded-lg">
          <button className="absolute top-2 right-2 text-black" onClick={() => setSelectedVideo(null)}>
            ✕
          </button>
          {selectedVideo && (
            <iframe
              className="w-full aspect-video"
              src={selectedVideo}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default YouTubeEmbed;
