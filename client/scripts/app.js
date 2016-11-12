class App {
  constructor() {
    this.server = 'https://api.parse.com/1/classes/messages';
    this.friends = [];
    this.currentRoom = 'lobby';
    this.roomList = { 'lobby': 0 };
  }

  init() {
    $( '.username' ).on( 'click', function() {
      app.handleUsernameClick($( this ).text());
    });

    $( '#messageForm' ).submit(function( event ) {
      app.handleSubmit($('input:text').val());
      event.preventDefault();
    });
  }

  send(message) {
    $.ajax({
      url: this.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent', data);
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }

  fetch() {
    $.ajax({
      type: 'GET',
      url: this.server,
      contentType: 'application/json',
      data: {'order': '-createdAt'},
      success: function (data) {
        app.clearMessages();
        console.log('chatterbox: Messages received');
        for (let i = data.results.length - 1; i >= 0; i--) {
          app.renderMessage(data.results[i]);
        }
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });  
  }

  renderMessage(messageObj) {
    let username = `<p class='username'>${messageObj.username}</p>`;
    let timeCreated = `<p class='time'>${messageObj.createdAt}</p>`;
    let message = `<p>${messageObj.text}</p>`;
    let messageContainer = `<div class="messageContainer">${username}${timeCreated}${message}</div>`;
    $('#chats').append(messageContainer);
  }

  clearMessages() {
    $('#chats').html('');
  }

  renderRoom(roomName) {
    $('#roomSelect').append(`<p>${roomName}</p>`);
  }

  handleUsernameClick(userName) {
    console.log(userName);
  }

  handleSubmit(message) {
    let messageObj = {
      username: (window.location.search).slice(10),
      text: message,
      roomname: app.currentRoom
    };
    app.send(messageObj);
  }
}

let app = new App;
app.init();