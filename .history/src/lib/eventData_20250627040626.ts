export interface EventCardData {
    id: number;
    name: string;
    date: string;
    description: string;
    imageSrc: string;
    phoneNumber: string;
    googleFormUrl: string;
}
export const cardData: EventCardData[] = [
    {
    id: 1,
    name: "लोक में राम उत्सव - भोपाल",
    date: "2025-07-14",
    description: "मध्य प्रदेश की जनजातीय विरासत, संगीत, नृत्य और लोक परंपराओं का उत्सव। एक जीवंत सांस्कृतिक अनुभव।",
    imageSrc: "/images/events/bhopal-utsav.jpg",
    phoneNumber: "+91-7894561230",
    googleFormUrl: "https://forms.gle/LokMeRamBhopal2025",
    },
]