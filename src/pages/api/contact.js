import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "maurakummer@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

try {
  await transporter.sendMail(mailOptions);
  res.status(200).json({ message: "Message sent successfully!" });
} catch (error) {
  console.error("Error sending email:", error.message, error.stack);
  res.status(500).json({ message: "Error sending email", error: error.message });
}

}
