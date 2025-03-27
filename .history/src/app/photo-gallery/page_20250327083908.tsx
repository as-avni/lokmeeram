"use client";

import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState([1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => {
        return [prevImages[1], prevImages[2], prevImages[0]];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="relative mx-auto px-4 py-12 h-auto md:h-[700px] mt-4 bg-[url('/images/background/gallery-bg.png')] bg-cover bg-center bg-no-repeat">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
        style={{ backgroundImage: "url('/images/about-us-bg.png')" }}
      ></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-black">
          हमारे <span className="text-orange-600">आयोजन</span>
        </h2>

        <Carousel className="max-w-5xl mx-auto overflow-visible relative">
          <CarouselContent className="flex justify-center items-center flex-nowrap overflow-visible relative z-10 gap-2 sm:gap-4">
            {images.map((i, index) => (
              <CarouselItem 
              key={i} 
              className={`basis-1/3 sm:basis-1/3 transition-transform duration-500 ease-in-out relative overflow-visible ${
                  index === 1 
                    ? "scale-110 sm:scale-15 z-30 translate-y-0" 
                    : "scale-90 sm:opacity-80 opacity-100 z-10"
                } ${index === 0 ? "sm:-translate-x-4 sm:left-0 left-[-5%]" : index === 2 ? "sm:translate-x-4 sm:right-0 right-[-5%]" : ""}`}
            >
              <Image
                src={`/images/gallery/${i}.png`}
                alt={`Gallery Image ${i}`}
                width={800}
                height={600}
                className="w-full h-[200px] sm:h-[500px] object-contain cursor-pointer border-black"
                onClick={() => setSelectedImage(`/images/gallery/${i}.png`)}
              />
            </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious onClick={() => setImages((prev) => [prev[2], prev[0], prev[1]])} />
          <CarouselNext onClick={() => setImages((prev) => [prev[1], prev[2], prev[0]])} />
        </Carousel>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative p-4" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 text-white text-2xl" 
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <Image src={selectedImage} alt="Selected" width={1200} height={800} className="max-w-full max-h-screen rounded-lg object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
