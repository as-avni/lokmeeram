"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const YouTubeSection = () => {
const [videos, setVideos] = useState<any[]>([]);

useEffect(() => {
const fetchVideos = async () => {
    try {
    console.log("Fetching videos from backend...");
    const response = await axios.get("/api/youtube");
    console.log("Backend Response:", response.data);
    setVideos(response.data.items);
    } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    }
};

fetchVideos();
}, []);

return (
<section className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
    🎬 Latest YouTube Videos
    </h2>
    {videos.length === 0 ? <p className="text-center text-gray-500">No videos found.</p> : null}

    <div className="relative">
    <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        }}
        navigation={{
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full"
    >
        {videos.map(
        (video) =>
            video.id.videoId && (
            <SwiperSlide key={video.id.videoId}>
                <div className="shadow-xl p-4 rounded-lg transition transform hover:scale-105">
                <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg"
                ></iframe>
                <h3 className="mt-3 text-lg font-semibold text-center text-gray-900 dark:text-white">
                    {video.snippet.title}
                </h3>
                </div>
            </SwiperSlide>
            )
        )}
    </Swiper>
    <div className="swiper-button-prev !left-[-50px] w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center"></div>
    <div className="swiper-button-next !right-[-50px] w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center"></div>
    </div>
    <div className="flex justify-center mt-6">
    <a
        href="https://www.youtube.com/channel/YOUR_CHANNEL_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition"
    >
        Visit YouTube Channel
    </a>
    </div>
</section>
);
};

export default YouTubeSection;
