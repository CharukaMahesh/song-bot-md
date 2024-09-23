const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "npm",
    desc: "Search for npm packages",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, {
    from, reply, q
}) => {
    try {
        if (!q) return reply('Please provide a search term.');

        // React with 🔍 when the command is triggered
        await conn.sendMessage(from, {
            react: { text: "🔍", key: mek.key }
        });

        // Fetch results from npm registry
        const response = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${q}&size=5`);
        const packages = response.data.objects.map(pkg => 
            `Name: ${pkg.package.name}\nVersion: ${pkg.package.version}\nDescription: ${pkg.package.description}\nLink: https://www.npmjs.com/package/${pkg.package.name}\n\n`
        ).join('');

        // Send the search results
        reply(packages || 'No results found.');
        
    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while fetching npm results. Please try again later.");
    }
});
