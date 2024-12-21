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
        await conn.sendMessage(from, { react: { text: "⭐", key: mek.key } });

        const aliveMessage = `> ʜᴇʏ ${pushname} ❤️‍🩹..ɪ ᴀᴍ ᴀʟɪᴠᴇ ᴀɴᴅ ʀᴜɴɴɪɴɢ ꜱᴍᴏᴏᴛʜʟʏ..⭐

╭─────────────✑
     *ᴠᴇʀꜱɪᴏɴ⚙️* : *1.0.0*
     *ꜱᴛᴀᴛᴜꜱ♻️* : *ᴏɴʟɪɴᴇ*
     *ᴘʀᴇꜰɪx🛞* : *•*
     *ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇ📆* : *2024/12/21*
╰─────────────✑

*ᴛʜᴀɴᴋꜱ  ꜰᴏʀ ᴜꜱɪɴɢ❤️‍🩹*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ ᴍᴀʜᴇꜱʜ
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
