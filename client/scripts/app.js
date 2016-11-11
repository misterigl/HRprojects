var app = {
  server: 'https://api.parse.com/1/classes/messages',

  init: function() {

  },

  send: function(message) {
    $.ajax({
      url: app.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  fetch: function() {
    $.ajax({
      type: 'GET',
      url: app.server,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Messages received');
        renderMessage(data.results[0]);
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });  
  },

  renderMessage: function(messageObj) {
    var message = `<p>${messageObj.username} says ${messageObj.text}</p>`;
    $('#chats').append(message);
  },

  clearMessages: function() {
    $('#chats').html('');
  },

  renderRoom: function(roomName) {
    $('#roomSelect').append(`<p>${roomName}</p>`);
  }

};
