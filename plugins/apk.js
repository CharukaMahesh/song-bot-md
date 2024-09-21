const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const APKMIRROR_SEARCH_URL = 'https://www.apkmirror.com/apk/search/'; // Base URL for APKMirror search

module.exports = {
    name: 'apk',
    description: 'Downloads an APK file from APKMirror',
    execute: async (client, message, args) => {
        const apkName = args.join(' '); // Join all args to form the APK name

        // Auto-react to the message
        await client.sendReaction(message.from, '👍', message.id);

        if (!apkName) {
            return client.sendMessage(message.from, 'Please provide the name of the APK you want to download.', MessageType.text);
        }

        try {
            // Search for the APK
            const searchResponse = await axios.get(`${APKMIRROR_SEARCH_URL}${encodeURIComponent(apkName)}`);
            const $ = cheerio.load(searchResponse.data);

            // Find the first APK link from the search results
            const apkLink = $('.search-result a').first().attr('href');

            if (!apkLink) {
                return client.sendMessage(message.from, 'No APK found for the given name.', MessageType.text);
            }

            // Get the APK download page
            const apkPageResponse = await axios.get(apkLink);
            const $apkPage = cheerio.load(apkPageResponse.data);

            // Find the download link
            const downloadUrl = $apkPage('.download-button').attr('href');

            if (!downloadUrl) {
                return client.sendMessage(message.from, 'Download link not found.', MessageType.text);
            }

            // Download the APK
            const apkResponse = await axios.get(downloadUrl, { responseType: 'stream' });
            const fileName = path.basename(downloadUrl); // Extract the filename
            const writer = fs.createWriteStream(fileName);

            apkResponse.data.pipe(writer);

            writer.on('finish', () => {
                client.sendMessage(message.from, `APK downloaded successfully: ${fileName}`, MessageType.text);
            });

            writer.on('error', (err) => {
                console.error(err);
                client.sendMessage(message.from, 'Error downloading APK.', MessageType.text);
            });
        } catch (error) {
            console.error(error);
            client.sendMessage(message.from, 'Failed to download APK. Please check the APK name.', MessageType.text);
        }
    }
};
