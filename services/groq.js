import Groq from "groq-sdk";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();
const groq = new Groq({apiKey: process.env.GROQ_API_KEY});

let Persona = 'A Normal girl';
export function desci(desc){
    Persona = desc;
}
export async function groqq(prompt) {

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",

    messages: [
      {
        role: "user",
        content: prompt
      }
    ]
  });

  return response.choices[0].message.content;
}

export async function stream_groq(prompt) {
  const output = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    stream: true,
    messages: [
      {
        role: "user",
        content: prompt,
      },
      {
        role:"system",
        content:Persona
    }
    ],
  });

  for await (const chunk of output) {
    const delta = chunk.choices?.[0]?.delta;
    if (typeof delta?.content === "string") {
      process.stdout.write(chalk.italic(delta.content));   // print token immediately
    }
    
  }
  console.log(" ");
}