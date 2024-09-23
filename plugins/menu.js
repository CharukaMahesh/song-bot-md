const { cmd } = require('../command');
const moment = require('moment');

cmd({
    pattern: 'menu',
    desc: 'Display categorized bot commands',
    category: 'system',
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, pushname, reply }) => {
    
    const currentTime = moment().format('HH:mm:ss');
    const currentDate = moment().format('YYYY-MM-DD');
    const speedResponse = 'Fast'; // Customize this based on your bot's actual response time logic

    const menuMessage = `
❄️━━━ 𝚀𝚄𝙴𝙴𝙽 𝙲𝙷𝙴𝚃𝙷𝙸 𝙼𝙳 ━━━❄️

ᴛɪᴍᴇ    ⏰ : ${currentTime}
ᴅᴀᴛᴇ    📅 : ${currentDate}
ꜱᴘᴇᴇᴅ  🧭 : ${speedResponse}
ᴜꜱᴇʀ    😼 : Hi, ${pushname}👋

|• ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 📥
━━━━━━━━━━━━━━━━
.ʏᴛ - ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ

.ᴠɪᴅᴇᴏ - ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ

.ʏᴛᴍᴘ4 - ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ

.ꜱᴏɴɢ - ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜᴛᴜʙᴇ ᴍᴜꜱɪᴄ

.ʏᴛᴍᴘ3 - ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜᴛᴜʙᴇ ᴍᴜꜱɪᴄ

.ᴘʟᴀʏ - ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜᴛᴜʙᴇ ᴍᴜꜱɪᴄ

.ᴍᴇᴅɪᴀꜰɪʀᴇ - ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇᴅɪᴀꜰɪʀᴇ ꜰɪʟᴇꜱ

|• ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ 🔍
━━━━━━━━━━━━━━━
.ᴡɪᴋɪ - ꜱᴇᴀʀᴄʜ ᴀᴄʀᴏꜱꜜ ᴡɪᴋɪᴘᴇᴅɪᴀ

.ᴡᴇᴀᴛʜᴇʀ - ɢᴇᴛ ᴡᴇᴀᴛʜᴇʀ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ɢɪᴠᴇɴ ᴄɪᴛʏ ᴏʀ ᴄᴏᴜɴᴛʀʏ

.ʏᴛꜱᴇᴀʀᴄʜ - ꜱᴇᴀʀᴄʜ ᴀᴄʀᴏꜱꜜ ʏᴏᴜᴛᴜʙᴇ

.ɴᴘᴍ - ꜱᴇᴀʀᴄʜ ᴏɴ ɴᴘᴍ

|• ᴀɪ ᴍᴇɴᴜ 📡
━━━━━━━━━━━━━━━
.ᴀɪ - ɢᴇᴛ ʀᴇꜱᴘᴏɴꜘᴇ ꜰʀᴏᴍ ᴄʜᴀᴛ ɢᴘᴛ

|• ᴏᴛʜᴇʀ ᴍᴇɴᴜ 💕
━━━━━━━━━━━━━━━
.ʀᴇꜱᴛᴀʀᴛ - ʀᴇꜱᴛᴀʀᴛ ᴛʜᴇ ʙᴏᴛ

.ᴘɪɴɢ - ᴄʜᴇᴄᴋ ʙᴏᴛ ʀᴇꜱᴘᴏɴꜘᴇ ꜱᴘᴇᴇᴅ

.ꜱʏꜱᴛᴇᴍ - ᴄʜᴇᴄᴋ ʙᴏᴛ ꜱᴇʀᴠᴇʀ ɪɴꜰᴏ

.ᴀʙᴏᴜᴛ - ɢᴇᴛ ᴅᴇᴀᴛɪʟꜙ ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ

©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝙷𝙰𝚁𝚄𝙺𝙰 𝙼𝙰𝙷𝙴𝚂𝙷
`;

    // Image URL from your previous message
    const imageUrl = 'https://raw.githubusercontent.com/CharukaMahesh/Queen-Chethi-V1/refs/heads/main/Img/20240921_160218.jpg';

    await conn.sendMessage(from, { image: { url: imageUrl }, caption: menuMessage }, { quoted: mek });
});
