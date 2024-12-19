const { cmd } = require("../command");

cmd(
  {
    pattern: "quiz",
    desc: "Start a quiz game with a timer",
    category: "fun",
    filename: __filename,
  },
  async (conn, mek, m, { from }) => {
    const quiz = [
      {
        question: "What is the capital of Sri Lanka?",
        options: ["1. Colombo", "2. Kandy", "3. Galle", "4. Jaffna"],
        answer: "1",
      },
      {
        question: "What is 2 + 2?",
        options: ["1. 3", "2. 4", "3. 5", "4. 6"],
        answer: "2",
      },
      {
        question: "Who wrote the Harry Potter series?",
        options: [
          "1. J.K. Rowling",
          "2. J.R.R. Tolkien",
          "3. George R.R. Martin",
          "4. C.S. Lewis",
        ],
        answer: "1",
      },
    ];

    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
      const question = quiz[i];
      let timeLeft = 20; // Timer in seconds
      let isAnswered = false;

      // Send the question
      await conn.sendMessage(from, {
        text: `🧠 *Question ${i + 1}*\n${question.question}\n\n${question.options.join(
          "\n"
        )}\n\n*Reply with the number of your answer (e.g., 1, 2)*\nYou have *${timeLeft}s* to answer!`,
      });

      // Wait for the user's response
      const userAnswer = await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          if (!isAnswered) resolve(null); // Timeout if no answer
        }, timeLeft * 1000);

        conn.ev.on("messages.upsert", (messageEvent) => {
          const msg = messageEvent.messages[0];
          if (
            msg.key.remoteJid === from && // Ensure it's from the same chat
            !msg.key.fromMe && // Exclude bot messages
            msg.message?.conversation // Check if the message contains text
          ) {
            const answer = msg.message.conversation.trim();
            clearTimeout(timeout);
            isAnswered = true;
            resolve(answer); // Resolve with the user's answer
          }
        });
      });

      // Check the user's answer
      if (userAnswer === question.answer) {
        score++;
        await conn.sendMessage(from, { text: "✅ Correct!" });
      } else if (userAnswer === null) {
        await conn.sendMessage(from, {
          text: "⏳ Time's up! Moving to the next question.",
        });
      } else {
        await conn.sendMessage(from, {
          text: `❌ Wrong! The correct answer was *${question.answer}*.`,
        });
      }
    }

    // Display the final score
    await conn.sendMessage(from, {
      text: `🎉 *Quiz Over!*\nYour score: *${score}/${quiz.length}*\nThanks for playing!`,
    });
  }
);
