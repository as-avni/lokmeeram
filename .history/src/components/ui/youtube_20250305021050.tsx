import React from "react";

type YouTubeEmbedProps = {
  videoIds: string[];
  channelUrl: string;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoIds, channelUrl }) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videoIds.slice(0, 3).map((videoId, index) => (
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
          href={channelUrl}
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
