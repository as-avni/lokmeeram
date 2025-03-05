import "dotenv/config";
import express from "express";
import { serverConfig } from "./config/serverConfig";

const app = express();
const PORT = serverConfig.port;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
