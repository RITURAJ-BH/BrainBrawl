const express = require("express");
const cors = require("cors");
const quizRoute = require("./routes/quiz");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/generate-quiz", quizRoute);

const PORT = 5000;
app.listen(PORT, () => console.log("Server started on port", PORT));
