const { cmd } = require('../command');

cmd({
    pattern: 'menu',
    desc: 'Display categorized bot commands',
    category: 'system',
    filename: __filename
}, async (conn, mek, m, { from }) => {

    const menuMessage = `
❄️━━━ 𝚀𝚄𝙴𝙴𝙽 𝙲𝙷𝙴𝚃𝙷𝙸 𝙼𝙳 ━━━❄️

ᴛɪᴍᴇ    ⏰ :
ᴅᴀᴛᴇ    📅 :
ꜱᴘᴇᴇᴅ  🧭 :
ᴜꜱᴇʀ    😼 :

|• ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 📥
━━━━━━━━━━━━━━━━
.ʏᴛ = ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ

.ᴠɪᴅᴇᴏ - ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ

.ʏᴛᴍᴘ4 - ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ

.ꜱᴏɴɢ - ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜᴛᴜʙᴇ ᴍᴜꜱɪᴄ

.ʏᴛᴍᴘ3 -ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜᴛᴜʙᴇ ᴍᴜꜱɪᴄ

.ᴘʟᴀʏ - ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜᴛᴜʙᴇ ᴍᴜꜱɪᴄ

.ᴍᴇᴅɪᴀꜰɪʀᴇ - ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇᴅɪᴀꜰɪʀᴇ ꜰɪʟᴇꜱ

|• ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ 🔍
━━━━━━━━━━━━━━━
.ᴡɪᴋɪ - ꜱᴇᴀʀᴄʜ ᴀᴄʀᴏꜱꜱ ᴡɪᴋɪᴘᴇᴅɪᴀ

.ᴡᴇᴀᴛʜᴇʀ - ɢᴇᴛ ᴡᴇᴀᴛʜᴇʀ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ɢɪᴠᴇɴ ᴄɪᴛʏ ᴏʀ ᴄᴏᴜɴᴛʀʏ

.ʏᴛꜱᴇᴀʀᴄʜ - ꜱᴇᴀʀᴄʜ ᴀᴄʀᴏꜱꜱ ʏᴏᴜᴛᴜʙᴇ

|• ᴀɪ ᴍᴇɴᴜ 📡
━━━━━━━━━━━━━━━
.ᴀɪ - ɢᴇᴛ ʀᴇꜱᴘᴏɴꜱᴇ ꜰʀᴏᴍ ᴄʜᴀᴛ ɢᴘᴛ

|• ᴏᴛʜᴇʀ ᴍᴇɴᴜ 💕
━━━━━━━━━━━━━━━
.ʀᴇꜱᴛᴀʀᴛ - ʀᴇꜱᴛᴀʀᴛ ᴛʜᴇ ʙᴏᴛ

.ᴘɪɴɢ - ᴄʜᴇᴄᴋ ʙᴏᴛ ʀᴇꜱᴘᴏɴꜱᴇ ꜱᴘᴇᴇᴅ

.ꜱʏꜱᴛᴇᴍ - ᴄʜᴇᴄᴋ ʙᴏᴛ ꜱᴇʀᴠᴇʀ ɪɴꜰᴏ

.ᴀʙᴏᴜᴛ - ɢᴇᴛ ᴅᴇᴀᴛɪʟꜱ ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ

©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝙷𝙰𝚁𝚄𝙺𝙰 𝙼𝙰𝙷𝙴𝚂𝙷
`;

    // Image URL from your previous message
    const imageUrl = 'https://raw.githubusercontent.com/CharukaMahesh/Queen-Chethi-V1/refs/heads/main/Img/20240921_160218.jpg';

    await conn.sendMessage(from, { image: { url: imageUrl }, caption: menuMessage }, { quoted: mek });
});
