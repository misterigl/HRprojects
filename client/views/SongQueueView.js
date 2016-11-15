// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('change', this.model.play, this);
  },

  render: function() {
    return this.$el;
  }

});
