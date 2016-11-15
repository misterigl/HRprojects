// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  intitialize: function () {

  },
  play: function() {
    // Triggering an event here will also trigger the event on the collection
  
    this.trigger('play', this);
  },

  enqueue: function() {

    this.trigger('enqueue', this);
  },

  dequeue: function(context) {   

    this.trigger('dequeue', this);
    context.remove(context.at(0));
  },

  ended: function() {
    this.trigger('ended', this);

  }
});
