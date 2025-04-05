const express = require("express");
const router = express.Router();
const { getGeminiStream } = require("../services/gemini");

router.post("/", async (req, res) => {
  console.log("BODY:", req.body);

  const { numQuestions, difficulty, description,type } = req.body;

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Transfer-Encoding", "chunked");

  try {
    const stream = await getGeminiStream({ numQuestions, difficulty, description ,type});

    let buffer = ""; 

    for await (const chunk of stream) {
      const text = chunk.text();
      buffer += text;

      const lines = buffer.split("\n");
      buffer = lines.pop();

      for (const line of lines) {
        try {
          const json = JSON.parse(line);
          res.write(JSON.stringify(json) + "\n"); 
        } catch (e) {
          buffer = line + "\n" + buffer;
        }
      }
    }
    res.end();

  } catch (err) {
    console.error("Gemini stream error:", err);
    res.status(500).send("Streaming failed.");
  }
});

module.exports = router;
