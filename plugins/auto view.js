const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('ready', () => {
    console.log('Bot is ready!');

    // Automatically view statuses
    client.on('message_create', async (msg) => {
        if (msg.type === 'status') {
            try {
                await msg.load();
                console.log(`Viewed status from: ${msg.from}`);
            } catch (error) {
                console.error("Error viewing status:", error);
            }
        }
    });
});

client.initialize();
