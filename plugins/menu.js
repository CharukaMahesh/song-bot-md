const { cmd } = require('../command');

cmd({
    pattern: "menu",
    desc: "Displays bot menu",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    const caption = `*◈╾───❄️ꜱᴏɴɢ ʙᴏᴛ❄️───╼◈*

• *\`ꜱᴏɴɢ\`* - ᴅᴏᴡɴʟᴏᴀᴅ ꜱᴏɴɢ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ..❄️

• *\`ᴠɪᴅᴇᴏ\`* - ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ..❄️

• *\`ʏᴛꜱᴇᴀʀᴄʜ\`* - ꜱᴇᴀʀᴄʜ ᴀᴄʀᴏꜱꜱ ʏᴏᴜᴛᴜʙᴇ..❄️

• *\`ᴀʟɪᴠᴇ\`* - ᴄʜᴇᴄᴋ ʙᴏᴛ ᴏɴʟɪɴᴇ ᴏʀ ɴᴏ..❄️

• *\`ᴘɪɴɢ\`* - ᴄʜᴇᴄᴋ ʙᴏᴛ ꜱᴘᴇᴇᴅ..❄️

• *\`ꜱᴄ\`* - ɢᴇᴛ ʙᴏᴛ ꜱᴄʀɪᴘᴛ..❄️

*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ ᴍᴀʜᴇꜱʜ*

*ᴛʜᴀɴᴋꜱ ꜰᴏʀ:*
❄️ ᴜᴍᴇꜱʜᴀ ꜱᴀᴛʜʏᴀɴᴊᴀʟɪ
❄️ ᴍɪᴛʜɪʟᴀ ꜱʜᴀʀᴀᴅʜᴀ
❄️ ɴᴀᴠᴇᴇɴ ᴘᴇᴛʜᴜᴍ
❄️ ᴠɪʜᴀɢᴀ ꜱᴜʟᴀᴋꜱʜᴀɴᴀ
❄️ ᴄʜᴇᴛʜᴀɴᴀ ʀᴀᴊᴀɢᴜʀᴜ`;

    const image = 'https://raw.githubusercontent.com/CharukaMahesh/song-bot-md/refs/heads/main/IMGES/20240923_144904.jpg';

    await conn.sendMessage(from, { image: { url: image }, caption: caption });
});
