import { v4 as uuidv4 } from "uuid";
import useStore from "@/store/zustandStore";

export async function generatePrompt(prevState: unknown, formData: FormData) {
  const store = useStore.getState();

  try {
    if (store.promptCount >= 3) {
      return {
        success: false,
        message: "Maksimum 3 içerik oluşturabilirsiniz.",
      };
    }

    const prompt = formData.get("prompt") as string;

    if (!prompt) {
      return {
        success: false,
        message: "Lütfen prompt giriniz.",
      };
    }

    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ prompt }),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("İstek başarısız");
    }

    const content = await res.json();

    store.addedGeneratedContent({
      id: uuidv4(),
      prompt,
      content,
      createdAt: new Date().toISOString(),
    });

    return {
      success: true,
      message: "İçerik başarıyla üretildi.",
    };
  } catch (error) {
    console.log(error);

    return { success: false, message: "Bir hata oluştu." };
  }
}
