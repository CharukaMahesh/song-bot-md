const { cmd } = require('../command')

cmd({
  pattern: "grade8",
  alias: [ "8", "g8" ],
  desc: "grade8",
  category: "grade8",
  filename: _filename
},
 
  async(conn,mek,m,{from,pushname}) => {
    const caption =`*ʜᴇʟʟᴏ $ { pushname }..ʜᴏᴡ ᴀʀᴇ ʏᴏᴜ..*❤️‍🩹

  *ʏᴏᴜ ᴀʀᴇ ꜱᴇʟᴇᴄᴛᴇᴅ ɢʀᴀᴅᴇ* 0️⃣8️⃣

⭐ ʏᴏᴜʀ - ᴍᴇɴᴜ⭐

  ╭─────────────✑

  *ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ ᴏɴᴇ*

  ⭐│ *8.1* *ᴘᴜᴘɪʟꜱ ʙᴏᴏᴋꜱ* 
  ⭐│ *8.2* *1 ꜱᴛ ᴛᴇʀᴍ ᴛᴇꜱᴛ ᴘᴀᴘᴇʀ* 
  ⭐│ *8.3* *2 ɴᴅ ᴛᴇʀᴍ ᴛᴇꜱᴛ ᴘᴀᴘᴇʀ* 
  ⭐│ *8.4* *3 ʀᴅ ᴛᴇʀᴍ ᴛᴇꜱᴛ ᴘᴀᴘᴇʀ* 
  ⭐│ *8.5* *ᴍᴏᴅᴇʟ ᴘᴀᴘᴇʀ*

  ╰─────────────✑

  *ඔබට අවශ්‍ය දේ එයට අදාල අංකය සමග පණිවිඩයක් එවන්න උදාහරණයක් ලෙස ᴘᴜᴘɪʟꜱ ʙᴏᴏᴋꜱ අවශ්‍යනම් .8 .1 ලෙස එවන්න*

  *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ*`;
  
  await conn.sendMessage(from,{react:{text: '8️⃣',key:mek.key}});
  
  const image = 'https://raw.githubusercontent.com/CharukaMahesh/song-bot-md/refs/heads/main/IMGES/20241210_214616.jpg';

await conn.sendMessage(from,{image:{url:image},caption:caption});
    
  });
