const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../logs/app.log');

const logError = (message) => {
    const log = `${new Date().toISOString()} - ERROR: ${message}\n`;
    fs.appendFileSync(logFile, log);
};

module.exports = { logError };
