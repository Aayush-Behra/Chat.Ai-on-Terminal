# Terminal-Based AI Chat System using Groq & Gemini

## Overview

This project is a terminal-based AI chatbot built using Node.js. It integrates both Groq and Gemini APIs, allowing users to switch between models during runtime. The application also includes an automatic fallback mechanism that switches to the alternate model if the selected model fails.

## Features

* Terminal-based chat interface
* Groq API integration
* Gemini API integration
* Runtime model switching
* Automatic fallback system
* Error handling
* Environment variable support
* Colored terminal output
* Commands for help, clear screen, and exit

## Project Structure

```text
project/

├── services/
│   ├── groq.js
│   └── gemini.js
│
├── utils/
│   └── fallback.js
│
├── index.js
├── .env
├── package.json
└── README.md
```

## Technologies Used

* Node.js
* Groq SDK
* Google Gemini API
* dotenv
* chalk
* readline-sync

## Installation

1. Clone the repository

```bash
git clone <repository-url>
cd project
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
GROQ_API_KEY=your_groq_api_key
GEMINI_API_KEY=your_gemini_api_key
```

## Running the Project

Start the chatbot:

```bash
node index.js
```

## Available Commands

| Command | Description             |
| ------- | ----------------------- |
| /groq   | Switch to Groq model    |
| /gemini | Switch to Gemini model  |
| /help   | Show available commands |
| /clear  | Clear terminal screen   |
| /exit   | Exit chatbot            |

## Example Usage

```text
You: /groq
Using Groq

You: What is AI?

AI: Artificial Intelligence is the simulation of human intelligence by machines.
```

## Fallback Mechanism

If the selected model fails due to API errors, network issues, or downtime:

1. The error is detected.
2. The system automatically switches to the alternate model.
3. The response is generated without interrupting the user experience.

Example:

```text
Primary Model Failed.
Switching to Gemini...
Response Generated Successfully.
```

## Error Handling

The project handles:

* Invalid API Keys
* Network Errors
* Empty Inputs
* API Downtime
* Unexpected Exceptions

## Learning Outcomes

Through this project, I learned:

* LLM API Integration
* Async/Await in JavaScript
* Environment Variables
* Model Switching Logic
* Fallback Architecture
* Error Handling
* Git and GitHub Workflow

## Author
Shweta Sinha
