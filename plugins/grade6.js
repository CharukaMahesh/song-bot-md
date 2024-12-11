const { cmd } = require('../command');

cmd({
    pattern: "grade6",
    alias: ["6" , "g6"],
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

⭐│ *6.1*    *ᴘᴜᴘɪʟꜱ ʙᴏᴏᴋꜱ*
⭐│ *6.2*    *1ꜱᴛ ᴛᴇʀᴍ ᴛᴇꜱᴛ ᴘᴀᴘᴇʀ*
⭐│ *6.3*    *2ɴᴅ ᴛᴇʀᴍ ᴛᴇꜱᴛ ᴘᴀᴘᴇʀ*
⭐│ *6.4*    *3ʀᴅ ᴛᴇʀᴍ ᴛᴇꜱᴛ ᴘᴀᴘᴇʀ*
⭐│ *6.5*    *ᴍᴏᴅᴇʟ ᴘᴀᴘᴇʀ*

╰─────────────✑

*ඔබට අවශ්‍ය දේ එයට අදාල අංකය සමග පණිවිඩයක් එවන්න උදාහරණයක් ලෙස ᴘᴜᴘɪʟꜱ ʙᴏᴏᴋꜱ අවශ්‍යනම් .6.1 ලෙස එවන්න*

*𝚙𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚌𝚑𝚊𝚛𝚞𝚔𝚊*`;

    await conn.sendMessage(from, { react: { text: '6️⃣', key: mek.key } });

    const image = 'https://raw.githubusercontent.com/CharukaMahesh/song-bot-md/refs/heads/main/IMGES/20241210_214616.jpg';

    await conn.sendMessage(from, { image: { url: image }, caption: caption });
});
