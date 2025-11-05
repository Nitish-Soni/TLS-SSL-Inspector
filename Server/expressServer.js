import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ora from "ora";
import healthCheck from "./healthCheck.js";

dotenv.config();

const app = express();
const loadingSpinner = ora("Starting the SSL/TLS Inspector Server").start();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "Online",
    message: "SSL/TLS Inspector is running Healthy and awaiting Requests",
  });
});

app.post("/api/urlhealthcheck", healthCheck);

app.use((req, res) => {
  res.status(200).json({
    status: "Online",
    message: "SSL/TLS Inspector is running Healthy and awaiting Requests",
    note: "Invalid End-Point, but Server is Alive and Healthy",
  });
});

const PORT = process.env.PORT;

setTimeout(() => {
  app.listen(PORT, () => {
    loadingSpinner.stop();
    console.log("==================================================");
    console.log(`SSL/TLS Inspector is running and awaiting Requests`);
    console.log("==================================================");
  });
}, 2000);
