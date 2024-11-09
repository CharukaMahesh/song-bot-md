const { cmd } = require('../command');
const fg = require('api-dylux');  // Ensure this is the correct library for song downloading
const yts = require('yt-search');

// 🎧--------SONG-DOWNLOAD-------//

cmd({
    pattern: "song",
    alias: ["ytmp3", "play"],
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
        // Check if the user has provided a search query
        if (!q) return reply("Please provide a valid song name or URL... 🙋‍♂️");

        // React with 🔍 to indicate searching
        await conn.sendMessage(from, { react: { text: "🔍", key: mek.key } });
        reply("*`I AM SEARCHING FOR YOUR SONG...🎶`*");

        // Perform YouTube search
        const search = await yts(q);
        if (!search || !search.videos || !search.videos.length) {
            return reply("No results found for the given query.");
        }

        // Get the first search result
        const data = search.videos[0];
        const url = data.url;

        // Prepare the song details
        let desc = `
❄️*𝕊𝕆ℕ𝔾 𝔹𝕆𝕋 𝕍1*❄️

*TITLE* 🔍: ${data.title}

*DESCRIPTION* 🗒️: ${data.description}

*TIME* ⏰: ${data.timestamp}

*AGO* 🚀: ${data.ago}

*VIEWS* 📽️: ${data.views}

*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ ᴍᴀʜᴇꜱʜ*
        `;

        // Send song thumbnail and details
        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // React with 📥 to indicate downloading
        await conn.sendMessage(from, { react: { text: "📥", key: mek.key } });
        reply("*`I AM Downloading Your Song...📥`*");

        // Download the song using fg.yta() (ensure fg.yta exists)
        let downSong;
        try {
            downSong = await fg.yta(url); // Assuming fg.yta() is correct
        } catch (err) {
            console.error("Error downloading song:", err);
            return reply("Failed to download song. Please try again later.");
        }

        // Check if the download URL is available
        if (!downSong || !downSong.dl_url) {
            return reply("Failed to download song. Please try again later.");
        }

        const downloadSongUrl = downSong.dl_url;

        // React with 📤 to indicate uploading
        await conn.sendMessage(from, { react: { text: "📤", key: mek.key } });
        reply("*`I AM Uploading Your Song...📤`*");

        // Send the audio file to the user
        await conn.sendMessage(from, {
            audio: { url: downloadSongUrl },
            mimetype: "audio/mp4", // Use the correct MIME type if needed (audio/mpeg could be an alternative)
            caption: `${data.title} - Song`
        }, { quoted: mek });

        // React with ✅ to indicate upload success
        await conn.sendMessage(from, { react: { text: "✅", key: mek.key } });
        reply("*`Song uploaded successfully...✅`*");

    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
