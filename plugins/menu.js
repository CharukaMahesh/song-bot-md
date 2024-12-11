const { cmd } = require('../command');

cmd({
    pattern: "menu",
    desc: "Displays bot menu",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    const caption = `*⭐ -ʙᴏᴛ ᴍᴇɴᴜ- ⭐*

*ʜᴇʟʟᴏ* ${pushname} *ᴇᴅᴜᴄᴀᴛɪᴏɴ ɪꜱ ᴍᴏꜱᴛ ᴘᴏᴡᴇʀꜰᴜʟʟ ᴡᴇᴀᴘᴏɴ ɪɴ  ᴛʜᴇ ᴡᴏʀʟᴅ*🌏

╭─────────────✑

*ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ ʏᴏᴜʀ ɢʀᴀᴅᴇ*⭐

🌻│ *1*    *.ɢʀᴀᴅᴇ 06🎒*
🌻│ *2*    *.ɢʀᴀᴅᴇ 07🎒*
🌻│ *3*    *.ɢʀᴀᴅᴇ 08🎒*
🌻│ *4*    *.ɢʀᴀᴅᴇ 09🎒*
🌻│ *5*    *.ɢʀᴀᴅᴇ 10🎒*
🌻│ *6*    *.ɢʀᴀᴅᴇ 11🎒*
🌻│ *7*    *.ɢʀᴀᴅᴇ 12🎒*
🌻│ *8*    *.ɢʀᴀᴅᴇ 13🎒*

╰─────────────✑

*ᴇxᴀᴍᴘʟᴇ⭐ :*

ඔයාට ඕනේ හය වසරට අදාල පේපර්ස් සහ අනෙකුත් දේවල්නම් මෙම ච්ට් එකට *.grade6*  ලෙස මැසේජ් එකක් එවන්න.ඒ ආකාරයට  ඔයාට උවමනා ශ්‍රේණිය එවන්න❤️‍🩹 

*𝚙𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚌𝚑𝚊𝚛𝚞𝚔𝚊*

> 𝙱𝙻𝙰𝙲𝙺 𝙰𝙻𝙿𝙷𝙰 𝚂𝙾𝙽𝙶 𝙱𝙾𝚃 ❤️‍🩹✻`;

    const image = 'https://raw.githubusercontent.com/CharukaMahesh/song-bot-md/refs/heads/main/IMGES/20241210_214616.jpg';

    await conn.sendMessage(from, { image: { url: image }, caption: caption });
});
