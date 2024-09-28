const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');

// Current version of the bot
const currentVersion = '1.0.0'; // Change this to your bot's current version

cmd({
    pattern: 'update',
    desc: 'Check for bot updates or send update notifications',
    category: 'admin',
    filename: __filename
},
async (conn, mek, m, { from, quoted, q, reply, isOwner }) => {
    try {
        // Ensure only the bot owner can use this command
        if (!isOwner) return reply('Only the bot owner can use this command.');

        // Fetch the latest release from GitHub
        const updateInfo = await fetchJson('https://api.github.com/repos/CharukaMahesh/song-bot-md/releases/latest');

        if (!updateInfo) {
            return reply('Failed to fetch update information. Please try again later.');
        }

        const latestVersion = updateInfo.tag_name || 'Unknown';
        const changelog = updateInfo.body || 'No changelog available.';
        const updateUrl = updateInfo.html_url || 'https://github.com/CharukaMahesh/song-bot-md';

        // Check if the bot is up-to-date
        if (latestVersion !== currentVersion) {
            await conn.sendMessage(from, {
                text: `🚨 *New Bot Update Available!* 🚨\n\n*Latest Version:* ${latestVersion}\n*Current Version:* ${currentVersion}\n\n*Changelog:*\n${changelog}\n\n*Update Link:* [Click here to update](${updateUrl})`,
            }, { quoted: mek });
        } else {
            reply(`✅ Your bot is up to date. Current version: ${currentVersion}.`);
        }

        // Optionally send custom updates to users
        if (q) {
            await conn.sendMessage(from, {
                text: `📝 *Update Notification* 📝\n\n${q}\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ ᴍᴀʜᴇꜱʜ`,
            }, { quoted: mek });
        }
    } catch (e) {
        console.log('Error in update command:', e);
        reply('An error occurred while checking for updates. Please try again later.');
    }
});
