

const { Downloader } = require('ytdl-mp3');

async function main() {
  const downloader = new Downloader({
    getTags: false,
    verifyTags: false,
    outputDir: // outputDirectory 
  });

  musics = [// insert musics here
    ]

  for (music of musics) {
      await downloader.downloadSong(music);
      console.log('Downloaded:', music);
  }
}

main();