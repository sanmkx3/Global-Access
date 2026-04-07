import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ CORS (safe + flexible)
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
      error: "Name and email are required",
    });
  }

  console.log("📧 EMAIL_USER:", process.env.EMAIL_USER ? "Loaded" : "Missing");
  console.log("🔑 EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

  try {
    // ✅ Transporter with timeout (IMPORTANT FIX)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 10000, // 10 sec
    });

    // ✅ Verify connection before sending
    await transporter.verify();
    console.log("✅ SMTP connection verified");

    console.log("🚀 Sending email...");

    // ⏱ Timeout protection (prevents hanging)
    const sendMailPromise = transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email, // ✅ better practice
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Email sending timeout")), 10000)
    );

    const info = await Promise.race([sendMailPromise, timeoutPromise]);

    console.log("✅ Email sent:", info.response);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (err) {
    console.error("❌ ERROR:", err.message);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// ✅ Port fix (Render compatible)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});