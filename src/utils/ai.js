import Groq from "groq-sdk";
import { GPT_API_KEY } from "./constants"; // Keeping your existing constant name

const groq = new Groq({
  apiKey: GPT_API_KEY,
  dangerouslyAllowBrowser: true, // Allows running directly in your React frontend
});

export default groq;
