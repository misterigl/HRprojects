// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(event) {
      if (this.length === 1) {
        this.playFirst(event);
      }
    });

    this.on('ended', function () {
      this.models[0].dequeue(this);
    });

    this.on('dequeue', function() {
      if (this.length > 1) {
        this.playFirst(this.model[0]);
      }
    });
   

  },

  playFirst: function() {

  }

});