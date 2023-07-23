const ffmpeg = require('fluent-ffmpeg');
const combineVideos = (videoPaths, outputVideo) => {
    return new Promise((resolve, reject) => {
      const process = ffmpeg()
        .input(videoPaths[0])
        .input(videoPaths[1])
        .complexFilter(['[0:v]scale=1080x1920[top];[1:v]scale=1080x1920[bottom];[top][bottom]vstack'])
        .outputOptions('-map 0:a?')
        .outputOptions('-c:v libx264')
        .outputOptions('-strict experimental')
        .output(outputVideo)
        .on('start', () => {
          console.log('Iniciando a combinação dos vídeos...');
        })
        .on('progress', (progress) => {
          if (progress.timemark) {
            console.clear();
            console.log(`Progresso: ${progress.timemark} (${progress.percent.toFixed(2)}%)`);
          }
        })
        .on('end', () => {
          console.log('\nVídeos combinados com sucesso:', outputVideo);
          resolve();
        })
        .on('error', (err) => {
          console.error('\nErro ao combinar os vídeos:', err);
          reject(err);
        });
  
      process.run();
    });
  };
 
module.exports = combineVideos;