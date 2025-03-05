import React, { useEffect, useState } from "react";

const CHANNEL_ID = "UCJJap_3RGZ2UxqLTLz0K39g";
const CHANNEL_URL = "https://youtube.com/@sonypicsuk";
const PROXY_URL = "https://corsproxy.io/?"; // Public CORS proxy

const YouTubeEmbed: React.FC = () => {
  const [videoIds, setVideoIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const youtubeRSSUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
        const response = await fetch(`${PROXY_URL}${encodeURIComponent(youtubeRSSUrl)}`);
        if (!response.ok) throw new Error("Failed to fetch YouTube RSS feed");
        
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        const entries = Array.from(xmlDoc.getElementsByTagName("entry"));
        const ids = entries.slice(0, 3).map(entry => {
          const videoUrl = entry.getElementsByTagName("link")[0].getAttribute("href") || "";
          return videoUrl.split("v=")[1];
        });
        setVideoIds(ids);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videoIds.map((videoId, index) => (
          <div key={index} className="relative w-full aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
        >
          More Videos
        </a>
      </div>
    </div>
  );
};

export default YouTubeEmbed;