

import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);

export async function gemini(prompt) {
  const model = genAI.generateContent({
    model: "gemini-2.5-flash"
  });

  const result = await model.generateContent(prompt);

  return result.response.text();
}
