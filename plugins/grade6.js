const { cmd } = require('../command');
const _filename = __filename;

cmd({
  pattern: "grade6",
  description: "Display Grade 6",
  filename: _filename,
  category: "inform"
}, 
async (conn, mek, m) => {
  const { from } = m;

  const caption = `*ʜᴇʟʟᴏ* ʜᴏᴡ ᴀʀᴇ ʏᴏᴜ..*❤️‍🩹*

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
*𝚙𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚌𝚑𝚊𝚛𝚞𝚔𝚊*`;

  // Send the message to the "from" chat
  await conn.sendMessage(from, { text: caption });
});
