const { cmd } = require('../command');
const hirunews = require('hirunews-scraper');

// Your WhatsApp number
const yourNumber = '94727270908';  // Use international format without '+' or '-'

// Hiru News function to send updates
const sendNewsToUser = async (conn) => {
    try {
        const latestNews = await hirunews.getLatestNews(); // Fetch the latest news

        if (!latestNews || latestNews.length === 0) {
            console.error("No news found.");
            return;
        }

        let newsText = "*📰 Hiru News Update*\n\n";
        
        latestNews.forEach((news, index) => {
            newsText += `*${index + 1}. ${news.title}*\n${news.link}\n\n`;
        });

        // Send news to your number
        await conn.sendMessage(`${yourNumber}@s.whatsapp.net`, { text: newsText });
        console.log("News sent successfully!");

    } catch (e) {
        console.error("Failed to fetch or send news:", e);
    }
};

// 🎧--------AUTOMATIC NEWS SENDING-------//

cmd({
    pattern: "news",
    desc: "Send latest Hiru News",
    category: "news",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        await sendNewsToUser(conn);  // Send the latest news to your number
        reply("Hiru News has been sent to your number.");

    } catch (e) {
        console.error("Error:", e);
        reply("Failed to send news.");
    }
});

// Schedule news updates every hour (or customize the interval)
setInterval(() => {
    // Assuming `conn` is your WhatsApp connection object
    sendNewsToUser(conn);  // Automatically send news updates
}, 3600000);  // Every hour
