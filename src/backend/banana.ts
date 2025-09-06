// import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

export async function generate(imageBase64: string, prompt: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: 'AIzaSyC6COwpP-KXMpV3gni3gtAs2JNrZM4RjOg' });

  const promptData = [
    { text: prompt },
    {
      inlineData: {
        mimeType: "image/png",
        data: imageBase64.replace(/^data:image\/\w+;base64,/, ""),
      },
    },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image-preview",
    contents: promptData,
  });

  let outputBase64 = "";

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      outputBase64 = part.inlineData.data;
    }
  }

  return "data:image/png;base64," + outputBase64;
}

