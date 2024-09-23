const { cmd } = require('../command');
const googleIt = require('google-it');

cmd({
    pattern: 'google',
    desc: 'Search Google and return results',
    category: 'search',
    filename: __filename
}, async (conn, mek, m, { from, args }) => {
    const query = args.join(' ');

    if (!query) {
        return conn.sendMessage(from, 'Please provide a search term.', { quoted: mek });
    }

    try {
        // React with a search icon
        await conn.react(m.key, '🔍');

        const results = await googleIt({ query, limit: 5 });

        if (results.length === 0) {
            await conn.react(m.key, '❌'); // React with a cross if no results found
            return conn.sendMessage(from, 'No results found.', { quoted: mek });
        }

        const message = results.map((item, index) => `${index + 1}. ${item.title}\n${item.link}`).join('\n\n');

        await conn.sendMessage(from, message, { quoted: mek });

        // React with a checkmark icon after sending results
        await conn.react(m.key, '✅');
    } catch (error) {
        console.error('Error searching Google:', error);
        await conn.react(m.key, '❌'); // React with a cross on error
        await conn.sendMessage(from, 'Sorry, I couldn\'t fetch the results at the moment.', { quoted: mek });
    }
});
