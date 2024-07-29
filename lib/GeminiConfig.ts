import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const key=`${process.env.GEMINI_API_KEY}`
const genAI = new GoogleGenerativeAI("AIzaSyBy3geh2wEeAy8IoTWVLULcC-CrShgTA9Q");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

console.log(key)

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig: generationConfig,
  history: [],
});
