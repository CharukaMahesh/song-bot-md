const { cmd } = require('../command');

cmd({
    pattern: "grade6",
    desc: "Displays bot menu",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from , pushname }) => {
    const caption = `*ʜᴇʟʟᴏ ${pushname}.. ʜᴏᴡ ᴀʀᴇ ʏᴏᴜ..*❤️‍🩹

*ʏᴏᴜ ᴀʀᴇ ꜱᴇʟᴇᴄᴛᴇᴅ ɢʀᴀᴅᴇ* 0⃣6⃣

⭐ ʏᴏᴜʀ - ᴍᴇɴᴜ ⭐

╭─────────────✑

*ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ ᴏɴᴇ*

⭐│ *1*    *ᴘᴜᴘɪʟꜱ ʙᴏᴏᴋꜱ📚*
⭐│ *2*    *ꜰɪʀꜱᴛ ᴛᴇʀᴍ ᴛᴇꜱᴛ ᴘᴀᴘᴇʀ 📋*
⭐│ *3*    *ꜱᴇᴄᴏɴᴅ ᴛᴇʀᴍ ᴛᴇꜱᴛ ᴘᴀᴘᴇʀ 📋*
⭐│ *4*    *ᴛʜɪʀᴅ ᴛᴇʀᴍ ᴛᴇꜱᴛ ᴘᴀᴘᴇʀ 📋*
⭐│ *5*    *ᴍᴏᴅʟᴇ  ᴘᴀᴘᴇʀ📋*

╰─────────────✑
*𝚙𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚌𝚑𝚊𝚛𝚞𝚔𝚊*`;

    const image = 'https://raw.githubusercontent.com/CharukaMahesh/song-bot-md/refs/heads/main/IMGES/20241210_214616.jpg';

    await conn.sendMessage(from, { image: { url: image }, caption: caption });
});
