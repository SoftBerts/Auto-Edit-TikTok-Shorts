const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');

const getVideoInfo = async (url) => {
  try {
    const videoInfo = await ytdl.getInfo(url);
    console.log(`Título do vídeo: ${videoInfo.videoDetails.title}`);
    return videoInfo;
  } catch (err) {
    console.error('Erro ao obter informações do vídeo:', err);
    throw err;
  }
};

const downloadVideoFromUrl = async (url) => {
  try {
    const videoInfo = await getVideoInfo(url);
    const videoTitle = videoInfo.videoDetails.title.replace(/[/\\?%*:|"<>]/g, '');
    const videoPath = path.join(__dirname, '..', '..', 'temp_files', `${videoTitle}.mp4`); // Caminho para a pasta 'temp_files'
    
    let formatDownload = videoInfo.formats.find(
      (format) => format.hasVideo && format.hasAudio && format.width === 1280 && format.height === 720
    );

    const videoStream = ytdl.downloadFromInfo(videoInfo, { quality: 'highest', format: formatDownload });
    const fileStream = fs.createWriteStream(videoPath);

    await new Promise((resolve, reject) => {
      videoStream.pipe(fileStream);

      fileStream.on('finish', () => {
        console.log(`Vídeo baixado: ${videoPath}`);
        resolve(videoPath);
      });

      fileStream.on('error', (err) => {
        console.error('Erro ao gravar o vídeo:', err);
        reject(err);
      });
    });

    return videoPath;
  } catch (err) {
    console.error('Erro ao baixar o vídeo:', err);
    throw err;
  }
};

module.exports = downloadVideoFromUrl;
