import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactBody {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  countryCode?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  reasons?: string[];
}

export async function POST(req: Request) {
  try {
    const body: ContactBody = await req.json();
    const { name, company, email, phone, countryCode, projectType, budget, message, reasons } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const phoneDisplay = phone ? `${countryCode || ""} ${phone}` : "Not provided";
    const reasonsDisplay = reasons?.length ? reasons.join(", ") : null;
    const subjectLine = reasonsDisplay
      ? `New Inquiry: ${reasonsDisplay} — ${company || name}`
      : `New Inquiry: ${projectType || "General"} — ${company || name}`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h2 style="color: #1a1a1a; font-size: 20px; font-weight: 600; margin-bottom: 24px;">
          New Project Inquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px; width: 140px;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a1a; font-size: 14px;">${name}</td>
          </tr>
          ${company ? `<tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Company</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a1a; font-size: 14px;">${company}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a1a; font-size: 14px;">
              <a href="mailto:${email}" style="color: #1a1a1a;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Phone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a1a; font-size: 14px;">${phoneDisplay}</td>
          </tr>
          ${reasonsDisplay ? `<tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Reason</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a1a; font-size: 14px;">${reasonsDisplay}</td>
          </tr>` : ""}
          ${projectType ? `<tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Project Type</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a1a; font-size: 14px;">${projectType}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Budget</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a1a; font-size: 14px;">${budget || "Not specified"}</td>
          </tr>
        </table>
        ${message ? `
          <div style="margin-top: 24px;">
            <p style="color: #888; font-size: 13px; margin-bottom: 8px;">Message</p>
            <p style="color: #1a1a1a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>` : ""}
        <p style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; color: #aaa; font-size: 11px;">
          Sent from saintstechnologies.com contact form
        </p>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Saints Technologies" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "info@saintstechnologies.com",
      replyTo: email,
      subject: subjectLine,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
