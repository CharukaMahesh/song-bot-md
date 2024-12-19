const { cmd } = require('../command');

cmd({
  pattern: "quiz",
  desc: "Start a quiz game",
  category: "fun",
  filename: _filename
}, 
async (conn, mek, m, { from, pushname }) => {
  // Define quiz questions
  const quiz = [
    {
      question: "What is the capital of Sri Lanka?",
      options: ["1. Colombo", "2. Kandy", "3. Galle", "4. Jaffna"],
      answer: "1"
    },
    {
      question: "What is 2 + 2?",
      options: ["1. 3", "2. 4", "3. 5", "4. 6"],
      answer: "2"
    },
    {
      question: "Who wrote the Harry Potter series?",
      options: ["1. J.K. Rowling", "2. J.R.R. Tolkien", "3. George R.R. Martin", "4. C.S. Lewis"],
      answer: "1"
    }
  ];

  // Start the quiz
  let score = 0;
  for (let i = 0; i < quiz.length; i++) {
    const question = quiz[i];
    const questionText = `*Question ${i + 1}*\n${question.question}\n\n${question.options.join("\n")}\n\n*Reply with the number of your answer (e.g., 1, 2, etc.)*`;

    // Send question
    await conn.sendMessage(from, { text: questionText });
    let response;
    try {
      // Wait for user's reply
      response = await conn.waitForMessage(from);
    } catch (err) {
      // Timeout if no reply
      response = { text: "" };
    }

    // Check the answer
    if (response.text.trim() === question.answer) {
      score++;
      await conn.sendMessage(from, { text: "✅ Correct!" });
    } else {
      await conn.sendMessage(from, { text: `❌ Wrong! The correct answer was *${question.answer}*.` });
    }
  }

  // Final score
  const finalMessage = `*Quiz Over!*\n\nYour score: ${score}/${quiz.length}`;
  await conn.sendMessage(from, { text: finalMessage });
});
