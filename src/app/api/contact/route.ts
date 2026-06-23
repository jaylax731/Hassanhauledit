import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, address, date, junkType, loadSize, message, photoName } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #f5f5f5; padding: 32px; border-radius: 8px;">
        <div style="background: #F97316; padding: 16px 24px; border-radius: 6px 6px 0 0; margin: -32px -32px 28px;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Quote Request — HassanHauledit</h1>
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #333; color: #aaa; width: 40%; font-size: 13px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333; font-weight: bold;">${name}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #333; color: #aaa; font-size: 13px;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333;"><a href="tel:${phone}" style="color: #F97316;">${phone}</a></td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #333; color: #aaa; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333;"><a href="mailto:${email}" style="color: #F97316;">${email}</a></td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #333; color: #aaa; font-size: 13px;">Address / Town</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333;">${address}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #333; color: #aaa; font-size: 13px;">Preferred Date</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333;">${date || "Not specified"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #333; color: #aaa; font-size: 13px;">Type of Junk</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333;">${junkType || "Not specified"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #333; color: #aaa; font-size: 13px;">Load Size</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #F97316; font-weight: bold;">${loadSize}</td></tr>
          ${photoName ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #333; color: #aaa; font-size: 13px;">Photo</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333;">${photoName}</td></tr>` : ""}
        </table>

        ${message ? `
        <div style="margin-top: 24px; background: #252525; padding: 16px; border-radius: 6px; border-left: 3px solid #F97316;">
          <div style="color: #aaa; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Message / Job Details</div>
          <p style="margin: 0; line-height: 1.6;">${message}</p>
        </div>` : ""}

        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #333; font-size: 12px; color: #666;">
          Sent from hassanhauleditsrc.com · Reply directly to <a href="mailto:${email}" style="color: #F97316;">${email}</a>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"HassanHauledit Website" <${process.env.GMAIL_USER}>`,
      to: "hassan@hassansoldit.com",
      cc: "trailertrucksjunk@gmail.com",
      replyTo: email,
      subject: `New Quote Request — ${loadSize} — ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
