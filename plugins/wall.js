const { cmd } = require('../command');
const randomWallpapers = require('random-wallpapers');

cmd({
    pattern: 'lambowall',
    desc: 'Send a random Lamborghini wallpaper',
    category: 'media',
    filename: __filename
}, async (conn, mek, m, { from }) => {
    try {
        const wallpaper = await randomWallpapers.getRandom({ query: 'Lamborghini', count: 1 });
        
        // Auto react with a thumbs up emoji
        await conn.react(m.key, '🚗');

        await conn.sendMessage(from, { image: { url: wallpaper[0].url }, caption: 'Here\'s a random Lamborghini wallpaper!' }, { quoted: mek });
    } catch (error) {
        console.error('Error fetching wallpaper:', error);
        await conn.sendMessage(from, 'Sorry, I couldn\'t fetch a wallpaper at the moment.', { quoted: mek });
    }
});
