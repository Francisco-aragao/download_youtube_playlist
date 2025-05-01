const youtubedl = require('youtube-dl-exec');
const fs = require('fs');
const path = require('path');


  musics = [// insert musics here
    
    ]

    async function main() {
      for (const music of musics) {
        const output = path.join(__dirname, 'downloads', '%(title)s.%(ext)s');
        try {
          await youtubedl(music, {
            extractAudio: true,
            audioFormat: 'mp3',
            output,
          });
          console.log('Downloaded:', music);
        } catch (err) {
          console.error('Failed to download:', music, err.message);
        }
      }
    }
    
    main();