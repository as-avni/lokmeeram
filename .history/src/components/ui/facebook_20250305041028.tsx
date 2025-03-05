import { useEffect } from "react";

type ElfsightFacebookFeedProps = {
  appId: string;
};

const ElfsightFacebookFeed: React.FC<ElfsightFacebookFeedProps> = ({ appId }) => {
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
    <div className="flex justify-center items-center p-4">
      <div className={`elfsight-app-${appId}`} data-elfsight-app-lazy></div>
    </div>
  );
};

export default ElfsightFacebookFeed;
