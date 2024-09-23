const cron = require('node-cron');
const { conn } = require('../index.js'); // Adjust the path as needed

// Scheduled Good Night Message
cron.schedule('35 21 * * *', async () => {
    const groupId = '120363336309769664@g.us'; // Replace with your WhatsApp group ID
    const goodNightMessage = "*Good Night, everyone! 🌙✨ Sleep well and dream big!*";
    const imageUrl = 'https://raw.githubusercontent.com/CharukaMahesh/song-bot-md/refs/heads/main/IMGES/20240923_144904.jpg'; // Replace with your image URL

    try {
        // Autoreact with a good night emoji
        await conn.sendMessage(groupId, { react: { text: "🌙", key: { remoteJid: groupId, id: '0@s.whatsapp.net', participant: '0@s.whatsapp.net' } } });

        // Send the good night message with the image
        await conn.sendMessage(groupId, { image: { url: imageUrl }, caption: goodNightMessage });
        console.log("Good Night message sent successfully!");
    } catch (error) {
        console.error("Error sending Good Night message:", error);
    }
});
