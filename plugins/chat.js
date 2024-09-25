const { Configuration, OpenAIApi } = require('openai');
const { cmd } = require('../command');

// Initialize OpenAI configuration
const configuration = new Configuration({
    apiKey: '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', // Replace with your actual API key
});
const openai = new OpenAIApi(configuration);

// 💬--------CHATGPT RESPONSE--------//

cmd({
    pattern: "chatgpt",
    alias: ["gpt", "ai"],
    desc: "Ask anything to ChatGPT",
    category: "chat",
    filename: __filename
},
async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
        if (!q) return reply("*`Please provide a question or prompt...❄️`*");

        // React with 🤖 and show thinking text
        await conn.sendMessage(from, { react: { text: "🤖", key: mek.key } });
        reply("*`Thinking...🧠`*");

        // Get the ChatGPT response
        const response = await openai.createCompletion({
            model: "gpt-4",
            prompt: q,
            max_tokens: 200, // Adjust tokens as necessary
            temperature: 0.7, // Adjust temperature for creativity
        });

        const chatGptResponse = response.data.choices[0].text.trim();

        let responseMessage = `🤖 *CHATGPT RESPONSE* 🤖\n\n`;
        responseMessage += `${chatGptResponse}\n\n`;

        responseMessage += "*Powered by R.A. Charuka Mahesh*";

        await conn.sendMessage(from, { text: responseMessage }, { quoted: mek });
    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
