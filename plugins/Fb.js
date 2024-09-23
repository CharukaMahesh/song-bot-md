const axios = require('axios');
const fbDownloader = require('fb-downloader-scrapper');
const he = require('he');
const { cmd } = require('../command');

cmd({
    pattern: "fb",
    desc: "Download a Facebook video",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from, reply, q }) => {
    try {
        if (!q) return reply('Please provide a Facebook video URL.');

        // React with 🎥 when the command is triggered
        await conn.sendMessage(from, {
            react: { text: "🎥", key: mek.key }
        });

        // Download the video using the URL provided
        const videoData = await fbDownloader(q);
        
        if (!videoData || !videoData.video_url) {
            return reply('No video found for the provided URL.');
        }

        const title = he.decode(videoData.title || 'N/A');
        const videoUrl = videoData.video_url;

        const result = `
            **Video Downloaded:**
            Title: ${title}
            Link: ${videoUrl}
        `;

        // Send the download result
        reply(result);
        
    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while downloading the Facebook video. Please check the URL and try again.");
    }
});
