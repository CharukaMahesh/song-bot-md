const { cmd } = require('../command');

cmd({
    pattern: "grade6",
    desc: "Displays bot menu",
    category: "tools",
    filename: __filename
},
async (conn, m, { from, pushName }) => {
    try {
        const caption = `*ʜᴇʟʟᴏ ${pushName || 'ᴜꜱᴇʀ'}.. ʜᴏᴡ ᴀʀᴇ ʏᴏᴜ..*❤️‍🩹

*ʏᴏᴜ ᴀʀᴇ ꜱᴇʟᴇᴄᴛᴇᴅ ɢʀᴀᴅᴇ* 0⃣6⃣

⭐ ʏᴏᴜʀ - ᴍᴇɴᴜ ⭐

╭─────────────✑

*ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ ᴏɴᴇ*

⭐│ *1*    *ᴘᴜᴘɪʟꜱ ʙᴏᴏᴋꜱ📚*
⭐│ *2*    *ꜰɪʀꜱᴛ ᴛᴇʀᴍ ᴛᴇꜱᴛ ᴘᴀᴘᴇʀ 📋*
⭐│ *3*    *ꜱᴇᴄᴏɴᴅ ᴛᴇʀᴍ ᴛᴇꜱᴛ ᴘᴀᴘᴇʀ 📋*
⭐│ *4*    *ᴛʜɪʀᴅ ᴛᴇʀᴍ ᴛᴇꜱᴛ ᴘᴀᴘᴇʀ 📋*
⭐│ *5*    *ᴍᴏᴅᴇʟ ᴘᴀᴘᴇʀ📋*

╰─────────────✑
*𝚙𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚌𝚑𝚊𝚛𝚞𝚔ᴀ*`;

        await conn.sendMessage(from, { text: caption });
    } catch (error) {
        console.error('Error sending grade6 menu:', error);
    }
});
