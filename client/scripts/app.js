class App {
  constructor() {
    server: 'https://api.parse.com/1/classes/messages';
  }

  init() {

  }

  send(message) {
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
  }

  fetch() {
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
  }

  renderMessage(messageObj) {
    let username = `<p class='username'>${messageObj.username}</p>`;
    let message = `<p>${messageObj.text}</p>`;
    let messageContainer = `<div>${username}${message}</div>`;
    $('#chats').append(messageContainer);
  }

  clearMessages() {
    $('#chats').html('');
  }

  renderRoom(roomName) {
    $('#roomSelect').append(`<p>${roomName}</p>`);
  }

}

let app = new App;