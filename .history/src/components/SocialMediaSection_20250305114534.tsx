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
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-center md:text-5xl px-20 font-bold mb-2 md:mb-8 text-black">
      सोशल <span className="text-orange-600">मीडिया</span>
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Facebook Section */}
        <div className="p-4 rounded-lg shadow-2xl">
          <div className="flex items-center gap-2 mb-4 text-2xl font-semibold text-">
            <FaFacebook className="text-blue-900 text-2xl" /> Facebook
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
          <div className="flex items-center gap-2 mb-4 text-2xl font-semibold">
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
