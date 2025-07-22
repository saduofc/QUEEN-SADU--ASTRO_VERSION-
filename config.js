const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Q7d3lJzB#fMPbbMVdcKh-YC5D_yK9Olus0LujC9z5pUebiDs3lYo"
ALIVE_IMG : process.env.ALIVE_IMG || "https://files.catbox.moe/ali8ed.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃QS_ASTRO_VERSION 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : QUEEN-SADU-MD",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
