import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// ✅ Health check
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Backend running" });
});

// ✅ DEBUG POST
app.post("/send", async (req, res) => {
  console.log("🔥 POST /send hit");
  console.log("📦 Body:", req.body);

  const { name, email, message } = req.body;

  // Step 1: Validate input
  if (!name || !email) {
    console.log("❌ Missing fields");
    return res.status(400).json({ error: "Missing name or email" });
  }

  // Step 2: Check ENV
  console.log("📧 EMAIL_USER:", process.env.EMAIL_USER ? "Loaded" : "Missing");
  console.log("🔑 EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

  try {
    // Step 3: Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("🚀 Sending email...");

    // Step 4: Send mail
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("✅ Email sent:", info.response);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (err) {
    console.error("❌ ERROR:", err);

    res.status(500).json({
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));