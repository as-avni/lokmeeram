import dotenv from "dotenv";
dotenv.config();

export const socialMediaAPIs = {
  facebook: `https://graph.facebook.com/v12.0/me/feed?access_token=${process.env.FACEBOOK_API_KEY}`,
  instagram: `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${process.env.INSTAGRAM_API_KEY}`,
  twitter: `https://api.twitter.com/2/users/me/tweets?tweet.fields=created_at&access_token=${process.env.TWITTER_API_KEY}`,
};
