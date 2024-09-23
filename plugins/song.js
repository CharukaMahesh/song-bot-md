const { cmd } = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');

// 🎧--------SONG-DOWNLOAD-------//

cmd({
    pattern: "song",
    alias: ["ytmp3","play"],
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
        if (!q) return reply("Please provide a valid song name or URL... 🙋‍♂️");

        // React with 🔍 and show searching text
        await conn.sendMessage(from, { react: { text: "🔍", key: mek.key } });
        reply("*`I AM SEARCHING FOR YOUR SONG...🎶`*");

        // Search song
        const search = await yts(q);
        if (!search || !search.videos || !search.videos.length) {
            return reply("No results found for the given query.");
        }

        const data = search.videos[0];
        const url = data.url;

        let desc = `
🎶 𝗤𝗨𝗘𝗘𝗡 𝗖𝗛𝗘𝗧𝗛𝗜 𝗬𝗧 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🎶

*TITLE* 🔍: ${data.title}
*DESCRIPTION* 🗒️: ${data.description}
*TIME* ⏰: ${data.timestamp}
*AGO* 🚀: ${data.ago}
*VIEWS* 📽️: ${data.views}

*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ ᴍᴀʜᴇꜱʜ*
        `;

        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // React with 📥 and show downloading text
        await conn.sendMessage(from, { react: { text: "📥", key: mek.key } });
        reply("*`I AM Downloading Your Song...📥`*");

        // Download Song
        let downSong = await fg.yta(url);
        if (!downSong || !downSong.dl_url) {
            return reply("Failed to download song. Please try again later.");
        }
        let downloadSongUrl = downSong.dl_url;

        // React with 📤 and show uploading text
        await conn.sendMessage(from, { react: { text: "📤", key: mek.key } });
        reply("*`I AM Uploading Your Song...📤`*");

        // Send Audio File
        await conn.sendMessage(from, {
            audio: { url: downloadSongUrl },
            mimetype: "audio/mp4",
            caption: `${data.title} - Song`
        }, { quoted: mek });

        // React with ✅ when upload is complete
        await conn.sendMessage(from, { react: { text: "✅", key: mek.key } });
        reply("*`Song uploaded successfully...✅`*");

    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
