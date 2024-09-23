const { cmd } = require('../command');

// 🏓--------PING COMMAND--------//

cmd({
    pattern: "ping",
    alias: ["pong"],
    desc: "Check bot's response time",
    category: "utility",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        // React with 🏓 to indicate pinging
        await conn.sendMessage(from, { react: { text: "🏓", key: mek.key } });

        const start = Date.now();
        await reply("🏓 *Pong!*");
        const end = Date.now();

        // Send response time
        const timeTaken = end - start;
        reply(`⚡ *Response Time:* ${timeTaken}ms`);
    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
