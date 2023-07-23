const ffmpeg = require('fluent-ffmpeg');
const acelerarVideo = require('./acelerarVideo');
const cutVideos = (videoPaths, startTimes, durations) => {
    return new Promise((resolve, reject) => {
      if (videoPaths.length !== startTimes.length || videoPaths.length !== durations.length) {
        reject(new Error('Number of start times and durations must match the number of videos.'));
        return;
      }
  
      const promises = videoPaths.map((videoPath, index) => {
        return new Promise((resolve, reject) => {
          const startTime = startTimes[index];
          const durationSeconds = durations[index];
          const outputFilePath = videoPath.replace('.mp4', '_cut.mp4');
          const inputPath = index === 1 ? videoPath.replace('.mp4', '_accelerated.mp4') : videoPath;
  
          if (index === 1) {
            // Acelerar o segundo vídeo antes do corte
            acelerarVideo(videoPath, inputPath, 2)
              .then(() => {
                ffmpeg(inputPath)
                  .setStartTime(startTime)
                  .setDuration(durationSeconds)
                  .output(outputFilePath)
                  .on('end', () => {
                    console.log(`Vídeo ${index + 1} cortado com sucesso: ${outputFilePath}`);
                    resolve(outputFilePath);
                  })
                  .on('error', (err) => {
                    console.error(`Erro ao cortar o vídeo ${index + 1}:`, err);
                    reject(err);
                  })
                  .run();
              })
              .catch((err) => {
                console.error('Erro ao acelerar o segundo vídeo:', err);
                reject(err);
              });
          } else {
            // Cortar os outros vídeos normalmente
            ffmpeg(videoPath)
              .setStartTime(startTime)
              .setDuration(durationSeconds)
              .output(outputFilePath)
              .on('end', () => {
                console.log(`Vídeo ${index + 1} cortado com sucesso: ${outputFilePath}`);
                resolve(outputFilePath);
              })
              .on('error', (err) => {
                console.error(`Erro ao cortar o vídeo ${index + 1}:`, err);
                reject(err);
              })
              .run();
          }
        });
      });
  
      Promise.all(promises)
        .then((cutVideoPaths) => {
          resolve(cutVideoPaths);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
module.exports = cutVideos;