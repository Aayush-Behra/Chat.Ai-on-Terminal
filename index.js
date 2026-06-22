import readlineSync from "readline-sync";
import chalk from "chalk";
import { desci, stream_groq } from "./services/groq.js";

import {
  generateResponse
} from "./utils/fallback.js";

let currentModel = "groq";
let stream = false;

while (true) {

  const input =readlineSync.question(chalk.yellow("\nYou: "));

  if (!input.trim()) {

    console.log(
      chalk.red(
        "Input cannot be empty."
      )
    );

    continue;
  }

  if (input === "/exit") {
    break;
  }

  if (input === "/persona") {
    const descc = readlineSync.question("describe: ")
    desci(descc);

    continue;
  }

  if (input === "/switch") {
    if (currentModel == "groq"){
      currentModel = "gemini";
      console.log(chalk.blue("Using Gemini"));
    }
    else{
      currentModel = "groq";
      console.log(chalk.blue("Using Groq"));
    }
    continue;
  }

  if (input === "/help") {
    console.log(`/switch - To Switch AI Models \n/clear - Clear Console \n/help \n/exit \n/persona - To describe Persona of ChatBot \n/stream - to toggle stream on or off`);
    continue;
  }

  if (input === "/stream") {
    stream = true;
    console.log(chalk.magenta("stream is turned on"));
    continue;
  }

  if (input === "/clear") {
    console.clear();
    continue;
  }

  if(stream == false){
  try {

    const response = await generateResponse(input,currentModel);
    console.log(chalk.green("\nAI:"),chalk.whiteBright(response));

  } 
  catch (error) {console.log(chalk.red(error.message));}
}
  else{
  try{
    process.stdout.write(chalk.cyan('Groq :'))
    await stream_groq(input);
  }
  catch(error){
    console.log(chalk.red(error.message))
  }
  }
}