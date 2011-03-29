// PLUGIN: CHAIN

(function (Popcorn) {

  /**
   * Chain popcorn plug-in
   * Loads new video & Popcorn script in-place of current video & script
   * Options parameter will need a start, end, video url & popcorn-script url
   * Start is the time that you want this plug-in to begin pre-loading the new video content
   * End is the time that you want this plug-in to flush the old Popcorn events and start playing the new video
   * Video is the url of the new video file
   * Popcorn is the url of the new popcorn script
   *
   * @param {Object} options
   *
   * Example:
     var p = Popcorn('#video')
        .chain({
          start   : 4,                      // Preloads new video file
          end     : 8,                      // Plays new video, loads new popcorn data, replaces old events with new events
          video   : 'my-video.webm',        // The url of the next video file to be loaded
          popcorn : 'my-popcorn-script.js'  // The url of the next Popcorn Script to be loaded
        } )
   *
   */
  Popcorn.plugin( "chain", {

      manifest: {
        about:{
          name    : "Popcorn Chain Plugin",
          version : "0.1",
          author  : "Alistair MacDonald (@F1LT3R)",
          website : "http://bocoup.com/"
        },
        options:{
          start   : {elem: 'input', type: 'number', label: 'In (pre-load)' },
          end     : {elem: 'input', type: 'number', label: 'Out (play)'    },
          video   : {elem: 'input', type: 'text'  , label: 'Next Video'    },
          popcorn : {elem: 'input', type: 'text'  , label: 'Next Popcorn'  }
        }
      },

      _setup: function( options ) {
      },

      // Start acts as a pre-loader for the new script and video
      start: function( event, options ) {
        this.next = { video : document.createElement('VIDEO') };
        this.next.video.src = options.video;
      },

      // End acts like hitting "play" on the new video file
      end: function( event, options ) {
        this.next.video.play();
        var parentNode = this.video.parentNode;
        parentNode.removeChild( this.video );
        this.next.video.setAttribute('id', this.video.getAttribute('id'));
        parentNode.appendChild( this.next.video );

        this.video = this.next.video; // I think we might be able to get away with removing this.

        // Flush the previous Popcorn event list
        var eventsByStart = this.data.trackEvents.byStart;
        for(var i=1, l=eventsByStart.length-1; i< l; i++){
          var event = eventsByStart[i],
              id    = event._id
          ;
          if( id ){
            //event.natives.end(); // I think perhaps these things should ideally be closed before they are removed from the time-line. --F1lT3R
            Popcorn.removeTrackEvent( this, id );
          }
        }

        // Now the event list is cleared, load new events
        Popcorn.getScript( options.popcorn );
      }

  });

})( Popcorn );

