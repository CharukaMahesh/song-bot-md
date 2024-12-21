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

        // Link to download the bot's source code as a ZIP file from GitHub
        const zipFileUrl = 'https://github.com/CharukaMahesh/song-bot-md/archive/refs/heads/main.zip';

        // React with 📤 to indicate the ZIP file is being sent
        await conn.sendMessage(from, { react: { text: "📤", key: mek.key } });

        // Send the ZIP file (GitHub download link)
        await conn.sendMessage(from, {
            document: { url: zipFileUrl },
            mimetype: "application/zip",
            fileName: "Song_Bot.zip",
            caption: "Here is the ZIP file of the bot"
        }, { quoted: mek });

        // React with ✅ when the file is successfully uploaded
        await conn.sendMessage(from, { react: { text: "✅", key: mek.key } });
        reply("> ᴢɪᴘ ꜰɪʟᴇ ᴄᴏᴍᴘʟᴇᴛᴇᴅ ᴄᴏɴᴛᴀɪɴɪɴɢ ᴛʜᴇ ᴇɴᴛɪʀᴇ ʙᴏᴛ ᴄᴏᴅᴇ.✅");

    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
