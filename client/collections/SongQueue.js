// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('play', function() {
      // set currentSong to model
      //this.playFirst();
    }, this);
    this.on('add', function() {
      // if this model is songQUeue[0],
      // set the current song to this song and play it.
      //console.log('songqueue changed');
    }, this);
    this.on('dequeue', function(){
      //removes this item from collection
      //console.log('songqueue item dequewed');
    }, this);
    this.on('ended', function(){
      //console.log('ended in songqueue');
      //calls dequeue on this item.
    }, this);
  },
  playFirst: function() {
    // sets currentSong to model
    //console.log(this);
    var song = this.at(0);
    console.log(song);
    song.play();
    //this.set('currentSong', this.models[0]);

  }

});
