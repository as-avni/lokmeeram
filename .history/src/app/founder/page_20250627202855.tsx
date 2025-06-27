import Image from "next/image"

export default function Founders() {
    return (
        <section
            id="team"
            className="px-4 py-12 md:py-16 bg-[url('/images/background/team-bg.png')] bg-blend-color-burn bg-cover bg-center bg-no-repeat"
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl text-black text-center md:text-5xl px-20 font-bold mb-2 md:mb-4 mt-20">
                    <span className="text-orange-600">हमारे</span> संस्थापक
                </h1>

                {/* Dr. Ashok Chaturvedi */}
                <div className="max-w-5xl mx-auto items-center">
                    <div className="relative rounded-lg overflow-hidden flex justify-center mb-4">
                        <Image
                        src="/images/about-team/2.png"
                        alt="Team member"
                        width={400}
                        height={400}
                        className="object-cover rounded-full"
                        />
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-center font-[Poppins] text-black">डॉ. अशोक चतुर्वेदी</h3>
                        <p className="text-lg font-semibold text-gray-800 mb-2 text-center">संयुक्त कमिशनर, पंचायत एवं ग्रामीण विकास विभाग, छत्तीसगढ़ शासन</p>
                        <p className="text-xl text-black w-full text-justify">
                            दण्डकारण्य क्षेत्र के बस्तर स्थित दुर्गकोबडल में जन्में श्री डॉ. अशोक हरिवंश <strong>‘भैया जी’</strong> राजनीति शास्त्र, मानव संसाधन प्रबंधन एवं मानवाधिकार विषयों में उच्च शिक्षा प्राप्त भैया जी प्रशासन में एक उत्कृष्ट अधिकारी के रूप में विद्यमान हैं।
                            जगद्गुरु श्रीरामानुजाचार्य की कृपा एवं माता-पिता के निर्देश में बचपन से ही धर्म के क्षेत्र में “राम और राष्ट्र एक” मंत्र को जीवन का ध्येय मानुषि, धर्म एवं राष्ट्र की सेवा में समर्पित होकर श्री रामकथा वाचक के रूप में प्रचार-प्रसार कर रहे हैं।
                            भारतीय संस्कृति एवं विरासत की पुनर्स्थापना हेतु प्रयास करना, धर्मांतरण के विकराल तथा नशामुक्ति हेतु अभियान का संचालन, देश के हर घर में श्रीरामचरितमानस एवं श्रीमद्भागवद्गीता का होना सुनिश्चित करने हेतु, हिंदू धार्मिक बंधनों के यह शांत वातावरण में भारतीय आश्रम के अनुभव भी प्रदान करता है।
                        </p>
                </div>
                <div className="max-w-5xl mx-auto items-center">
                    <div className="relative rounded-lg overflow-hidden flex justify-center mb-4">
                        <Image
                        src="/images/about-team/2.png"
                        alt="Team member"
                        width={400}
                        height={400}
                        className="object-cover rounded-full"
                        />
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-center font-[Poppins] text-black">डॉ. अशोक चतुर्वेदी</h3>
                        <p className="text-lg font-semibold text-gray-800 mb-2 text-center">संयुक्त कमिशनर, पंचायत एवं ग्रामीण विकास विभाग, छत्तीसगढ़ शासन</p>
                        <p className="text-xl text-black w-full text-justify">
                            दण्डकारण्य क्षेत्र के बस्तर स्थित दुर्गकोबडल में जन्में श्री डॉ. अशोक हरिवंश <strong>‘भैया जी’</strong> राजनीति शास्त्र, मानव संसाधन प्रबंधन एवं मानवाधिकार विषयों में उच्च शिक्षा प्राप्त भैया जी प्रशासन में एक उत्कृष्ट अधिकारी के रूप में विद्यमान हैं।
                            जगद्गुरु श्रीरामानुजाचार्य की कृपा एवं माता-पिता के निर्देश में बचपन से ही धर्म के क्षेत्र में “राम और राष्ट्र एक” मंत्र को जीवन का ध्येय मानुषि, धर्म एवं राष्ट्र की सेवा में समर्पित होकर श्री रामकथा वाचक के रूप में प्रचार-प्रसार कर रहे हैं।
                            भारतीय संस्कृति एवं विरासत की पुनर्स्थापना हेतु प्रयास करना, धर्मांतरण के विकराल तथा नशामुक्ति हेतु अभियान का संचालन, देश के हर घर में श्रीरामचरितमानस एवं श्रीमद्भागवद्गीता का होना सुनिश्चित करने हेतु, हिंदू धार्मिक बंधनों के यह शांत वातावरण में भारतीय आश्रम के अनुभव भी प्रदान करता है।
                        </p>
                </div>
            </div>
        </section>
    )
}