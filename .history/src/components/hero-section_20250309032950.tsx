"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)

  const backgroundImages = [
    "/images/background/hero-bg1.png",
    "/images/background/hero-bg2.png",
    "/images/background/hero-bg3.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="relative h-80 md:h-screen pt-0 overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentBgIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
          }}
        />
      ))}

      {/* Content */}
      <div className="container md:mt-0 mt-8 relative z-10 flex flex-col items-start justify-center h-full text-white">
        <div className=" max-w-2xl">
          <h1 className="mb-4 text-white text-4xl font-bold font-amita leading-tight md:text-7xl">
          लोक में राम
          </h1>
          <p className="mb-4 text-lg md:text-2xl font-kalam">सनातन परंपरा और ऋषि ज्ञान को जन जन तक पहुंचाने का अभियान है, <br> लोक मै राम </p>
        </div>
      </div>
    </section>
  )
}

