const ffmpeg = require('fluent-ffmpeg');
const acelerarVideo = (inputPath, outputPath, speed) => {
    return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .videoFilters(`setpts=${1 / speed}*PTS`)
        .noAudio() // Remove o áudio do vídeo
        .outputOptions(['-c:v libx264']) // Codifica o vídeo usando o codec H.264
        .output(outputPath)
        .on('end', () => {
          console.log('Vídeo acelerado e sem áudio com sucesso!');
          resolve();
        })
        .on('error', (err) => {
          console.error('Erro ao acelerar o vídeo:', err.message);
          reject(err);
        })
        .run();
    });
  };
module.exports = acelerarVideo;