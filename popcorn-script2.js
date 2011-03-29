(function( global, doc ){

  var p = Popcorn('#video')
    .volume(0)
    .play()
    .subtitle({
      start   : 0,
      end     : 4,
      target  : 'subtitles',
      text    : 'Popcorn.js chaining sucessful!'
    })
    .subtitle({
      start   : 4,
      end     : 8,
      target  : 'subtitles',
      text    : 'You are now watching a different Popcorn script.'
    })
    .subtitle({
      start   : 8,
      end     : 12,
      target  : 'subtitles',
      text    : 'A new video has also been loaded. :)'
    })
    .subtitle({
      start   : 12,
      end     : 16,
      target  : 'subtitles',
      text    : 'Please allow for adequate pre-load time.'
    })
  ;

})( window, document );

