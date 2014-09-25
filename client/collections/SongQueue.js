// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.on('play', function() {
    //   // set currentSong to model
    //   //this.playFirst();
    // }, this);
    this.on('add', function() {
      // if this model is songQUeue[0],
      // set the current song to this song and play it.
      //console.log('songqueue changed');
      console.log(this);
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('dequeue', function(){
      //removes this item from collection
      this.remove();
    }, this);
    this.on('ended', function(){
      console.log(this);
      this.shift();
      console.log(this);
      if (this.length > 0) {
        this.playFirst();

      }
    }, this);
  },
  playFirst: function() {
    var song = this.at(0);
    song.play();
  }

});
