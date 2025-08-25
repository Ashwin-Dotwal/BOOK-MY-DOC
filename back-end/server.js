import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminroutes.js";
import doctorRouter from "./routes/doctorroutes.js";
import userRouter from "./routes/userRoutes.js";

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
const port = process.env.PORT || 4000;

// Connect DB and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json()); // parse JSON body
app.use(cors()); // allow cross-origin requests

// API routes
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

// Test route
app.post("/test", (req, res) => {
  console.log("Test request body:", req.body);
  res.json({ success: true, data: req.body });
});

// Root route
app.get("/", (req, res) => {
  res.send("API WORKING GOOD 🚀");
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server started on port ${port}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
});
