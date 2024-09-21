const { cmd } = require('../command');

cmd({
    pattern: 'menu',
    desc: 'Display categorized bot commands',
    category: 'system',
    filename: __filename
}, async (conn, mek, m, { from }) => {

    const menuMessage = `
🌟 *Queen Chethi Bot Menu* 🌟

📂 *AI Commands*:
🤖 *AI*: Interact with AI using the command 'ai'.

📂 *Download Commands*:
🎶 *Song Download*: Use 'song' to download music.
📁 *Mediafire Download*: Download files with 'mediafire'.
📥 *YouTube Video*: Use 'ytmp4' to download videos.

📂 *Search Commands*:
🌤️ *Weather*: Use 'weather' to get updates.
📚 *Wiki Search*: Use 'wiki' for information.
🔍 *YouTube Search*: Search for videos with 'ytsearch'.

*Powered by Charuka Mahesh*
`;

    // Image URL from your previous message
    const imageUrl = 'https://raw.githubusercontent.com/CharukaMahesh/Queen-Chethi-V1/refs/heads/main/Img/20240921_160218.jpg';

    await conn.sendMessage(from, { image: { url: imageUrl }, caption: menuMessage }, { quoted: mek });
});
