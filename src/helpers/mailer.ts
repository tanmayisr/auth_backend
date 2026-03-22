import nodemailer from "nodemailer";

export const mailer = async (
  to: string,
  subject: string,
  text: string
) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text
    });

    console.log("Mail sent");
  } catch (error) {
    console.log("Mail error:", error);
  }
};