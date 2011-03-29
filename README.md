Popcorn Chain Plugin
====================

Example:

    var p = Popcorn('#video')
      .chain({
        start   : 4,                      // Preloads new video file
        end     : 8,                      // Plays new video, loads new popcorn data, replaces old events with new events
        video   : 'my-video.webm',        // The url of the next video file to be loaded
        popcorn : 'my-popcorn-script.js'  // The url of the next Popcorn Script to be loaded
      })

Demo: [http://code.bocoup.com/popcorn.js/chain-plugin-demo/popcorn.chain.html](http://code.bocoup.com/popcorn.js/chain-plugin-demo/popcorn.chain.html)

