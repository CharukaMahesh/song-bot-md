const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "g6",
    desc: "Get Grade 6 papers from ethaksalawa.lk",
    category: "tools",
    filename: __filename
},
async (conn, m, { from }) => {
    try {
        // Fetch papers list from ethaksalawa.lk
        const response = await axios.get('https://www.ethaksalawa.lk/api/grade6papers'); // Replace with the actual API or URL
        const papers = response.data; // Assuming the API returns JSON

        if (!papers || papers.length === 0) {
            await conn.sendMessage(from, { text: "*No Grade 6 papers found.*" });
            return;
        }

        // Format the list of papers
        const paperList = papers.map((paper, index) => `⭐ ${index + 1}. ${paper.name}`).join('\n');
        const caption = `*Grade 6 Papers List from Ethaksalawa.lk*\n\n${paperList}\n\n*Powered by Charuka*`;

        // Send the list to the user
        await conn.sendMessage(from, { text: caption });
    } catch (error) {
        console.error('Error fetching Grade 6 papers:', error);
        await conn.sendMessage(from, { text: "*Failed to fetch Grade 6 papers. Please try again later.*" });
    }
});
