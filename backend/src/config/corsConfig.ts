import cors from "cors";

export const corsOptions = cors({
  origin: "*", // Allow requests from all origins (change this for security)
  methods: ["GET"],
  allowedHeaders: ["Content-Type", "Authorization"],
});
