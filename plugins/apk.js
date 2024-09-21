const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'download-apk',
    description: 'Downloads an APK file from a provided URL or keyword',
    execute: async (client, message, args) => {
        const apkUrl = args[0]; // The first argument should be the APK URL or keyword

        // Auto-react to the message
        await client.sendReaction(message.from, '👍', message.id); // Adjust the emoji as needed

        if (!apkUrl) {
            return client.sendMessage(message.from, 'Please provide an APK URL or keyword.', MessageType.text);
        }

        try {
            // Here you can add logic to handle keywords if needed
            const response = await axios.get(apkUrl, { responseType: 'stream' });
            const fileName = path.basename(apkUrl); // Extract the filename from the URL
            const writer = fs.createWriteStream(fileName);

            response.data.pipe(writer);

            writer.on('finish', () => {
                client.sendMessage(message.from, `APK downloaded successfully: ${fileName}`, MessageType.text);
            });

            writer.on('error', (err) => {
                console.error(err);
                client.sendMessage(message.from, 'Error downloading APK.', MessageType.text);
            });
        } catch (error) {
            console.error(error);
            client.sendMessage(message.from, 'Failed to download APK. Please check the URL or keyword.', MessageType.text);
        }
    }
};
