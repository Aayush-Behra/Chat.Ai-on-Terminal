import { groqq } from "../services/groq.js";
import { gemini } from "../services/gemini.js";


export async function generateResponse(
  prompt,
  currentModel
) {

  try {

    if (currentModel === "groq") {
      return await groqq(prompt);
    }

    return await gemini(prompt);

  } catch (error) {

    console.log(
      "Primary Model Failed."
    );

    if (currentModel === "groq") {

      console.log(
        "Switching to Gemini..."
      );

      return await gemini(prompt);
    }

    console.log(
      "Switching to Groq..."
    );

    return await groqq(prompt);
  }
}