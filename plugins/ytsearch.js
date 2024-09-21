const { cmd } = require('../command');  // Adjust the path to your command handler
const yts = require('yt-search');

// 🎧--------YOUTUBE SEARCH-------//

cmd({
    pattern: "ytsearch",
    desc: "Search YouTube videos",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
        // Check if a search query is provided
        if (!q) return reply("Please provide a search query... 🔍");

        // React with 🔍 to indicate searching
        await conn.sendMessage(from, { react: { text: "🔍", key: mek.key } });
        reply("*`I AM SEARCHING FOR YOUR VIDEO...🎥`*");

        // Perform YouTube search
        const searchResult = await yts(q);

        if (!searchResult || !searchResult.videos || !searchResult.videos.length) {
            return reply("No results found for the given query.");
        }

        // Get the first result
        const video = searchResult.videos[0];

        // Create a response message with video details
        let desc = `
🎥 𝐐𝐔𝐄𝐄𝐍 𝐂𝐇𝐄𝐓𝐇𝐈 𝐘𝐓 𝐒𝐄𝐀𝐑𝐂𝐇 𝐑𝐄𝐒𝐔𝐋𝐓 🎥

*Title* 🔍: ${video.title}
*Description* 🗒️: ${video.description}
*Duration* ⏰: ${video.timestamp}
*Uploaded* 🚀: ${video.ago}
*Views* 📽️: ${video.views}
*URL* 🌐: ${video.url}

*Powered by Charuka Mahesh*
        `;

        // Send the video details as a reply with a thumbnail image
        await conn.sendMessage(from, { image: { url: video.thumbnail }, caption: desc }, { quoted: mek });

    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
