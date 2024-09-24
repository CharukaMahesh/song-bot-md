const { searchTracks } = require('spotify-scraper');
const { cmd } = require('../command');

// 🎵--------SPOTIFY SEARCH--------//

cmd({
    pattern: "spotify",
    alias: ["sptsearch", "spt"],
    desc: "Search Spotify tracks by query",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
        if (!q) return reply("*`Please provide a search term...❄️`*");

        // React with 🎵 and show searching text
        await conn.sendMessage(from, { react: { text: "🎵", key: mek.key } });
        reply("*`Searching Spotify...🎶`*");

        // Perform Spotify track search based on query
        const searchResults = await searchTracks(q);
        if (!searchResults || !searchResults.length) {
            return reply("No results found for the given query.");
        }

        let searchMessage = `🎶 *SPOTIFY SEARCH RESULTS* 🎶\n\n`;
        const topResults = searchResults.slice(0, 5); // Display top 5 results

        topResults.forEach((track, index) => {
            searchMessage += `🎵 *${index + 1}.* ${track.name} - ${track.artists.map(artist => artist.name).join(', ')}\n`;
            searchMessage += `💽 *Album*: ${track.album.name}\n`;
            searchMessage += `🔗 *Link*: [Click Here](${track.url})\n\n`;
        });

        searchMessage += "*Powered by R.A. Charuka Mahesh*";

        await conn.sendMessage(from, { text: searchMessage }, { quoted: mek });

    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
