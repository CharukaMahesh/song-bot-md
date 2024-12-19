const quizzes = [
    {
        question: "What is the capital of Sri Lanka?",
        options: ["Kandy", "Galle", "Colombo", "Jaffna"],
        answer: 3 // Correct option number
    },
    {
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        answer: 3
    },
    {
        question: "Who wrote the national anthem of Sri Lanka?",
        options: ["Rabindranath Tagore", "Ananda Samarakoon", "Sarojini Naidu", "C. Suntharalingam"],
        answer: 2
    },
];

const activeQuizzes = {};

module.exports = {
    name: 'quiz',
    description: 'Start a quiz game',
    command: '.quiz',
    handler: async (conn, m, { command, args }) => {
        const from = m.key.remoteJid;

        if (command === '.quiz') {
            startQuiz(conn, from);
        } else if (command === '.over') {
            if (activeQuizzes[from]) {
                conn.sendMessage(from, { text: `❌ Quiz Over!\nFinal Score: ${activeQuizzes[from].score}\nWrong Answers: ${activeQuizzes[from].wrong}` });
                delete activeQuizzes[from];
            } else {
                conn.sendMessage(from, { text: `⚠️ No quiz is currently active!` });
            }
        } else if (activeQuizzes[from]) {
            validateAnswer(conn, from, command);
        }
    }
};

function startQuiz(conn, from) {
    const quiz = {
        index: 0,
        score: 0,
        wrong: 0,
    };
    activeQuizzes[from] = quiz;
    sendQuiz(conn, from, quiz);
}

function sendQuiz(conn, from, quiz) {
    if (quiz.index >= quizzes.length) {
        conn.sendMessage(from, { text: `🎉 Quiz Over!\nScore: ${quiz.score}\nWrong Answers: ${quiz.wrong}` });
        delete activeQuizzes[from];
        return;
    }

    const currentQuiz = quizzes[quiz.index];
    const message = `🤔 *Question ${quiz.index + 1}*\n\n${currentQuiz.question}\n\n` +
        currentQuiz.options.map((opt, idx) => `${idx + 1}. ${opt}`).join('\n') +
        `\n\n💡 Reply with the option number (e.g., 1, 2, 3, or 4)`;

    conn.sendMessage(from, { text: message });
}

function validateAnswer(conn, from, userAnswer) {
    const quiz = activeQuizzes[from];
    if (!quiz) return;

    const currentQuiz = quizzes[quiz.index];

    if (parseInt(userAnswer) === currentQuiz.answer) {
        quiz.score += 1;
        conn.sendMessage(from, { text: `✅ Correct!`, react: { text: "✅", key: { remoteJid: from } } });
    } else {
        quiz.wrong += 1;
        const correctAnswerText = currentQuiz.options[currentQuiz.answer - 1];
        conn.sendMessage(from, { text: `❌ Wrong! The correct answer was: ${currentQuiz.answer}. ${correctAnswerText}`, react: { text: "❌", key: { remoteJid: from } } });
    }

    quiz.index += 1;
    setTimeout(() => sendQuiz(conn, from, quiz), 3000);
          }
