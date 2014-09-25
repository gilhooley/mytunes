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
       //sconsole.log(this);
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('dequeue', function(model){
      //removes this item from collection
      //console.log(model);
      this.remove(model);
      console.log(this);
      console.log('I should be removed');
    }, this);
    this.on('ended', function(){
      //console.log(this);
      this.shift();
      //console.log(this);
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
