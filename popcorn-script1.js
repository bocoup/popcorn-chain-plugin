(function( global, doc ){

  document.addEventListener('DOMContentLoaded', function(){

    var p = Popcorn('#video')
      .volume(0)
      .play()
      .subtitle({
        start   : 0,
        end     : 4,
        target  : 'subtitles',
        text    : 'Chaining new Popcorn.js script...'
      })
      .subtitle({
        start   : 4,
        end     : 5,
        target  : 'subtitles',
        text    : '3'
      })
      .subtitle({
        start   : 5,
        end     : 6,
        target  : 'subtitles',
        text    : '2'
      })
      .subtitle({
        start   : 6,
        end     : 7,
        target  : 'subtitles',
        text    : '1'
      })
      .chain({
        start   : 4,
        end     : 8,
        video   : 'webm/power-rangers.webm',
        popcorn : 'popcorn-script2.js'
      })
    ;

  }, false);

})( window, document );

