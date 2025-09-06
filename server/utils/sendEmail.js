// email.js

const nodemailer = require("nodemailer");
require("dotenv").config();

// Use secure SMTP settings instead of service shortcut
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",       // Gmail SMTP server
  port: 465,                    // Secure port
  secure: true,                 // Use SSL/TLS
  auth: {
    user: process.env.EMAIL_USER, // Gmail address
    pass: process.env.EMAIL_PASS, // App Password from Google
  },
});

const sendEmail = async (to, subject, message) => {
  try {
    await transporter.sendMail({
      from: `"Softpro Examination Portal" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: message,
    });
    console.log("✅ Email sent successfully");
    return true;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return false;
  }
};

module.exports = sendEmail;
