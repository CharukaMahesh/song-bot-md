const { cmd } = require('../command');

cmd({
    pattern: "menu2",
    desc: "Show bot menu with buttons",
    category: "tools",
},
async (conn, mek, m, { from }) => {
    const buttons = [
        { buttonId: 'id1', buttonText: { displayText: 'Option 1' }, type: 1 },
        { buttonId: 'id2', buttonText: { displayText: 'Option 2' }, type: 1 },
    ];

    const buttonMessage = {
        contentText: "Choose an option:",
        footerText: "Bot Menu",
        buttons: buttons,
        headerType: 1
    };

    await conn.sendMessage(from, buttonMessage, { quoted: mek });
});
