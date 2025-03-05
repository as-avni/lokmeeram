"use client"

import Image from "next/image";
import { useState } from "react";

export default function About() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="about" className="w-full py-12 px-4 items-center gap-4 bg-[url('/images/about-team/about-us-bg.png')] bg-cover h-auto md:h-[600]">
            <h1 className="text-3xl text-black text-center md:text-5xl px-20 font-bold mb-2 md:mb-4">
                <span className="text-orange-600">हमारे </span> बारे में
            </h1>
            <div className="flex flex-col md:flex-row border-spacing-2">
                <div className="flex-1 w-full md:w-1/2 md:mx-10 md:my-4 border border-gray-500 shadow-slate-600 shadow-2xl rounded-xl bg-yellow-100">
                    <p className="text-black mx-5 my-3 text-lg md:text-2xl max-w-lg md:max-w-3xl">
                        <span className="font-bold">सनातन परंपरा और ऋषि ज्ञान को जन जन तक पहुंचाने का नाम है ।</span>
                    </p>
                    <p className=" mx-5 font-bold text-black text-lg md:text-2xl max-w-lg md:max-w-xl text-justify">लोक में राम - लोक क्या है?</p>
                    <p className="mx-5 text-black text-lg md:text-2xl max-w-lg md:max-w-3xl">लोक वह है जिसमें वनस्पति से बृहस्पति तक सभी कुछ समाया हुआ है।
                        लोक वह है जो सामंजस पूर्ण स्थिति में सबको अपने अंदर समाहित करता है। लोक के तीन आयाम है प्रकृति, विकृति और संस्कृति संस्कृति के माध्यम से विकृति को दूर करते हुए प्रकृति के साथ जीना ही वाला ही लोक है।
                    </p>
                    {expanded && (
                        <>
                            <p className="mx-5 text-black text-lg md:text-2xl max-w-lg md:max-w-3xl">संस्कृति, प्रकृति और विकृति
                                हर मनुष्य के जीवन में यह तीन चीज होती है वर्तमान समय में संस्कृति विकृति रूप में चल रही 
                                है इसलिए हमारी प्रकृति खराब हो रही है। 
                                क्योंकि मनुष्य से दोनों चीज जुड़ी हैं संस्कृति और विकृति इसलिए मनुष्य की जिम्मेदारी बनती है 
                                कि वह अपनी विकृति को ठीक करते हुए 
                                संस्कृत को मजबूत करें जिस की प्रकृति फिर से ठीक हो सके।
                            </p>
                        </>
                    )}
                    <button 
                        onClick={() => setExpanded(!expanded)} 
                        className=" mx-5 mt-4 mb-3 md: text-black font-bold text-lg/[30px] bg-yellow-200 rounded-3xl w-1/6">
                        {expanded ? "कम पढ़ें" : "और पढ़ें"}
                    </button>
                </div>
                <div className="flex-1 flex justify-center w-full md:w-1/2 mb-4">
                    <Image
                        src={`/images/ram-ji.png`}
                        alt="ram image"
                        width={400}
                        height={400}
                        className="rounded-lg w-full md:w-[50%]"
                    />
                </div>
            </div>
        </section>
    );
}
