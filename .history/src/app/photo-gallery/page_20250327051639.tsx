"use client";

import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Gallery() {
  const totalSlides = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, totalSlides]);

  return (
    <section id="gallery" className="relative mx-auto px-4 py-12 h-auto md:h-[700px] mt-4">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
        style={{ backgroundImage: "url('/images/about-us-bg.png')" }}
      ></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-black">
        हमारे <span className="text-orange-600">आयोजन</span>
        </h2>

        <Carousel className="max-w-5xl mx-auto " opts={{ loop: true, startIndex: currentIndex }}>
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <CarouselItem key={i} className="basis-full md:basis-1/3 ">
                <Image
                  src={`/images/gallery/${i}.png`}
                  alt={`Gallery Image ${i}`}
                  width={800}
                  height={600}
                  className="w-full h-[250px] md:h-[350px] object-cover rounded-3xl cursor-pointer border-t-4 border-b-4 border-black"
                  onClick={() => setSelectedImage(`/images/gallery/${i}.png`)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-orange-200" />
          <CarouselNext className="hidden md:flex bg-orange-200" />
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
