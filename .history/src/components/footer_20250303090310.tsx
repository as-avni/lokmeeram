    import Image from "next/image"
    import Link from "next/link"
    import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

    export default function Footer() {
    return (
        <footer className="bg-[#0B1220] text-white bg-[url('/images/footer-bg.png')] bg-cover h-[1000] md:h-[400]" >
        <div className="container mx-auto px-4 py-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="flex items-center">
                <Image
                src="/images/lok-me-ram-logo.png"
                alt="CMO Logo"
                width={200}
                height={60}
                className="object-contain"
                />
            </div>

            <div className="py-10">
                <h3 className="text-2xl font-semibold mb-4 relative inline-block text-orange-600 hover:text-black">
                क्विक लिंक्स
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
                </h3>
                <ul className="space-y-2">
                <li>
                    <Link href="/#about" className=" text-xl font-semibold  text-orange-600 hover:text-black">
                    हमारे बारे में
                    </Link>
                </li>
                <li>
                    <Link href="/e" className=" text-xl font-semibold text-orange-600 hover:text-black">
                    आयोजन
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-xl font-semibold text-orange-600 hover:text-black">
                    फोटो गैलरी
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-xl font-semibold text-orange-600 hover:text-black">
                    संस्थापक
                    </Link>
                </li>
                </ul>
            </div>

            <div className="py-10">
                <h3 className=" text-2xl font-semibold mb-4 relative inline-block text-orange-600 hover:text-black">
                संपर्क करें
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
                </h3>
                <div className=" text-xl font-semibold text-orange-600 hover:text-black space-y-2">
                <p>सिविल लाइन</p>
                <p>रायपुर छत्तीसगढ़, 492001</p>
                <p>📞 +91 96691 75192</p>
                <p>📠 +91 96691 75192</p>
                </div>
            </div>

            <div className="py-10">
                <h3 className="text-2xl font-semibold mb-4 relative inline-block text-orange-600 hover:text-black ">
                हमारे साथ जुड़ें
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
                </h3>
                <div className="flex space-x-4">
                <Link href="#" className="text-xl font-semibold text-orange-600 hover:text-black ">
                    <Facebook className="w-6 h-6" />
                    <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-xl font-semibold text-orange-600 hover:text-black ">
                    <Twitter className="w-6 h-6" />
                    <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-xl font-semibold text-orange-600 hover:text-black ">
                    <Instagram className="w-6 h-6" />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-xl font-semibold text-orange-600 hover:text-black ">
                    <Youtube className="w-6 h-6" />
                    <span className="sr-only">YouTube</span>
                </Link>
                </div>
            </div>
            </div>
        </div>

        <div className="border-t border-orange-600">
            <div className="container mx-auto px-4 py-4 flex justify-center font-semibold text-orange-600">
            <p className="text-lg">© 2025 - सर्वाधिकार सुरक्षित - लोक के राम की आधिकारिक वेबसाइट, भारत</p>
            {/* <Image src="/placeholder.svg" alt="NIC Logo" width={100} height={30} className="object-contain" /> */}
            </div>
        </div>
        </footer>
    )
    }




    