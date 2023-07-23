const ffmpegPath = require('ffmpeg-static');
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
const fs = require('fs');
const path = require('path');
const downloadVideoFromUrl = require('./videoHelpers/downloadVideo');
const cutVideos = require('./videoHelpers/cutVideos');
const combineVideos = require('./videoHelpers/combineVideos');
const resizeAndCropVideo = require('./videoHelpers/resizeAndCropVideo');
const deleteIntermediateVideos = require('./videoHelpers/deleteIntermediateVideos');
const readJsonFromFile = require('./jsonHelpers/readJsonFromFile');


const tempFolderPath = path.join(__dirname, '..', 'temp_files');

if (!fs.existsSync(tempFolderPath)) {
  fs.mkdirSync(tempFolderPath);
}

(async () => {
    try {
      const numVideos = 2; // Número de vídeos que você deseja processar
  
      const videoPaths = [];
      const startTimes = [];
      const durations = [];
      const accelerateOptions = [];
  
      // Leia o arquivo JSON contendo links, caminhos dos vídeos e opções de aceleração
      const inputFilePath = '../videos.json';
      const videosData = readJsonFromFile(inputFilePath);
  
      for (let i = 0; i < numVideos; i++) {
        const videoInfo = videosData[i];
        if (videoInfo.type === 'url') {
          videoPaths.push(await downloadVideoFromUrl(videoInfo.path));
        } else if (videoInfo.type === 'file') {
          videoPaths.push(videoInfo.path);
        } else {
          throw new Error(`Tipo de vídeo inválido para o vídeo ${i + 1}`);
        }
  
        // Inclua a opção de aceleração no array accelerateOptions
        accelerateOptions.push(Number(videoInfo.accelerate));
      }
  
      for (let i = 0; i < numVideos; i++) {
        const startTime = videosData[i].startTime;
        const duration = videosData[i].duration;
        startTimes.push(startTime);
        durations.push(duration);
      }
  
      const cutVideoPaths = await cutVideos(videoPaths, startTimes, durations, accelerateOptions);
  
      const combinedVideo = '../result/preview.mp4';
      await combineVideos(cutVideoPaths, combinedVideo);
  
      const resizedVideo = '../result/resultadoFinal.mp4';
      await resizeAndCropVideo(combinedVideo, resizedVideo);
  
      deleteIntermediateVideos([...cutVideoPaths]);
    } catch (err) {
      console.error('Erro geral:', err);
    } finally {
    }
  })();