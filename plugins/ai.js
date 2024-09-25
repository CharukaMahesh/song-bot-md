const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

// Function to send a reaction
const sendReaction = async (conn, chatId, emoji) => {
    try {
        await conn.sendMessage(chatId, { react: { text: emoji, key: chatId } });
    } catch (e) {
        console.log('Error sending reaction:', e);
    }
};

// URLs for the images
const thinkingImageUrl = "https://raw.githubusercontent.com/CharukaMahesh/Ai-Bot-Md/refs/heads/main/IMGES/20240925_202737.jpg";  // Image when AI is thinking
const resultImageUrl = "https://raw.githubusercontent.com/CharukaMahesh/song-bot-md/refs/heads/main/IMGES/20240923_144904.jpg";   // Image for final AI result

cmd({
    pattern: "ai",
    desc: "AI chatbot",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
        // Send reaction
        await sendReaction(conn, from, '🧭');  // React with the 🧭 emoji

        // Send the "thinking" message with a different image
        await conn.sendMessage(from, {
            image: { url: thinkingImageUrl },  // Send the thinking image
            caption: 'AI IS THINKING...PLEASE WAIT....❄️'
        }, { quoted: mek });

        // Fetch the AI response
        let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`);

        // Send the final AI response with a different result image and caption
        await conn.sendMessage(from, {
            image: { url: resultImageUrl },  // Send the result image
            caption: `${data.data}\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ ᴍᴀʜᴇꜱʜ`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e}`);
    }
});
