    import Image from "next/image"
    import Link from "next/link"
    import { Facebook, Instagram, Youtube } from "lucide-react"

    export default function Footer() {
    return (
        <footer className="text-white bg-[url('/images/footer-bg.png')] bg-cover h-full md:h-[400]">
        <div className="container mx-auto px-4 py-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-8">
            {/* Logo Section */}
            <div className="flex flex-col items-start mx-0.5 md:mx-auto my-2 md:my-auto">
                <Link href="/">
                    <Image
                    src="/images/lok-me-ram-logo.png"
                    alt="Lok Me Ram Logo"
                    width={180}
                    height={50}
                    className="object-cover px-0 mx-auto md:mx-0"
                    />
                </Link>
            </div>

            <div className="py-6 md:py-10 text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 relative inline-block text-black">
                क्विक लिंक्स
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
                </h3>
                <ul className="space-y-1 md:space-y-2">
                <li><Link href="/#about" className="text-base font-semibold hover:text-orange-600 text-black">हमारे बारे में</Link></li>
                <li><Link href="/events" className="text-base font-semibold hover:text-orange-600 text-black">आयोजन</Link></li>
                <li><Link href="/#gallery" className="text-base font-semibold hover:text-orange-600 text-black">फोटो गैलरी</Link></li>
                <li><Link href="/#team" className="text-base font-semibold hover:text-orange-600 text-black">संस्थापक</Link></li>
                </ul>
            </div>

            <div className="py-6 md:py-10 text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 relative inline-block text-black">
                संपर्क करें
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
                </h3>
                <div className="text-base font-semibold text-black space-y-1 md:space-y-2">
                <p>एच 401, तीसरी मंज़िल, अशोका हाइट्स, मावा, रायपुर, छत्तीसगढ़ 492005</p>
                <p>📞 <a href="tel:+91 9669175192" className="hover:underline hover:text-orange-600">+91 9669175192</a></p>
                <p>📠 <a href="tel:+91 9669175192" className="hover:underline hover:text-orange-600">+91 9669175192</a></p>
                </div>
            </div>

            <div className="py-6 md:py-10 text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 relative inline-block text-black">
                हमारे साथ जुड़ें
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
                </h3>
                <div className="flex justify-start space-x-4">
                <Link href="https://www.facebook.com/LokMeRam" target="_blank" className="hover:text-orange-600 text-black">
                    <Facebook className="w-6 h-6" />
                </Link>
                <Link href="https://x.com/LokMeRam" target="_blank" className="hover:text-orange-600 text-black">
                    <svg className="h-6 w-6 text-black hover:text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </Link>
                <Link href="https://www.instagram.com/lokme_ram/" target="_blank" className="hover:text-orange-600 text-black">
                    <Instagram className="w-6 h-6" />
                </Link>
                <Link href="https://www.youtube.com/@LokmeRam/videos" target="_blank" className="hover:text-orange-600 text-black">
                    <Youtube className="w-6 h-6" />
                </Link>
                </div>
            </div>
            </div>
        </div>

        <div className="border-t border-black text-left">
            <div className="container mx-auto px-4 py-4 font-semibold text-black">
            <p className="text-sm md:text-lg">© 2025 - सर्वाधिकार सुरक्षित - लोक के राम की आधिकारिक वेबसाइट, भारत</p>
            </div>
        </div>
        </footer>
    )
    }