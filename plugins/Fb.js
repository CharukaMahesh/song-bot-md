const axios = require('axios');
const fbDownloader = require('fb-downloader-scrapper');
const { cmd } = require('../command');

cmd({
    pattern: "fb",
    desc: "Download a Facebook post",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from, reply, q }) => {
    try {
        if (!q) return reply('Please provide a Facebook post URL.');

        // React with 🔽 when the command is triggered
        await conn.sendMessage(from, {
            react: { text: "🔽", key: mek.key }
        });

        // Download the post using the URL provided
        const post = await fbDownloader(q);
        const result = `
            **Post Downloaded:**
            Title: ${post.title || 'N/A'}
            Description: ${post.description || 'N/A'}
            Link: ${post.link || 'N/A'}
        `;

        // Send the download result
        reply(result || 'No content found for the provided URL.');
        
    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while downloading the Facebook post. Please check the URL and try again.");
    }
});
