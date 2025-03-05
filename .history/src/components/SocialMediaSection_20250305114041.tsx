// "use client";

// import React, { useEffect, useState } from "react";
// import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

// const SocialMediaSection = () => {
// const [socialMediaData, setSocialMediaData] = useState<any[]>([]);

// useEffect(() => {
// const fetchSocialMediaData = async () => {
//     try {
//     const response = await fetch("/api/social-media");
//     if (!response.ok) {
//         throw new Error("Failed to fetch social media data");
//     }
//     const data = await response.json();
//     setSocialMediaData(data);
//     } catch (error) {
//     console.error("Error fetching social media data:", error);
//     }
// };

// fetchSocialMediaData();
// }, []);

// return (
// <section className="container mx-auto px-4 py-8 text-white">
//     <h2 className="text-3xl font-bold mb-6 text-center text-orange-400">
//     सोशल <span className="text-black">मीडिया</span>
//     </h2>

//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//     {/* Facebook Section */}
//     <div className="p-4 rounded-lg shadow-lg border">
//         <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
//         <FaFacebook className="text-blue-500 text-2xl" /> Facebook
//         </div>
//         <div className="h-48 rounded-lg overflow-y-auto border border-gray-300 p-2">
//         {socialMediaData
//             .filter((post) => post.platform === "facebook")
//             .map((post, index) => (
//             <p key={index} className="text-gray-800 mb-2">
//                 {post.content}
//             </p>
//             ))}
//         </div>
//     </div>

//     {/* Instagram Section */}
//     <div className="p-4 rounded-lg shadow-lg border">
//         <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
//         <FaInstagram className="text-pink-500 text-2xl" /> Instagram
//         </div>
//         <div className="h-48 rounded-lg overflow-y-auto border border-gray-300 p-2">
//         {socialMediaData
//             .filter((post) => post.platform === "instagram")
//             .map((post, index) => (
//             <p key={index} className="text-gray-800 mb-2">
//                 {post.content}
//             </p>
//             ))}
//         </div>
//     </div>

//     {/* Twitter (X) Section */}
//     <div className="p-4 rounded-lg shadow-lg border">
//         <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
//         <FaXTwitter className="text-black text-2xl" /> X (Twitter)
//         </div>
//         <div className="h-48 rounded-lg overflow-y-auto border border-gray-300 p-2">
//         {socialMediaData
//             .filter((post) => post.platform === "twitter")
//             .map((post, index) => (
//             <p key={index} className="text-gray-800 mb-2">
//                 {post.content}
//             </p>
//             ))}
//         </div>
//     </div>
//     </div>
// </section>
// );
// };

// export default SocialMediaSection;


"use client";

import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const SocialMediaSection = () => {
  const [socialMediaData, setSocialMediaData] = useState({
    facebook: null,
    instagram: null,
    twitter: null,
  });

  useEffect(() => {
    const fetchSocialMediaData = async () => {
      try {
        const response = await fetch("http://localhost:5005/api/social-media");
        const data = await response.json();
        setSocialMediaData(data);
      } catch (error) {
        console.error("Error fetching social media data:", error);
      }
    };

    fetchSocialMediaData();
  }, []);

  return (
    <section className="container mx-auto px-4 py-8 text-white">
      
      <h2 className="text-3xl text-center md:text-5xl px-20 font-bold mb-2 md:mb-8 text-black">
      सोशल <span className="text-orange-600">मीडिया</span>
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Facebook Section */}
        <div className="p-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
            <FaFacebook className="text-blue-500 text-2xl" /> Facebook
          </div>
          <div className="h-48 rounded-lg flex items-center justify-center border border-gray-300">
            {socialMediaData.facebook ? (
              <p>{socialMediaData.facebook}</p>
            ) : (
              <p className="text-gray-600">Loading Facebook Posts...</p>
            )}
          </div>
        </div>

        {/* Instagram Section */}
        <div className="p-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
            <FaInstagram className="text-pink-500 text-2xl" /> Instagram
          </div>
          <div className="h-48 rounded-lg flex items-center justify-center border border-gray-300">
            {socialMediaData.instagram ? (
              <p>{socialMediaData.instagram}</p>
            ) : (
              <p className="text-gray-600">Loading Instagram Posts...</p>
            )}
          </div>
        </div>

        {/* Twitter (X) Section */}
        <div className="p-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
            <FaXTwitter className="text-black text-2xl" /> X (Twitter)
          </div>
          <div className="h-48 rounded-lg flex items-center justify-center border border-gray-300">
            {socialMediaData.twitter ? (
              <p>{socialMediaData.twitter}</p>
            ) : (
              <p className="text-gray-600">Loading Twitter Posts...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
