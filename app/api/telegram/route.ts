import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = "8945177893:AAHWkPp9fUGIMjXJeEhpGdzvLbK2n-Qhd0c";
const CHAT_ID = "8044613120";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, activity, email, address } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const message = `📥 *طلب تنزيل جديد من الموقع*

👤 *الاسم:* ${name}
💼 *نوع النشاط:* ${activity || "—"}
📧 *البريد:* ${email}
📍 *العنوان:* ${address || "—"}
🕐 *التاريخ:* ${new Date().toLocaleString("ar-EG", { timeZone: "Africa/Cairo" })}`;

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await res.json();

    if (!data.ok) {
      return NextResponse.json({ error: "Telegram error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
