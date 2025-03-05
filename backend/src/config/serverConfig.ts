import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const API_BASE_URL = "/api";

export const serverConfig = {
    port: process.env.PORT ? Number(process.env.PORT) : 5005, // Convert PORT to a number if it exists
  };
  
  