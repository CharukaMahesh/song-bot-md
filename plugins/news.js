const { Client } = require('whatsapp-web.js');
const deranaNews = require('@mrhansamala/derana-news-scraper');

// Create WhatsApp client instance
const client = new Client();

// WhatsApp group ID (your group)
const groupId = 'DI6OYtkMV4g3Y3sA7hQNYu';

// Function to scrape news and send to WhatsApp group
async function sendLatestNews() {
    try {
        // Scrape the latest news from Ada Derana
        let latestNews = await deranaNews.getNews();
        if (latestNews && latestNews.length) {
            // Format the news
            let newsMessage = `📰 *Latest Ada Derana News*\n\n`;
            latestNews.forEach((news, i) => {
                newsMessage += `${i + 1}. *${news.title}*\n${news.link}\n\n`;
            });

            // Send to the WhatsApp group
            const chat = await client.getChatById(groupId);
            chat.sendMessage(newsMessage);
        }
    } catch (error) {
        console.error('Error fetching or sending news:', error);
    }
}

// Set up periodic check (every hour, for example)
setInterval(sendLatestNews, 3600000); // 1 hour

// WhatsApp client initialization
client.on('qr', (qr) => {
    console.log('QR code:', qr);
});

client.on('ready', () => {
    console.log('WhatsApp client is ready!');
    sendLatestNews(); // Send news once when ready
});

client.initialize();
