// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  intitialize: function () {

  },
  play: function() {
    // Triggering an event here will also trigger the event on the collection
    // console.log('trigger PLAY');
    // // songQueue.collection.add({
    //   artist: 'data',
    //   url: '/test/testsong3.mp3',
    //   title: 'test song 3'
    // });
    // console.log(songQueue.collection);
    this.trigger('play', this);
  },

  enqueue: function() {
    console.log('trigger ENQUEUE');
    // if queue is 1, play()
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }
// 
});
