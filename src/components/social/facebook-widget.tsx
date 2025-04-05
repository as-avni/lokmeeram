"use client";

import { useEffect } from "react";

interface FacebookWidgetProps {
  width?: number;
  height?: number;
}

const FacebookWidget: React.FC<FacebookWidgetProps> = ({ width = 340, height = 500 }) => {
  const pageId = "204572026081976"; // Replace with your actual Facebook Page ID

  useEffect(() => {
    // Load Facebook SDK
    const scriptId = "facebook-jssdk";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center items-center p-4">
      <div
        className="fb-page rounded-lg shadow-lg overflow-hidden"
        data-href={`https://www.facebook.com/${pageId}`}
        data-tabs="timeline"
        data-width={width}
        data-height={height}
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </div>
  );
};

export default FacebookWidget;
