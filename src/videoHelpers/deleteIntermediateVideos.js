const fs = require('fs');
const deleteIntermediateVideos = (videoPaths) => {
    for (const path of videoPaths) {
      fs.unlinkSync(path);
      console.log(`Arquivo removido: ${path}`);
    }
  };
module.exports = deleteIntermediateVideos;
  