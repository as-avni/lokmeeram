    import Image from "next/image"
    import Link from "next/link"
    import { Facebook, Instagram, Youtube } from "lucide-react"

    export default function Footer() {
    return (
        <footer className=" text-white bg-[url('/images/footer-bg.png')] bg-cover h-full md:h-[400]" >
        <div className="container mx-auto px-4 py-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo Section */}
            <Link href="/">
                <div className="flex items-center">
                    <Image
                    src="/images/lok-me-ram-logo.png"
                    alt="CMO Logo"
                    width={200}
                    height={60}
                    className="object-contain"
                    />
                </div>
            </Link>

            <div className="py-10">
                <h3 className="text-2xl font-semibold mb-4 relative inline-block text-black">
                क्विक लिंक्स
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
                </h3>
                <ul className="space-y-2">
                <li>
                    <Link href="/#about" className=" text-base font-semibold  hover:text-orange-600 text-black">
                    हमारे बारे में
                    </Link>
                </li>
                <li>
                    <Link href="/events" className=" text-base font-semibold hover:text-orange-600 text-black">
                    आयोजन
                    </Link>
                </li>
                <li>
                    <Link href="/#gallery" className="text-base font-semibold hover:text-orange-600 text-black">
                    फोटो गैलरी
                    </Link>
                </li>
                <li>
                    <Link href="/#team" className="text-xl font-semibold hover:text-orange-600 text-black">
                    संस्थापक
                    </Link>
                </li>
                </ul>
            </div>

            <div className="py-10">
                <h3 className=" text-2xl font-semibold mb-4 relative inline-block text-black">
                संपर्क करें
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
                </h3>
                <div className=" text-base font-semibold text-black space-y-2">
                <p>H 401 3rd Floor, Ashoka Height, Mowa, Raipur, Chhattisgarh 492005</p>
                <p>📞 <a href="tel:+91 9669175192" className="hover:underline hover:text-orange-600">+919669175192</a></p>
                <p>📠 <a href="tel:+91 9669175192" className="hover:underline hover:text-orange-600">+919669175192</a></p>
                </div>
            </div>

            <div className="py-10">
                <h3 className="text-2xl font-semibold mb-4 relative inline-block text-black ">
                हमारे साथ जुड़ें
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
                </h3>
                <div className="flex space-x-4">
                <Link href="https://www.facebook.com/LokMeRam" target="_blank" className="text-xl font-semibold hover:text-orange-600 text-black ">
                    <Facebook className="w-6 h-6" />
                    <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://x.com/LokMeRam?t=-jTM9wsZIpuoRR9IhRBcrw&s=09&fbclid=PAZXh0bgNhZW0CMTEAAaaAYIWH3durzpoB6Ol9spshyuJ5i_PKyK9q9xiR-5NYkdKbj_KpM2vbv8Q_aem_G1N3OyXyTFd-03oMCNFS8w" target="_blank" className="text-xl font-semibold hover:text-orange-600 text-black ">
                <svg className="h-6 w-6 text-black hover:text-orange-600" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                    <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://www.instagram.com/lokme_ram/" target="_blank" className="text-xl font-semibold hover:text-orange-600 text-black ">
                    <Instagram className="w-6 h-6" />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://www.youtube.com/@LokmeRam/videos" target="_blank" className="text-xl font-semibold hover:text-orange-600 text-black ">
                    <Youtube className="w-6 h-6" />
                    <span className="sr-only">YouTube</span>
                </Link>
                </div>
            </div>
            </div>
        </div>

        <div className="border-t border-black">
            <div className="container mx-auto px-4 py-4 flex justify-center font-semibold text-black">
            <p className="text-lg">© 2025 - सर्वाधिकार सुरक्षित - लोक के राम की आधिकारिक वेबसाइट, भारत</p>
            {/* <Image src="/placeholder.svg" alt="NIC Logo" width={100} height={30} className="object-contain" /> */}
            </div>
        </div>
        </footer>
    )
    }