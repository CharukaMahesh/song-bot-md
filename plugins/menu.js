const { cmd } = require('../command');

cmd({
    pattern: 'menu',
    desc: 'Display bot commands',
    category: 'system',
    filename: __filename
}, async (conn, mek, m, { from }) => {

    const buttons = [
        {buttonId: 'song', buttonText: {displayText: '🎶 Song Download'}, type: 1},
        {buttonId: 'about', buttonText: {displayText: 'ℹ️ About'}, type: 1},
        {buttonId: 'ai', buttonText: {displayText: '🤖 AI'}, type: 1},
        {buttonId: 'mediafire', buttonText: {displayText: '📁 Mediafire Download'}, type: 1},
        {buttonId: 'weather', buttonText: {displayText: '🌤️ Weather'}, type: 1},
        {buttonId: 'wiki', buttonText: {displayText: '📚 Wiki Search'}, type: 1},
        {buttonId: 'ytsearch', buttonText: {displayText: '🔍 YouTube Search'}, type: 1}
    ];

    const buttonMessage = {
        image: {url: 'https://raw.githubusercontent.com/CharukaMahesh/Queen-Chethi-V1/refs/heads/main/Img/20240921_160218.jpg'},
        caption: '🌟 *Queen Chethi Bot Menu* 🌟\n\nSelect an option below to access the respective feature:',
        footer: 'Powered by Charuka Mahesh',
        buttons: buttons,
        headerType: 4
    };

    await conn.sendMessage(from, buttonMessage, {quoted: mek});
});
