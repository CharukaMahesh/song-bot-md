const { cmd } = require('../command');

// 🪄--------MENU--------🪄//

cmd({
    pattern: "menu",
    desc: "Show the bot menu with buttons",
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

        // Define buttons
        const buttons = [
            { buttonId: 'yt_download', buttonText: { displayText: '📥 Download YouTube Video' }, type: 1 },
            { buttonId: 'news', buttonText: { displayText: '📰 Get Latest News' }, type: 1 },
            { buttonId: 'sticker', buttonText: { displayText: '🖼 Convert to Sticker' }, type: 1 }
        ];

        // Send image with buttons and menu text
        await conn.sendMessage(from, {
            image: { url: 'https://raw.githubusercontent.com/CharukaMahesh/QUEEN-CHETHI/refs/heads/main/IMGES/20240921_115553.png' },
            caption: menuText,
            buttons: buttons,
            headerType: 4  // Specifies image as the header
        }, { quoted: mek });

    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while displaying the menu with buttons. Please try again later.");
    }
});
