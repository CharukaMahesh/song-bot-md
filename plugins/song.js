const { cmd } = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');

// 🎶--------SONG-DOWNLOAD-------//
cmd({
    pattern: "song",
    alias: ["ytmp3", "splay"],
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
        if (!q) return reply("Please provide a valid song name or URL... 🎶");

        console.log("User Query:", q);

        // React with 🔍 and show searching text
        await conn.sendMessage(from, { react: { text: "🔍", key: mek.key } });
        reply("> ꜱᴇᴀʀᴄʜɪɴɢ ꜰᴏʀ ʏᴏᴜʀ ꜱᴏɴɢ.. 🔎");

        // Search song
        const search = await yts(q);
        console.log("Search Results:", search);

        if (!search || !search.videos || !search.videos.length) {
            return reply("No results found for the given query.");
        }

        const data = search.videos[0];
        console.log("Song Data:", data);

        const url = data.url;

        // Send song details with thumbnail
        const desc = `*⭐ -Sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ- ⭐*

> ᴇɴᴏᴜɴᴄɪɴɢ ꜰᴏʀ ʏᴏᴜʀ ꜱᴏɴɢ.. 🎶

╭─────────────✑
◉│ *1*    *ᴛɪᴛʟᴇ🎶 :* *${data.title}*
◉│ *2*    *ᴛɪᴍᴇ⏰ :* *${data.timestamp}*
◉│ *3*    *ᴀɢᴏ📆 :* *${data.ago}*
◉│ *4*    *ᴠɪᴇᴡꜱ🔔 :* *${data.views}*
╰─────────────✑

*ᴇɴᴊᴏʏ ʏᴏᴜʀ ꜱᴏɴɢ*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ ᴍᴀʜᴇꜱʜ`;

        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // React with 📥 and show downloading text
        await conn.sendMessage(from, { react: { text: "📥", key: mek.key } });
        reply("> ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴏɴᴇ.. 📥");

        // Download Song
        let downSong = await fg.yta(url);
        console.log("Download Response:", downSong);

        if (!downSong || !downSong.dl_url) {
            return reply("Failed to download song. Please try again later.");
        }

        const downloadSongUrl = downSong.dl_url;

        // React with 📤 and show uploading text
        await conn.sendMessage(from, { react: { text: "📤", key: mek.key } });
        reply("> ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴏɴᴇ.. 📤");

        // Send Song File
        await conn.sendMessage(from, {
            audio: { url: downloadSongUrl },
            mimetype: "audio/mp3",
            caption: `${data.title} - Song`
        }, { quoted: mek });

        // React with ✅ when upload is complete
        await conn.sendMessage(from, { react: { text: "✅", key: mek.key } });
        reply("> ᴏɴᴇ ᴜᴘʟᴏᴀᴅ ᴄᴏᴍᴘʟᴇᴛᴇᴅ..✅");

    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
});
