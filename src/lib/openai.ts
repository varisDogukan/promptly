import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateContent(prompt: string) {
  const completion = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Tüm çıktıyı markdown formatında yaz. En az bir başlık ve bir liste kullan. Kullanıcının konusuna göre bilgi verici bir içerik üret.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "gpt-3.5-turbo",
    store: true,
  });

  const message = completion.choices[0].message.content;

  return message;
}
