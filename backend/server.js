import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.use((req, res, next) => {
  console.log(" INCOMING:", req.method, req.url);
  next();
});

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/favorite", favoriteRoutes);

app.get("/", (req, res) => {
  res.send("Backend is Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});