// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function() {
    // this.on('change', this.render(), this);
    this.render();
  },

  render: function() {
    return this.$el;
  }
});
