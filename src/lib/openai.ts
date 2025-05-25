import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateContent(prompt: string) {
  const completion = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
          Kullanıcının verdiği konu hakkında markdown formatında detaylı bir içerik üret. 
          - Yazıya anlamlı bir başlıkla başla (## Başlık)
          - Giriş paragrafı ile kullanıcıyı karşıla
          - Ana noktaları listelerle açıkla (• veya -)
          - Gerekiyorsa alt başlıklar kullan (###)
          - Emoji ve ikonlarla içeriği zenginleştir (örneğin ✅, 🚀, 💡 gibi)
          - Teknik konularda gerekiyorsa \`\`\` kod bloğu \`\`\` kullan
          - Sonuna bir özet veya öneri cümlesi ekle

          Konu ne olursa olsun profesyonel, açıklayıcı ve ilgi çekici bir yazı olsun. Gereksiz tekrarlar veya aşırı sade cümleler olmasın.
        `,
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
