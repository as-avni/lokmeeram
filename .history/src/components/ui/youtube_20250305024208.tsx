"use client";
import React, { useState, useEffect } from "react";

const PLAYLIST_ID = "PL_bx64ia-qJl2URWkR1VQEok6ZWvOScvg";
const API_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;

const YouTubeEmbed: React.FC = () => {
  const [videoIds, setVideoIds] = useState<string[]>([]);
  const [visibleVideos, setVisibleVideos] = useState(3);
  
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const videoElements = doc.querySelectorAll("a.yt-simple-endpoint.style-scope.ytd-playlist-video-renderer");
        const ids = Array.from(videoElements).map((el) => el.getAttribute("href")?.split("v=")[1]?.split("&")[0] || "");
        setVideoIds(ids.filter(id => id));
      })
      .catch((error) => console.error("Error fetching playlist videos:", error));
  }, []);

  const loadMoreVideos = () => {
    setVisibleVideos((prev) => Math.min(prev + 3, videoIds.length));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videoIds.slice(0, visibleVideos).map((videoId, index) => (
          <div key={videoId} className="relative w-full h-64 md:h-80 overflow-hidden">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      {visibleVideos < videoIds.length && (
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