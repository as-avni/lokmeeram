"use client";

import { useEffect } from "react";

interface TwitterWidgetProps {
  width?: number;
  height?: number;
}

const TwitterWidget: React.FC<TwitterWidgetProps> = ({ width = 340, height = 500 }) => {
  const username = "LokmeRamß"; // Replace with your actual Twitter username

  useEffect(() => {
    // Load Twitter Embed SDK
    const scriptId = "twitter-embed-sdk";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [username]);

  return (
    <div className="flex justify-center items-center p-4">
      <a
        className="twitter-timeline"
        data-width={width}
        data-height={height}
        href={`https://twitter.com/${username}`}
      >
        Tweets by @{username}
      </a>
    </div>
  );
};

export default TwitterWidget;
