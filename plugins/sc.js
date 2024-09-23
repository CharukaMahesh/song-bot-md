const { cmd } = require('../command');

// 📦--------SOURCE CODE COMMAND--------//

cmd({
    pattern: "sc",
    alias: ["source", "repo"],
    desc: "Get the source code of the bot",
    category: "utility",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        // React with 📦 to indicate sending the source code
        await conn.sendMessage(from, { react: { text: "📦", key: mek.key } });

        const scMessage = `
📦 *Here is the source code of the bot:*

🔗 [GitHub Repository - Song Bot](https://github.com/CharukaMahesh/song-bot-md)

*Feel free to explore and contribute!*
        `;

        // Send the source code message with link preview
        await conn.sendMessage(from, { text: scMessage }, { quoted: mek });
        
    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
