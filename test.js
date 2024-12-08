const nodemailer = require("nodemailer");

(async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-app-password",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: "your-email@gmail.com",
      to: "recipient-email@gmail.com",
      subject: "Test Email",
      text: "This is a test email.",
    });
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
})();
