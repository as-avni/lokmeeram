
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

