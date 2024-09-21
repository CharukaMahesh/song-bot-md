const { cmd } = require('../command');
const axios = require('axios');
const cheerio = require('cheerio');

// Define the group chat ID
const groupChatId = 'DI6OYtkMV4g3Y3sA7hQNYu'; // Replace with your group chat ID

// Function to fetch and send Hiru news
async function sendHiruNews(conn) {
    try {
        const response = await axios.get('https://www.hirunews.lk/'); // Fetch the Hiru News homepage
        const $ = cheerio.load(response.data);
        const newsItems = [];

        // Scrape the news titles and links (modify the selectors as necessary)
        $('.news-list .news-title a').each((index, element) => {
            const title = $(element).text();
            const link = $(element).attr('href');
            newsItems.push({ title, link });
        });

        // Send the latest news to the group
        for (const item of newsItems) {
            const message = `
📰 *${item.title}*
🔗 *Link*: ${item.link}
            `;
            await conn.sendMessage(groupChatId, { text: message });
        }
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

// Command to manually fetch and send news
cmd({
    pattern: 'hirunews',
    desc: 'Fetch Hiru news',
    category: 'news',
    filename: __filename
}, async (conn, mek) => {
    await sendHiruNews(conn);
});

// Set an interval to fetch news every hour (3600000 ms)
setInterval(() => {
    sendHiruNews(conn);
}, 3600000);
