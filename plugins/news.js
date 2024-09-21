const { cmd } = require('../command');
const { getNews } = require('@hiru-news-scraper/hiru-news-scraper');

// Define the group chat ID
const groupChatId = 'DI6OYtkMV4g3Y3sA7hQNYu'; // Replace with your group chat ID

// Function to send news to the WhatsApp group
async function sendNewsToGroup(conn) {
    try {
        const news = await getNews(); // Fetch the latest news
        if (news && news.length) {
            news.forEach(async (item) => {
                const message = `
📰 *${item.title}*
🔗 *Link*: ${item.link}
🕒 *Published*: ${item.date}
                `;
                // Send the message to the group
                await conn.sendMessage(groupChatId, { text: message });
            });
        } else {
            console.log("No news available.");
        }
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

// Command to start fetching news
cmd({
    pattern: 'hirunews',
    desc: 'Fetch Hiru news',
    category: 'news',
    filename: __filename
}, async (conn, mek) => {
    await sendNewsToGroup(conn);
});

// Set an interval to fetch news every hour (3600000 ms)
setInterval(() => {
    sendNewsToGroup(conn);
}, 3600000);
