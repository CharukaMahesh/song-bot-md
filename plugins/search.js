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
        if (!q) return reply("> ᴘʟᴇᴀꜱᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ Qᴜᴇʀʏ...⭐");

        // React with 🔍 and show searching text
        await conn.sendMessage(from, { react: { text: "🔍", key: mek.key } });
        reply("> ꜱᴇᴀʀᴄʜɪɴɢ ꜰᴏʀ ʏᴏᴜʀ ʀᴇϙᴜᴇꜱᴛ... 🔎");

        // Perform YouTube search
        const searchResults = await yts(q);
        if (!searchResults || !searchResults.videos || !searchResults.videos.length) {
            return reply("> ɴᴏ ʀᴇꜱᴜʟᴛꜱ ꜰᴏᴜɴᴅ ᴏɴ ʏᴏᴜᴛᴜʙᴇ!❌");
        }

        const results = searchResults.videos.slice(0, 5); // Display top 5 results

        // Prepare the results message
        let searchMessage = `*⭐ -ᴛᴏᴘ 5 ʏᴏᴜᴛᴜʙᴇ ꜱᴇᴀʀᴄʜ ʀᴇꜱᴜʟᴛꜱ- ⭐*\n\n`;
        results.forEach((video, index) => {
            searchMessage += `╭─────────────✑\n`;
            searchMessage += `◉ *${index + 1}. ${video.title}*\n`;
            
            searchMessage +=   `01• *ᴅᴜʀᴀᴛɪᴏɴ⏰*: ${video.timestamp}\n`;
            searchMessage +=   `02• *ᴠɪᴇᴡꜱ⭐*: ${video.views}\n`;
            searchMessage +=   `03• *ᴀɢᴏ📆*: ${video.ago}\n`;
            searchMessage +=   `04• *ʟɪɴᴋ🔗*: (${video.url})\n\n`;
            searchMessage += `╰─────────────✑\n`;
        });

        searchMessage += "> ᴇɴᴊᴏʏ ʏᴏᴜʀ ʏᴏᴜᴛᴜʙᴇ ꜱᴇᴀʀᴄʜ\n";

        // Send the search results with an image thumbnail and video details
        await conn.sendMessage(from, {
            image: { url: results[0].thumbnail },  // Using the thumbnail of the first search result
            caption: searchMessage
        }, { quoted: mek });

        // React with ✅ when the results are sent
        await conn.sendMessage(from, { react: { text: "✅", key: mek.key } });
        reply("> ʀᴇꜱᴜʟᴛꜱ ꜱᴇɴᴛ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ... ✅");

    } catch (e) {
        console.error("Error:", e);
        reply("> ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴡʜɪʟᴇ ꜱᴇᴀʀᴄʜɪɴɢ. ᴘʟᴇᴀꜱᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ.❌");
    }
});
