"use client";
import { useEffect } from "react";

const ElfsightFacebookFeed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="elfsight-app-f7917b7a-5650-451d-8fb6-32c68bd03c83" data-elfsight-app-lazy></div>
    </div>
  );
};

export default ElfsightFacebookFeed;
