const { cmd } = require('../command');

cmd({
    pattern: "menu",
    desc: "Displays bot menu",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from , pushname }) => {
    const caption = `*⭐ -ʙᴏᴛ ᴍᴇɴᴜ- ⭐*
╭─────────────✑
◉│ *1*    *.ᴠɪᴅᴇᴏ📽️*
◉│ *2*    *.ᴀᴜᴅɪᴏ🎶*
◉│ *3*    *.ʏᴛꜱᴇᴀʀᴄʜ🔍*
◉│ *4*    *.ᴘɪɴɢ📡*
◉│ *5*    *.ᴀʟɪᴠᴇ🛸*
◉│ *6*    *.ꜱᴄ📜*
◉│ *7*    *.ʜᴇʟᴘ⚙️*
╰─────────────✑

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ ᴍᴀʜᴇꜱʜ`;

    await conn.sendMessage(from,{react:{text: '📚',key:mek.key}});

    const image = 'https://raw.githubusercontent.com/CharukaMahesh/song-bot-md/refs/heads/main/IMGES/20241210_214616.jpg';

    await conn.sendMessage(from, { image: { url: image }, caption: caption });
});
