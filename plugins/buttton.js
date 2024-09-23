const { cmd } = require('../command');

cmd({
    pattern: "menu2",
    desc: "Show bot menu with buttons",
    category: "tools",
},
async (conn, mek, m, { from }) => {
    const buttons = [
        { buttonId: 'btn1', buttonText: { displayText: 'Button 1' }, type: 1 },
        { buttonId: 'btn2', buttonText: { displayText: 'Button 2' }, type: 1 },
    ];

    const buttonMessage = {
        text: "Choose an option:",
        buttons: buttons,
        headerType: 1
    };

    await conn.sendMessage(from, buttonMessage, { quoted: mek });
});
