const ffmpeg = require('fluent-ffmpeg');
const resizeAndCropVideo = (inputFilePath, outputFilePath) => {
    const outputWidth = 1080;
    const outputHeight = 1920;
    const aspectRatio = outputWidth / outputHeight;
  
    ffmpeg(inputFilePath)
      .size(`${outputWidth}x${outputHeight}`)
      .outputOptions('-vf', `crop=in_w*min(${aspectRatio}\\,in_h):in_h`)
      .output(outputFilePath)
      .on('end', () => console.log('Conversão concluída!'))
      .on('error', (err) => console.error('Erro durante a conversão: ', err.message))
      .run();
  };
module.exports = resizeAndCropVideo;