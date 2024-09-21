const { cmd } = require('../command');

// 🪄--------MENU--------🪄//

cmd({
    pattern: "menu",
    desc: "Show the bot menu",
    category: "menu",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const menuText = `
🪄---- 𝐐𝐔𝐄𝐄𝐍 𝐂𝐇𝐄𝐓𝐇𝐈 𝐌𝐄𝐍𝐔 ----🪄

👑 *Available Commands*:
1. Download YouTube Videos
2. Get Latest News
3. Convert Image to Sticker
4. Social Media Downloader
5. More...

*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ ᴍᴀʜᴇꜱʜ*
        `;

        // Sending image with menu text
        await conn.sendMessage(from, {
            image: { url: 'https://raw.githubusercontent.com/CharukaMahesh/QUEEN-CHETHI/refs/heads/main/IMGES/20240921_115553.png' },
            caption: menuText
        }, { quoted: mek });

    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while displaying the menu. Please try again later.");
    }
});
