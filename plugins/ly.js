const lyricsFinder = require('songlyrics-finderl');
const { cmd } = require('../command');

// 🎶--------LYRICS FINDER--------//

cmd({
    pattern: "lyrics",
    alias: ["songlyrics", "lyric"],
    desc: "Find song lyrics",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
        if (!q) return reply("*`Please provide a song title or artist...❄️`*");

        // React with 🎵 and show searching text
        await conn.sendMessage(from, { react: { text: "🎵", key: mek.key } });
        reply("*`Searching for song lyrics...🎶`*");

        // Perform lyrics search
        const lyrics = await lyricsFinder(q);
        if (!lyrics) {
            return reply("No lyrics found for the given song.");
        }

        let lyricsMessage = `🎶 *LYRICS FOR ${q.toUpperCase()}* 🎶\n\n`;
        lyricsMessage += `${lyrics}\n\n`;

        lyricsMessage += "*Powered by R.A. Charuka Mahesh*";

        await conn.sendMessage(from, { text: lyricsMessage }, { quoted: mek });

    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
