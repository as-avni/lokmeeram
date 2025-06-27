import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TeamMemberCard() {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
          <Image
            src="/images/about-team/2.png"
            alt="Team member"
            width={400}
            height={400}
            className="object-cover rounded-full"
          />
        </div>
        <h3 className="text-2xl font-bold mb-1 text-center font-[Poppins]">डॉ. अशोक चतुर्वेदी</h3>
        <div className="max-w-4xl mx-auto mt-5 md:mt-10">
          कमिशनर, पंचायत एवं ग्रामीण विकास विभाग, छत्तीसगढ़ शासन
          <p className="text-xl text-gray-500">
            दण्डकारण्य क्षेत्र के बस्तर स्थित दुर्गकोबडल में जन्में श्री डॉ. अशोक हरिवंश{" "}
            <strong> ‘भैया जी’</strong> राजनीति शास्त्र, मानव संसाधन प्रबंधन एवं मानवाधिकार विषयों में उच्च शिक्षा प्राप्त भैया जी प्रशासन में एक उत्कृष्ट अधिकारी के रूप में विद्यमान हैं।
            <br /><br />
            जगद्गुरु श्रीरामानुजाचार्य की कृपा एवं माता-पिता के निर्देश में बचपन से ही धर्म के क्षेत्र में “राम और राष्ट्र एक” मंत्र को जीवन का ध्येय मानुषि, धर्म एवं राष्ट्र की सेवा में समर्पित होकर श्री रामकथा वाचक के रूप में प्रचार-प्रसार कर रहे हैं।
            <br /><br />
            भारतीय संस्कृति एवं विरासत की पुनर्स्थापना हेतु प्रयास करना, धर्मांतरण के विकराल तथा नशामुक्ति हेतु अभियान का संचालन, देश के हर घर में श्रीरामचरितमानस एवं श्रीमद्भागवद्गीता का होना सुनिश्चित करने हेतु, हिंदू धार्मिक बंधनों के यह शांत वातावरण में भारतीय आश्रम के अनुभव भी प्रदान करता है।
          </p>
        </div>
      </CardContent>
    </Card>
  )
}






