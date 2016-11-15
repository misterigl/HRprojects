// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(event) {
      console.log(event, 'listener', this);
      if (this.length === 1) {
        this.playFirst(event);
      }
    });
    // this.collection.on('change', function(event) {
    //   console.log(event, 'listener collection');
    // });
    // this.model.on('change', function(event) {
    //   console.log(event, 'listener model');
    // });
    // console.log(this, 'initialize');
  },

  playFirst: function() {
    console.log('playFirst');

  }

});