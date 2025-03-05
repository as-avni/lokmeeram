// import { Request, Response } from "express";
// import axios from "axios";
// import { socialMediaConfig } from "../config/socialMediaConfig";

// export const fetchSocialMediaPosts = async (req: Request, res: Response) => {
//   try {
//     const [facebookRes, instagramRes, twitterRes] = await Promise.all([
//       axios.get(`https://graph.facebook.com/me/feed?access_token=${socialMediaConfig.FACEBOOK_API_KEY}`),
//       axios.get(`https://graph.instagram.com/me/media?fields=caption&access_token=${socialMediaConfig.INSTAGRAM_API_KEY}`),
//       axios.get(`https://api.twitter.com/2/tweets?ids=USER_ID&tweet.fields=text&access_token=${socialMediaConfig.TWITTER_API_KEY}`),
//     ]);

//     const posts = [
//       ...facebookRes.data.data.map((post: any) => ({
//         platform: "facebook",
//         content: post.message || "No content",
//       })),
//       ...instagramRes.data.data.map((post: any) => ({
//         platform: "instagram",
//         content: post.caption || "No content",
//       })),
//       ...twitterRes.data.data.map((post: any) => ({
//         platform: "twitter",
//         content: post.text || "No content",
//       })),
//     ];

//     res.status(200).json(posts);
//   } catch (error) {
//     console.error("Error fetching social media posts:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


import { Request, Response } from "express";
import axios from "axios";
import { socialMediaAPIs } from "../config/socialMediaConfig";

export const fetchSocialMediaPosts = async (req: Request, res: Response) => {
    try {
        const fetchData = async (url: string | undefined) => {
        if (!url) return { error: "API URL not set" };
        try {
            const response = await axios.get(url, { timeout: 5000 }); // 5s timeout
            return response.data;
        } catch (err) {
            return { error: "Failed to fetch data", details: err };
        }
        };

        const [facebookData, instagramData, twitterData] = await Promise.all([
        fetchData(socialMediaAPIs.facebook),
        fetchData(socialMediaAPIs.instagram),
        fetchData(socialMediaAPIs.twitter),
        ]);

        res.json({ facebook: facebookData, instagram: instagramData, twitter: twitterData });
    } catch (error) {
        console.error("❌ Error fetching social media data:", error);
        res.status(500).json({ error: "Internal Server Error", details: error });
    }
    };

