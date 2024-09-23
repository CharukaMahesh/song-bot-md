const axios = require('axios');

module.exports = {
  pattern: 'npm',
  function: async (conn, mek, m, { q, reply }) => {
    if (!q) return reply('Please provide a search term.');

    try {
      const response = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${q}&size=5`);
      const packages = response.data.objects.map(pkg => 
        `Name: ${pkg.package.name}\nVersion: ${pkg.package.version}\nDescription: ${pkg.package.description}\n\n`
      ).join('');

      reply(packages);
    } catch (error) {
      console.error('Error fetching npm search results:', error);
      reply('Error fetching npm results.');
    }
  },
};
