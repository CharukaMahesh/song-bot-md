const { cmd } = require('../command');

cmd({
  pattern: "quiz",
  desc: "Start a quiz game with a timer",
  category: "fun",
  filename: __filename
}, 
async (conn, mek, m, { from }) => {
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

  let score = 0; // Track score

  for (let i = 0; i < quiz.length; i++) {
    const question = quiz[i];
    let timeLeft = 20; // 20-second timer

    const questionMessage = await conn.sendMessage(
      from, 
      { 
        text: `🧠 *Question ${i + 1}*\n${question.question}\n\n${question.options.join("\n")}\n\n*Reply with the number of your answer (e.g., 1, 2)*\nYou have *${timeLeft}s* to answer!` 
      }
    );

    // Countdown Timer
    const countdown = setInterval(async () => {
      timeLeft--;
      if (timeLeft > 0) {
        await conn.updateMessage(
          from, 
          { text: `🧠 *Question ${i + 1}*\n${question.question}\n\n${question.options.join("\n")}\n\n*Reply with the number of your answer (e.g., 1, 2)*\nYou have *${timeLeft}s* left!` }, 
          questionMessage.key
        );
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    // Wait for response or timeout
    let userResponse;
    try {
      userResponse = await conn.waitForMessage(from, 20000); // 20 seconds
      clearInterval(countdown);
    } catch (err) {
      clearInterval(countdown);
      userResponse = { text: "" }; // No response
    }

    const userAnswer = userResponse.text.trim();
    if (userAnswer === question.answer) {
      score++;
      await conn.sendMessage(from, { text: "✅ Correct!" });
    } else if (!userAnswer) {
      await conn.sendMessage(from, { text: "⏳ Time's up! Moving to the next question." });
    } else {
      await conn.sendMessage(from, { text: `❌ Wrong! The correct answer was *${question.answer}*.` });
    }
  }

  // Final Score
  await conn.sendMessage(from, { text: `🎉 *Quiz Over!*\nYour score: *${score}/${quiz.length}*` });
});
