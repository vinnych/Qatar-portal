import { createMimeMessage } from "mimetext";
import { EmailMessage } from "cloudflare:email";

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
    }

    try {
      const { email } = await request.json();

      if (!email) {
        return new Response(JSON.stringify({ error: "Email is required" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Create a professional MIME email
      const msg = createMimeMessage();
      msg.setSender({ name: "Arabia Khaleej", addr: "connect@arabiakhaleej.com" });
      msg.setRecipient("asishchilakapati@gmail.com");
      msg.setSubject("✨ New Inquiry: Arabia Khaleej");
      msg.addMessage({
        contentType: 'text/html',
        data: `
          <div style="font-family: sans-serif; padding: 40px; background-color: #f9f9f9; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; border: 1px solid #D4AF37;">
              <h2 style="color: #D4AF37; margin-bottom: 20px;">Community Inquiry</h2>
              <p>A new inquiry has been received for the <strong>Arabia Khaleej</strong> portal.</p>
              <div style="margin: 30px 0; padding: 20px; background: #fafafa; border-radius: 8px; border-left: 4px solid #D4AF37;">
                <p style="margin: 0; font-size: 16px;"><strong>Email:</strong> ${email}</p>
              </div>
              <p style="font-size: 12px; color: #999;">Date: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })} GST</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 10px; color: #aaa; text-align: center; text-transform: uppercase; letter-spacing: 1px;">
                Arabia Khaleej — Premier Digital Experience
              </p>
            </div>
          </div>
        `
      });

      // 1. Construct and send the Notification to YOU (The Owner)
      const emailMsg = new EmailMessage(
        "connect@arabiakhaleej.com",
        "asishchilakapati@gmail.com",
        msg.asRaw()
      );

      await env.SEND_EMAIL.send(emailMsg);

      // 2. Send the Auto-Reply to the CUSTOMER (The Visitor)
      // Using Mailchannels to allow sending to any email address
      const autoReplyData = {
        personalizations: [
          {
            to: [{ email: email }],
          },
        ],
        from: {
          email: "connect@arabiakhaleej.com",
          name: "Arabia Khaleej",
        },
        subject: "Thank you for your inquiry — Arabia Khaleej",
        content: [
          {
            type: "text/html",
            value: `
              <div style="font-family: 'Times New Roman', serif; padding: 50px; background-color: #0a0a0a; color: #e0e0e0; text-align: center;">
                <div style="max-width: 500px; margin: 0 auto; border: 1px solid #D4AF37; padding: 40px; border-radius: 4px;">
                  <h1 style="color: #D4AF37; font-weight: 300; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 30px;">Arabia Khaleej</h1>
                  <p style="font-size: 18px; line-height: 1.8; font-style: italic; opacity: 0.9;">
                    "Thank you for your interest in our premier community guide."
                  </p>
                  <div style="margin: 40px auto; width: 40px; height: 1px; background: #D4AF37; opacity: 0.5;"></div>
                  <p style="font-size: 14px; opacity: 0.7; line-height: 1.6; letter-spacing: 1px;">
                    Our team has received your inquiry. We are currently curating our exclusive waitlist and will reach out to you personally as we expand our gilded access.
                  </p>
                  <p style="margin-top: 60px; font-size: 10px; text-transform: uppercase; letter-spacing: 3px; color: #D4AF37; opacity: 0.8;">
                    Independent Community Guide — GCC
                  </p>
                </div>
              </div>
            `,
          },
        ],
      };

      await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(autoReplyData),
      });

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Internal Server Error", details: err.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  }
};
