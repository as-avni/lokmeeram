import express from "express";
import { fetchSocialMediaPosts } from "../controllers/socialMediaController";

const router = express.Router();

router.get("/social-media", fetchSocialMediaPosts);

export default router;
