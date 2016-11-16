// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add remove', this.render, this);
    // this.collection.on('change', this.model.play, this);
    this.render();
  },

  render: function() {
    for (var i = 0; i < this.collection.length; i++) {
      this.collection[i] = new SongQueueEntryView(this.collection.models[i]);
      // this.collection.at(i).render();
    }



    return this.$el;
  }

});
