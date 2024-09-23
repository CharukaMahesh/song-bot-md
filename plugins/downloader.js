const nayanMedia = require('nayan-media-downloader');
const { cmd } = require('../command');

cmd({
    pattern: "down",
    desc: "Download media from various social media platforms",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from, reply, q }) => {
    try {
        if (!q) return reply('Please provide a valid media URL.');

        // React with 📥 when the command is triggered
        await conn.sendMessage(from, {
            react: { text: "📥", key: mek.key }
        });

        // Fetch media using nayan-media
        const mediaData = await nayanMedia(q);
        
        if (!mediaData || !mediaData.media_url) {
            return reply('No media found for the provided URL. Check the URL and privacy settings.');
        }

        const result = `
            **Media Downloaded:**
            Title: ${mediaData.title || 'N/A'}
            Link: ${mediaData.media_url}
        `;

        // Send the download result
        reply(result);
        
    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while downloading the media. Please check the URL and try again.");
    }
});
