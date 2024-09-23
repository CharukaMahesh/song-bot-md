const { cmd } = require('../command');
const axios = require('axios');
const cheerio = require('cheerio');

cmd({
    pattern: 'hapmodsearch',
    desc: 'Search apps/games on HappyMod',
    category: 'search',
    filename: __filename
}, async (conn, mek, m, { from, args }) => {
    const query = args.join(' ');

    if (!query) {
        return conn.sendMessage(from, 'Please provide a search term.', { quoted: mek });
    }

    const url = `https://happymod.com/search/${encodeURIComponent(query)}`;

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const results = [];

        $('.item-info').each((i, element) => {
            const title = $(element).find('.title').text();
            const link = $(element).find('a').attr('href');
            results.push({ title, link });
        });

        if (results.length === 0) {
            return conn.sendMessage(from, 'No results found.', { quoted: mek });
        }

        const message = results.map((item, index) => `${index + 1}. ${item.title}\nLink: ${item.link}`).join('\n\n');
        await conn.sendMessage(from, message, { quoted: mek });
    } catch (error) {
        console.error('Error searching HappyMod:', error);
        await conn.sendMessage(from, 'Sorry, I couldn\'t fetch the results at the moment.', { quoted: mek });
    }
});
