const { cmd } = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');
const { MessageType } = require('@adiwajshing/baileys');

// 🎥--------VIDEO-DOWNLOAD-------//

cmd({
    pattern: "video",
    desc: "Download videos",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
        if (!q) return reply("Please provide a valid URL or video name... 🙋‍♂️");

        // React and show searching text
        await conn.sendMessage(from, { react: { text: "🔍", key: mek.key } });
        reply("*`I AM SEARCHING FOR YOUR VIDEO...🎥`*");

        // Search video
        const search = await yts(q);
        if (!search || !search.videos || !search.videos.length) {
            return reply("No results found for the given query.");
        }

        const data = search.videos[0];
        const url = data.url;

        let desc = `
🪄---- 𝐐𝐔𝐄𝐄𝐍 𝐂𝐇𝐄𝐓𝐇𝐈 𝐘𝐓 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ---🪄

*TITLE* 🔍: ${data.title}
*DESCRIPTION* 🗒️: ${data.description}
*TIME* ⏰: ${data.timestamp}
*AGO* 🚀: ${data.ago}
*VIEWS* 📽️: ${data.views}

*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ ᴍᴀʜᴇꜱʜ*
        `;

        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // React and show downloading text
        await conn.sendMessage(from, { react: { text: "📥", key: mek.key } });
        reply("*`I AM DOWNLOADING YOUR VIDEO...📥`*");

        // Download Video
        let downVideo = await fg.ytv(url);
        if (!downVideo || !downVideo.dl_url) {
            return reply("Failed to download video. Please try again later.");
        }
        
        // Prepare quality options
        const qualityOptions = downVideo.quality; // Assuming 'quality' contains available qualities
        const buttonOptions = qualityOptions.map(q => {
            return { buttonId: q, buttonText: { displayText: q }, type: 1 };
        });

        // Send quality selection buttons
        await conn.sendMessage(from, {
            text: "*Select Your Video Quality:*",
            buttons: buttonOptions,
            headerType: 1
        }, { quoted: mek });

        // Listen for button response
        conn.on('buttonsResponse', async (buttonM) => {
            const selectedQuality = buttonM.selectedButtonId;
            
            // Check if the selected quality is available
            if (!qualityOptions.includes(selectedQuality)) {
                reply("No such quality available. Sending default quality...");
                // Send default quality (adjust as needed)
                const defaultQuality = qualityOptions[0];
                await sendVideo(conn, from, defaultQuality, downVideo);
            } else {
                await sendVideo(conn, from, selectedQuality, downVideo);
            }
        });

    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while processing your request. Please try again later.");
    }
});

// Function to send video based on quality
async function sendVideo(conn, from, quality, downVideo) {
    // React and show uploading text
    await conn.sendMessage(from, { react: { text: "📤", key: mek.key } });
    reply("*`I AM UPLOADING YOUR VIDEO...📤`*");

    // Assuming 'downVideo' contains URLs for different qualities
    const downloadVideoUrl = downVideo.dl_url[quality]; // Adjust based on your data structure

    // Send Video File
    await conn.sendMessage(from, {
        video: { url: downloadVideoUrl },
        mimetype: "video/mp4",
        caption: `${data.title} - Video (${quality})`
    }, { quoted: mek });

    // React when upload is complete
    await conn.sendMessage(from, { react: { text: "✅", key: mek.key } });
    reply("*`VIDEO UPLOADED SUCCESSFULLY...✅`*");
}
