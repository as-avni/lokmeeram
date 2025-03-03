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

            {/* Quick Links Section */}
            <div className="py-4">
                <h3 className="text-lg font-semibold mb-4 relative inline-block">
                क्विक लिंक्स
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
                </h3>
                <ul className="space-y-2">
                <li>
                    <Link href="#" className=" text- blackhover:text-orange-500">
                    हमारे बारे में
                    </Link>
                </li>
                <li>
                    <Link href="#" className="hover:text-orange-500">
                    बजट 2024-25
                    </Link>
                </li>
                <li>
                    <Link href="#" className="hover:text-orange-500">
                    पूर्व सीएम
                    </Link>
                </li>
                <li>
                    <Link href="#" className="hover:text-orange-500">
                    मंत्रिमंडल
                    </Link>
                </li>
                <li>
                    <Link href="#" className="hover:text-orange-500">
                    वेब नीति
                    </Link>
                </li>
                </ul>
            </div>

            {/* Contact Section */}
            <div className="py-4">
                <h3 className="text-lg font-semibold mb-4 relative inline-block">
                संपर्क करें
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
                </h3>
                <div className="space-y-2">
                <p>सिविल लाइन</p>
                <p>रायपुर छत्तीसगढ़, 492001</p>
                <p>📞 +91 96691 75192</p>
                <p>📠 +91 96691 75192</p>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="py-4">
                <h3 className="text-lg font-semibold mb-4 relative inline-block">
                हमारे साथ जुड़ें
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500"></span>
                </h3>
                <div className="flex space-x-4">
                <Link href="#" className="hover:text-orange-500">
                    <Facebook className="w-6 h-6" />
                    <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-orange-500">
                    <Twitter className="w-6 h-6" />
                    <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="hover:text-orange-500">
                    <Instagram className="w-6 h-6" />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="hover:text-orange-500">
                    <Youtube className="w-6 h-6" />
                    <span className="sr-only">YouTube</span>
                </Link>
                </div>
            </div>
            </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800">
            <div className="container mx-auto px-4 py-4 flex justify-center">
            <p className="text-sm">© 2025 - सर्वाधिकार सुरक्षित - छत्तीसगढ़ के मुख्यमंत्री कार्यालय की आधिकारिक वेबसाइट, भारत</p>
            {/* <Image src="/placeholder.svg" alt="NIC Logo" width={100} height={30} className="object-contain" /> */}
            </div>
        </div>
        </footer>
    )
    }




    // import Image from 'next/image'

    // export default function Footer() {
    //     return (
    // <footer className="bg-gray-100 mt-12 ">
    //         <div className=" mx-auto px-4 py-8">
    //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    //             <div>
    //                 <Image src="/images/ram-logo.png" alt="Government Emblem" width={100} height={100} className="mb-4" />
    //                 <p className="text-sm text-gray-600">
    //                 India Positive is not for profit organization working for welfare of the society in alliance with the
    //                 state and central Government.
    //                 </p>
    //             </div>
    //             <div>
    //                 <h3 className="font-semibold mb-4">Quick Links</h3>
    //                 <div className="space-y-2">
    //                 <a href="#" className="block text-gray-600 hover:text-gray-900">
    //                     Home
    //                 </a>
    //                 <a href="#" className="block text-gray-600 hover:text-gray-900">
    //                     Awards
    //                 </a>
    //                 <a href="#" className="block text-gray-600 hover:text-gray-900">
    //                     Events
    //                 </a>
    //                 <a href="#" className="block text-gray-600 hover:text-gray-900">
    //                     Team
    //                 </a>
    //                 </div>
    //             </div>
    //             <div>
    //                 <h3 className="font-semibold mb-4">Registered Office</h3>
    //                 <p className="text-gray-600">
    //                 Prem nagar, Sitapur,
    //                 <br />
    //                 Uttarakhand, India
    //                 </p>
    //                 <p className="mt-4 text-gray-600">
    //                 +91-9999999999
    //                 <br />
    //                 info@example.com
    //                 </p>
    //             </div>
    //             </div>
    //             <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
    //             Copyright © {new Date().getFullYear()} India Positive
    //             </div>
    //         </div>
    //         </footer>
    // )
    // }