const { Client } = require('whatsapp-web.js');
const { getHiruNews } = require('hirunews-scraper');

const client = new Client();

client.on('ready', () => {
    console.log('Bot is ready!');

    setInterval(async () => {
        try {
            const news = await getHiruNews();
            const groupJID = '120363332445008182@g.us'; // Replace with your group JID

            if (news) {
                await client.sendMessage(groupJID, `📰 Latest Hiru News: ${news.title} \n${news.link}`);
                console.log("News sent successfully!");
            }
        } catch (error) {
            console.error("Error sending news:", error);
        }
    }, 3600000); // Sends every hour
});

client.initialize();
