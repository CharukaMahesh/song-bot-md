const { cmd } = require('../command');

cmd({
    pattern: "menu",
    desc: "Displays bot menu",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    const caption = `*⭐ -ʙᴏᴛ ᴍᴇɴᴜ- ⭐*
╭─────────────✑
◉│ *1*    *.ᴠɪᴅᴇᴏ📽️*
◉│ *2*    *.ᴀᴜᴅɪᴏ🎶*
◉│ *3*    *.ʏᴛꜱᴇᴀʀᴄʜ🔍*
◉│ *4*    *.ᴘɪɴɢ📡*
◉│ *5*    *.ᴀʟɪᴠᴇ🛸*
◉│ *6*    *.ꜱᴄ📜*
◉│ *7*    *.ʜᴇʟᴘ🙆‍♂*
╰─────────────✑

*𝚙𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚌𝚑𝚊𝚛𝚞𝚔𝚊*

> 𝙱𝙻𝙰𝙲𝙺 𝙰𝙻𝙿𝙷𝙰 𝚂𝙾𝙽𝙶 𝙱𝙾𝚃 ✻`;

    const image = 'https://raw.githubusercontent.com/CharukaMahesh/song-bot-md/refs/heads/main/IMGES/20240923_144904.jpg';

    await conn.sendMessage(from, { image: { url: image }, caption: caption });
});
