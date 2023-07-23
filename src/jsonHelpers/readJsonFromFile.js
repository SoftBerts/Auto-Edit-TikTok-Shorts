const fs = require('fs');

const readJsonFromFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading JSON file: ${err.message}`);
    throw err;
  }
};

module.exports = readJsonFromFile;
