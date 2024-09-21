const weather = require('weather-js');
const { cmd } = require('../command');
const fetch = require('node-fetch'); // Make sure to install node-fetch

cmd({
    pattern: "weather",
    desc: "Get weather information for a city",
    category: "information",
    filename: __filename
},
async (conn, mek, m, { from, args, reply }) => {
    try {
        await conn.sendMessage(from, {
            react: { text: "🌤️", key: mek.key }
        });

        if (!args.length) {
            return reply("*/Please provide a city name to get weather information./*");
        }

        const city = args.join(" ");
        console.log("City:", city);

        // Fetch weather data using weather-js
        weather.find({ search: city, degreeType: 'C' }, async function(err, result) {
            if (err) {
                console.error("Error:", err);
                return reply(`An error occurred: ${err.message}. Please try again.`);
            }
            if (!result || !result.length) {
                return reply(`Sorry, I couldn't find the weather information for "${city}". Please check the name and try again.`);
            }

            const weatherData = result[0];
            const weatherInfo = `
🌤️ *Weather in ${weatherData.location.name}* 🌤️

*Temperature*: ${weatherData.current.temperature}°C
*Sky*: ${weatherData.current.skytext}
*Feels Like*: ${weatherData.current.feelslike}°C
*Humidity*: ${weatherData.current.humidity}%
*Wind*: ${weatherData.current.winddisplay}
*Observation Time*: ${weatherData.current.observationtime}
`;

            // Use the provided image URL
            const imageUrl = "https://raw.githubusercontent.com/CharukaMahesh/QUEEN-CHETHI/refs/heads/main/IMGES/20240921_160218.jpg";

            // Send the weather information with the custom image
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: weatherInfo
            }, { quoted: mek });

        });

    } catch (e) {
        console.error("Error:", e);
        reply("An unexpected error occurred while processing your request. Please try again later.");
    }
});
