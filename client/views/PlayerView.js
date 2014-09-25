// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
  },
  events: {
    // comes from the DOM
    'ended': function(){
      // console.log("audio element emits 'done'");
      this.model.ended();
      // console.log(this.model.collection);
      //console.log(this.model);
      //songqueue.playFirst();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },



  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
