const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log("gemini key",process.env.GEMINI_API_KEY)
async function getGeminiStream({ numQuestions, difficulty, description,type }) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  var prompt;
if(type==="boolean"){
   prompt = `Generate ${numQuestions} True False choice quiz questions on "${description}" with ${difficulty} difficulty , type ${type}.
Each question must be in NDJSON format, one per line like:
{"question": "...", "incorrect_answer": ["True"], "correct_answer": "False"}`;}
else{   prompt = `Generate ${numQuestions} multiple choice quiz questions on "${description}" with ${difficulty} difficulty , type ${type}.
Each question must be in NDJSON format, one per line like:
{"question": "...", "incorrect_answers": ["B", "C", "D"], "correct_answer": "A"}`;}

  const result = await model.generateContentStream({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  return result.stream;
}

module.exports = { getGeminiStream };
