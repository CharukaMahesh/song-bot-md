const { cmd } = require('../command');

cmd({
    pattern: "ping",
    desc: "Check bot response speed",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, {
    from, reply, pushname = "User" // Default name if pushname is not available
}) => {
    try {
        // React to the command
        await conn.sendMessage(from, {
            react: { text: "🌐", key: mek.key }
        });

        // Record the start time
        const startTime = Date.now();

        // Send the initial ping message
        await conn.sendMessage(from, { text: "> ᴘɪɴɢɪɴɢ..⭐" });

        // Calculate response time
        const responseTime = Date.now() - startTime;

        // Send the final ping result
        await conn.sendMessage(from, { 
            text: `*ʜᴇʟʟᴏ ${pushname}*

*ʀᴇꜱᴘᴏɴꜱᴇ ᴛɪᴍᴇ ɪꜱ* ⏰ *:* *${responseTime} ᴍꜱ* 📡

> ᴍᴀᴅᴇ ʙʏ ᴄʜᴀʀᴜᴋᴀ` 
        }, { quoted: mek });

        // Optional: Log the response time for debugging
        console.log(`Ping response time: ${responseTime} ms`);
    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
