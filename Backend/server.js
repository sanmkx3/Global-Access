import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

// ✅ Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST"],
}));

app.use(express.json());

// ✅ Health check
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend running 🚀",
  });
});

// ✅ Email route
app.post("/send", async (req, res) => {
  console.log("🔥 POST /send hit at", new Date().toISOString());
  console.log("📦 Body:", req.body);

  const { name, email, message } = req.body;

  // 🔍 Validation
  if (!name || !email) {
    console.log("❌ Missing fields");
    return res.status(400).json({
      success: false,
      error: "Name and email are required",
    });
  }

  try {
    console.log("🚀 Sending email via Resend...");

    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // default test sender
      to: process.env.EMAIL_TO,
      subject: `New Contact from ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("✅ Email sent:", response);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (err) {
    console.error("❌ ERROR:", err);

    return res.status(500).json({
      success: false,
      error: err.message || "Email sending failed",
    });
  }
});

// ✅ Port (Render compatible)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});