export const fetchSocialMediaData = async () => {
try {
    const response = await fetch("/api/social-media"); // Call backend API
    if (!response.ok) {
    throw new Error("Failed to fetch social media data");
    }
    return await response.json(); // Return JSON data
} catch (error) {
    console.error("Error fetching social media data:", error);
    return null;
}
};
