import type { FormData } from "@/types/contcat-section";
export async function sendTelegramMessage(data: FormData): Promise<boolean> {
  try {
    const res = await fetch("https://ixtirochiman-uz-bot.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("❌ Server error:", res.status);
      return false;
    }
    const result = await res.json();
    console.log("✅ Telegramga yuborildi:", result);
    return true;
  } catch (error) {
    console.error("❌ Fetch xatosi:", error);
    return false;
  }
}
