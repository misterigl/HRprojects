// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    this.on('add', this.enqueue, this);

    this.on('ended', function () {
      this.at(0).dequeue(this);
    });

    this.on('dequeue', this.dequeue, this);
   

  },

  playFirst: function(song) {
    if (!song) {
      this.models[0].play();
    } else {
      song.play();
    }

  }, 

  dequeue: function(song) {
    // console.log(this, event);
    this.remove(song);
    if (this.length > 0) {
      this.playFirst(song);
    }
  },

  enqueue: function(song) {
    // console.log(event.length);
    if (this.length === 1) {
      this.playFirst(song);
    }
  }
 
});