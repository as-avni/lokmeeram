"use client";

import Image from "next/image";
import { useState } from "react";

export default function About() {
    const [expandedModal, setExpandedModal] = useState<null | "lok" | "ram">(null);

    const modalContent = {
        lok: `
            लोक वह है जिसमें वनस्पति से बृहस्पति तक सभी कुछ समाया हुआ है। लोक वह है जो सामंजस्य पूर्ण स्थिति में सबको अपने अंदर समाहित करता है। और अपनी शास्त्रीयता के साथ पारंपरिक रूप से गतिमान रहता है। लोक के तीन आयाम है प्रकृति, विकृति और संस्कृति। संस्कृति के माध्यम से विकृति को दूर करते हुए प्रकृति के साथ जीना ही लोक है।
            संस्कृति, प्रकृति और विकृति वैसे तीन आयाम हैं जो प्रत्येक मनुष्य के जीवन में व्याप्त होते हैं। वर्तमान समय में संस्कृति अपने विकृत स्वरूप में चल रही है, इसलिए हमारी प्रकृति भी खराब हो रही है, क्योंकि अपने अपने भावों में ये दोनों ही मानव और मानव के सभी पक्षों से जुड़ी हैं। अतः मनुष्य की जिम्मेदारी बनती है कि वह अपनी विकृति को ठीक करते हुए संस्कृति के पक्ष के समस्त भावों को मजबूत करे, ताकि मानवीय प्रकृति फिर से स्वस्थ और विकृति विहीन हो सके।
        `,
        ram: `
            आवश्यकता
            हमारा देश भारत न सिर्फ युगों-युगों से आध्यात्मिकता का केन्द्र रहा है; बल्कि अपनी इस अनंत यात्रा में अनादिकाल से संलग्न भी रहा है। परिणामस्वरूप हमारी धार्मिकता ने विश्व को सदा अनुप्राणित किया है। भारत की युगों-युगों की इस धार्मिकता का केन्द्र बिंदु है ‘‘राम’’। राम धर्मप्राण की धड़कन का ही सबसे सुंदर नाम है।
            हमने पृथ्वी के अपने हिस्से में जो सबसे सुंदरतम और श्रेष्‍ठतम खोजा है उसको हमने एक नाम दिया है--- ‘राम’। दुनिया के लिये राम एक व्यक्तिवाचक संज्ञा हैं, किंतु हम भारतीयों के लिये राम एक अनुभवजन्य क्रिया हैं जिसको हम अपनी सांस-दर-सांस जीते रहे हैं।

            लोक में राम की उद्देशिका
            लोक में राम एक अभिनव भारत के नव निर्माण में ‘‘रामत्व’’ के समावेशी अनुप्रयोग द्वारा रामराज्य की स्थापना के मूलभाव से प्रेषित अभियान है।

            लोक में राम अभियान के मुख्य तत्व:
            1. पृथ्वी तत्व - लोक में राम महोत्सव
            - लोक में राम के विविध स्वरुपों को उत्सव की भांति मनाना ताकि जन-जन को राम से जोड़ा जा सके।

            2. आकाश तत्व - डिजिटल लोक में राम
            - सूचना प्रौद्योगिकी के इस युग में वेबसाइट, यूट्यूब, इंस्टाग्राम, फेसबुक, एक्स आदि के माध्यम से आधुनिक पीढ़ी को रामत्व के भाव से जोड़ना।

            3. अग्नि तत्व - शिक्षा लोक में राम
            - हमारी शिक्षा प्रणाली में आध्यात्मिक मूल्यों को समाहित करना और नई पीढ़ी को धार्मिकता से पुष्ट करना।

            4. वायु तत्व - लोक में राम रथ
            - भारत के कोने-कोने तक ‘राम’ के विविध स्वरूपों के दर्शन कराना और विषय विशेषज्ञों एवं आमजनों के बीच संवाद स्थापित करना।

            5. जल तत्व - लोक में राम संग्रहालय
            - प्राचीन आध्यात्मिक अभिलेखों, पुस्तकों, चित्रों आदि का संग्रहण और प्रदर्शन करना।
        `,
    };

    return (
        <section
            id="about"
            className="w-full py-12 px-4 items-center gap-4 bg-[url('/images/about-team/about-us-bg.png')] bg-cover h-auto md:h-[600]"
        >
            <h1 className="text-3xl text-black text-center md:text-5xl px-20 font-bold mb-2 md:mb-4 mt-">
                <span className="text-orange-600">हमारे </span>
                विषय में
            </h1>
            <div className="flex flex-col md:flex-row border-spacing-2">
                {/* First Card - Lok */}
                <div className="flex-1 w-full md:w-1/4 md:mx-10 md:my-4 my-4 border border-gray-500 shadow-slate-600 shadow-2xl rounded-xl bg-yellow-100 overflow-hidden relative group">
                    <p className="text-black text-center my-3 text-3xl md:text-5xl font-bold group-hover:hidden p-24">
                        लोक क्या है?
                    </p>
                    <div className="hidden group-hover:block mx-5 p-4">
                        <p className="text-black text-lg md:text-xl">
                            लोक वह है जिसमें वनस्पति से बृहस्पति तक सभी कुछ समाया हुआ है। लोक वह है जो सामंजस्य पूर्ण स्थिति में सबको अपने अंदर समाहित करता है...
                        </p>
                        <button
                            onClick={() => setExpandedModal("lok")}
                            className="mt-4 mb-3 text-black font-bold text-lg bg-yellow-200 rounded-3xl p-2 md:w-1/4"
                        >
                            और पढ़ें
                        </button>
                    </div>
                </div>

                {/* Second Card - Ram */}
                <div className="flex-1 w-full md:w-1/4 md:mx-10 md:my-4 my-4 border border-gray-500 shadow-slate-600 shadow-2xl rounded-xl bg-yellow-100 overflow-hidden relative group">
                    <p className="text-black text-center my-3 text-3xl md:text-5xl font-bold group-hover:hidden p-24">
                        लोक में राम अभियान
                    </p>
                    <div className="hidden group-hover:block mx-5 p-4">
                        <p className="text-black text-lg md:text-xl">
                            लोक में राम अभियान भारत एवं विश्व के अन्य देशों में भी प्रवाहमान है और राम के विभिन्न स्वरुपों को धर्म एवं राजनीति की मुख्यधारा के साथ जोड़कर...
                        </p>
                        <button
                            onClick={() => setExpandedModal("ram")}
                            className="mt-4 mb-3 text-black font-bold text-lg bg-yellow-200 rounded-3xl p-2 md:w-1/4"
                        >
                            और पढ़ें
                        </button>
                    </div>
                </div>

                {/* Ram Ji Image */}
                <div className="flex-1 flex justify-center w-full md:w-1/2 mb-4">
                    <Image
                        src={`/images/ram-ji.png`}
                        alt="ram image"
                        width={400}
                        height={400}
                        className="rounded-lg w-full md:w-[50%] md:h-[80%]"
                    />
                </div>
            </div>

            {/* Modal */}
            {expandedModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-yellow-100 w-[95%] h-[95%] md:w-[50%] md:h-[80%] rounded-lg p-5 overflow-y-auto relative">
                        <p className="text-black text-md md:text-xl whitespace-pre-line">
                            {modalContent[expandedModal]}
                        </p>
                    </div>
                    <button
                        onClick={() => setExpandedModal(null)}
                        className="absolute md:top-[10%] top-[2%] right-[2%] md:right-[15%] p-2 text-yellow-500 rounded-full text-3xl"
                    >
                        ✖
                    </button>
                </div>
            )}
        </section>
    );
}