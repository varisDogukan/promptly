import { generateContent } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt;

    if (!prompt || typeof prompt !== "string") {
      return new Response("Geçersiz prompt", { status: 400 });
    }

    const result = await generateContent(prompt);

    return Response.json(result);
  } catch (error) {
    console.error(error);
    return new Response("Sunucu hatası", { status: 500 });
  }
}
