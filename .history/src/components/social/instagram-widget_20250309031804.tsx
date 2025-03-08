"use client";

import { useEffect } from "react";

interface InstagramWidgetProps {
  width?: number;
  height?: number;
}

const InstagramWidget: React.FC<InstagramWidgetProps> = ({ width = 340, height = 500 }) => {
  const username = "lokme_ram"; // Replace with your actual Instagram username

  useEffect(() => {
    // Load Instagram Embed SDK
    const scriptId = "instagram-embed-sdk";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        if ((window as typeof window & { instgrm?: { Embeds: { process: () => void } } }).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }
  }, [username]);

  return (
    <div className="flex justify-center items-center p-4">
      <blockquote
        className="instagram-media rounded-xl shadow-lg overflow-hidden"
        data-instgrm-permalink={`https://www.instagram.com/${username}/`}
        data-instgrm-version="14"
        style={{ maxWidth: width, height }}
      ></blockquote>
    </div>
  );
};

export default InstagramWidget;
