import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/release", (req, res) => {
  res.json({
    message: "Welcome to the API",
    version: process.env.RELEASE_VERSION || "1.0.0",
  });
});

export default app;