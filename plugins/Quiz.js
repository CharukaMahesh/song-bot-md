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

      // Send the question to the user
      await conn.sendMessage(from, {
        text: `🧠 *Question ${i + 1}*\n${question.question}\n\n${question.options.join(
          "\n"
        )}\n\n*Reply with the number of your answer (e.g., 1, 2)*`,
      });

      // Wait for user response
      const userAnswer = await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          resolve(null); // Resolve with null if time is up
        }, 20000); // Timeout after 20 seconds

        // Event listener for the user's reply
        conn.ev.on("messages.upsert", (messageEvent) => {
          const msg = messageEvent.messages[0];
          if (
            msg.key.remoteJid === from && // Ensure it's from the same chat
            !msg.key.fromMe && // Exclude bot's own messages
            msg.message?.conversation // Check if it's a text message
          ) {
            const response = msg.message.conversation.trim();
            if (response) {
              clearTimeout(timeout);
              resolve(response); // Resolve with the user's answer
            }
          }
        });
      });

      // Check the answer
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

    // Send final score
    await conn.sendMessage(from, {
      text: `🎉 *Quiz Over!*\nYour score: *${score}/${quiz.length}*\nThanks for playing!`,
    });
  }
);
