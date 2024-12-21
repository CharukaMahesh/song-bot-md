const { cmd } = require('../command');

cmd({
    pattern: "ping",
    desc: "Check bot response speed",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, {
    from, reply
}) => {
    try {
        // React with 🚀 when the command is triggered
        await conn.sendMessage(from, {
            react: { text: "🌐", key: mek.key }
        });

        // Record the time when the command is received
        const startTime = Date.now();
        
        // Send a message to check the response time
        await conn.sendMessage(from, { text: "> ᴘɪɴɢɪɴɢ..⭐" });

        // Calculate the time difference and send the ping result with a 📡 emoji
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        await conn.sendMessage(from, { text: `*ʜᴇʟʟᴏ ${pushname}*

*ʀᴇꜱᴘᴏɴꜱᴇ ᴛɪᴍᴇ ɪꜱ* ⏰ *:* *${responseTime} ᴍꜱ* 📡

> ᴍᴀᴅᴇ ʙʏ ᴄʜᴀʀᴜᴋᴀ` }, { quoted: mek });

    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
