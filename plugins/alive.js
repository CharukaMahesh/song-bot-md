const { cmd } = require('../command');

// 💡--------ALIVE COMMAND--------//

cmd({
    pattern: "alive",
    alias: ["botstatus", "active"],
    desc: "Check if the bot is running",
    category: "utility",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        // React with 💡 to indicate the bot is alive
        await conn.sendMessage(from, { react: { text: "💡", key: mek.key } });

        const aliveMessage = `
❄️ *𝕊𝕆ℕ𝔾 𝕍1 𝔸𝕃𝕀𝕍𝔼* ❄️

*Hey, I am alive and running smoothly!*

💡 *Version*: 1.0.0
🛠️ *Status*: Online
⚡ *Prefix*: "."

*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕔𝕙𝕒𝕣𝕦𝕜𝕒 𝕞𝕒𝕙𝕖𝕤𝕙*

❄️ *Bot is ready to serve you!*
`;

        // Send alive message with the specified image
        await conn.sendMessage(from, {
            image: { url: 'https://raw.githubusercontent.com/CharukaMahesh/song-bot-md/refs/heads/main/IMGES/20240923_144904.jpg' },
            caption: aliveMessage
        }, { quoted: mek });
        
    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
