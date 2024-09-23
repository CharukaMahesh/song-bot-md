const yts = require('yt-search');
const { cmd } = require('../command');

// 🔍--------YOUTUBE-SEARCH--------//

cmd({
    pattern: "ytsearch",
    alias: ["yts", "ytquery"],
    desc: "Search YouTube videos",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
        if (!q) return reply("*`Please provide a search term...❄️`*");

        // React with 🔍 and show searching text
        await conn.sendMessage(from, { react: { text: "🔍", key: mek.key } });
        reply("*`I AM SEARCHING ON YOUTUBE...🔍`*");

        // Perform YouTube search
        const searchResults = await yts(q);
        if (!searchResults || !searchResults.videos || !searchResults.videos.length) {
            return reply("No results found for the given query.");
        }

        let searchMessage = `🔍 *YOUTUBE SEARCH RESULTS* 🔍\n\n`;
        const results = searchResults.videos.slice(0, 5); // Display top 5 results

        results.forEach((video, index) => {
            searchMessage += `📹 *${index + 1}.* [${video.title}](${video.url})\n`;
            searchMessage += `⏰ *Duration*: ${video.timestamp}\n`;
            searchMessage += `👁 *Views*: ${video.views}\n`;
            searchMessage += `🚀 *Uploaded*: ${video.ago}\n\n`;
        });

        searchMessage += "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ ᴍᴀʜᴇꜱʜ*";

        // Send the message with the image
        await conn.sendMessage(from, { 
            image: { url: "https://raw.githubusercontent.com/CharukaMahesh/song-bot-md/refs/heads/main/IMGES/20240923_205938.jpg" },
            caption: searchMessage
        }, { quoted: mek });

    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
