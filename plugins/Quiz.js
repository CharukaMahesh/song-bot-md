const { cmd } = require('../command');

cmd({
  pattern: "quiz",
  desc: "Start a quiz game with a timer",
  category: "fun",
  filename: __filename
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

  let score = 0; // Track the score

  // Loop through each question
  for (let i = 0; i < quiz.length; i++) {
    const question = quiz[i];
    let timeLeft = 20; // 20 seconds timer

    // Send the question with a countdown
    const questionMessage = await conn.sendMessage(
      from, 
      { 
        text: `*Question ${i + 1}*\n${question.question}\n\n${question.options.join("\n")}\n\n*Reply with the number of your answer (e.g., 1, 2, etc.)*\n\nYou have *${timeLeft}s* to answer!` 
      }
    );

    // Countdown logic
    const countdown = setInterval(async () => {
      timeLeft--;
      if (timeLeft > 0) {
        await conn.updateMessage(from, 
          { 
            text: `*Question ${i + 1}*\n${question.question}\n\n${question.options.join("\n")}\n\n*Reply with the number of your answer (e.g., 1, 2, etc.)*\n\nYou have *${timeLeft}s* to answer!` 
          }, 
          questionMessage.key
        );
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    // Wait for the user's response or timeout
    let response;
    try {
      response = await conn.waitForMessage(from, 20000); // 20 seconds to respond
      clearInterval(countdown);
    } catch (err) {
      response = { text: "" }; // No response, move to the next question
      clearInterval(countdown);
    }

    // Validate the answer
    if (response.text.trim() === question.answer) {
      score++;
      await conn.sendMessage(from, { text: "✅ Correct!" });
    } else if (response.text.trim() === "") {
      await conn.sendMessage(from, { text: "⏳ Time's up! Moving to the next question." });
    } else {
      await conn.sendMessage(from, { text: `❌ Wrong! The correct answer was *${question.answer}*.` });
    }
  }

  // Send final score
  const finalMessage = `*Quiz Over!*\n\nYour score: ${score}/${quiz.length}`;
  await conn.sendMessage(from, { text: finalMessage });
});
