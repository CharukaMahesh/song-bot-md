const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/CharukaMahesh/QUEEN-CHETHI/refs/heads/main/IMGES/20240921_115553.png",
    ALIVE_MSG: process.env.ALIVE_MSG || "*`HI I AM ONLINE...🪄`*",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    MODE: process.env.MODE || "public",
};
