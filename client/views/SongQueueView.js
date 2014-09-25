// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  events: {
    'dequeue': function(){
      console.log('dequeue on songcollection')
    }
  },

  render: function() {
    this.$el.html('<th>Song Queue</th>');
  }

});

// put play emitter
