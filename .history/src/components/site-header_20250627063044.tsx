"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; 

export default function SiteHeader() {
const [isOpen, setIsOpen] = useState(false);
return (
<header className="bg-orange-200 bg-opacity-80 backdrop-blur-md shadow-lg sticky md:fixed top-0 md:top-3 left-0 md:left-10 w-[98%] md:w-[95%] mx-auto rounded-lg z-50 ">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* लोगो और शीर्षक */}
        <Link href="/">
        <div className="flex items-center gap-2">
          <Image src="/images/lok-me-ram-logo.png" alt="लोगो" width={40} height={40} className="h-10 w-auto" />
          <span className="text-lg font-bold text-black">लोक में राम</span>
        </div>
        </Link>

        {/* डेस्कटॉप नेविगेशन */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="relative text-black hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            होम
          </Link>
          <Link href="/#about" className="relative text-black hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            हमारे विषय में
          </Link>
          <Link href="/founder" className="relative text-black hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            संस्थापक
          </Link>
          <Link href="/events" className="relative text-black hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            आयोजन
          </Link>
          <Link href="https://ramcharitmanas-ten.vercel.app/" className="relative text-black hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            श्रीरामचरितमानस
          </Link>
          <Link href="https://ramcharitmanas-ten.vercel.app/" className="relative text-black hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            
          </Link>
          <Link href="/#reg-form" className="relative text-black hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            डोनेट करें
          </Link>
        </nav>

        {/* डेस्कटॉप बटन */}
        <Link href="/#reg-form" className="relative font-semibold after:absolute after:bottom-0 after:left-0">
            <Button className="bg-orange-300 text-black hover:bg-orange-400 text-lg/[25px] px-4 py-2 rounded-full hidden md:block">सदस्य बनें</Button>
          </Link>

        {/* मोबाइल मेनू बटन */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* मोबाइल मेनू */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg ">
          <nav className="absolute top-16 left-0 w-full bg-orange-200 bg-opacity-80 backdrop-blur-md shadow-lg py-4 flex flex-col items-center gap-4 md:hidden">
          <Link href="/" className="relative text-black hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            होम
          </Link>
          <Link href="/#about" className="relative text-black hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            हमारे विषय में
          </Link>
          <Link href="/#team" className="relative text-black hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            संस्थापक
          </Link>
          <Link href="/events" className="relative text-black hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            डोनेट करें 
          </Link>
          <Link href="/#gallery" className="relative text-black hover:text-orange-700 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
            आयोजन
          </Link>
          <Link href="/#reg-form" className=" rounded-2xl w-full relative font-semibold after:absolute after:bottom-0 after:left-0">
            <Button className="bg-orange-300 hover:bg-orange-400 text-lg w-1/2 mx-24 text-black ">सदस्य बनें</Button>
          </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
