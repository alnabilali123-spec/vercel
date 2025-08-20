export default async function handler(req, res) {
  const { messages, model = "openrouter/auto" } = req.body || {};

  const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://your-domain.vercel.app",
      "X-Title": "مساعد النبيل"
    },
    body: JSON.stringify({
      model,
      messages,
    })
  });

  const data = await r.json();
  res.status(r.ok ? 200 : 500).json(data);
}
