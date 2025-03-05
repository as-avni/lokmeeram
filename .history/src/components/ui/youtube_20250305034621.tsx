"use client";
import React, { useEffect } from "react";

const ElfsightInstagramFeed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">Instagram Feed</h2>
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <div className="elfsight-app-77074c60-3d99-4513-b033-df0a045114a5 w-full h-full" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
};

export default ElfsightInstagramFeed;