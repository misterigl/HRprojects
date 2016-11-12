class App {
  constructor() {
    this.server = 'https://api.parse.com/1/classes/messages';
    this.friends = [];
    this.currentRoom = 'lobby';
    this.roomList = { 'lobby': 0 };
    this.interval = 1000;
  }

  init() {
    $( '.username' ).on( 'click', function() {
      app.handleUsernameClick($( this ).text());
    });

    $( '#messageForm' ).submit(function( event ) {
      app.handleSubmit($('input:text').val());
      $('input:text').val('');
      event.preventDefault();
    });

    app.fetch();

  }

  intervalRefresh() {
    setTimeout(() => { app.fetch(); }, this.interval);
  }

  send(message) {
    $.ajax({
      url: this.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent', data);
        app.renderMessage(message, true);

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
      data: {'order': '-createdAt', 'group': this.currentRoom},
      success: function (data) {
        app.clearMessages();
        console.log('chatterbox: Messages received');
        for (let i = 0; i < data.results.length; i++) {
          app.renderMessage(data.results[i]);
        }
      },
      complete: function (data) {
        // Schedule the next
        app.intervalRefresh();
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });  
  }

  renderMessage(messageObj, prepend) {
    if (messageObj.username) {
      messageObj.username = messageObj.username.replace(/<(.*?)>/g, '<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>');
    }
    if (messageObj.text) {
      messageObj.text = messageObj.text.replace(/<(.*?)>/g, '<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>');
    }
    if (messageObj.createdAt === undefined) {
      messageObj.createdAt = 'now';
    }

    let username = `<p class='username'>${messageObj.username}</p>`;
    let timeCreated = `<p class='time'>${messageObj.createdAt}</p>`;
    let message = `<p>${messageObj.text}</p>`;
    let messageContainer = `<div class="messageContainer">${username}${timeCreated}${message}</div>`;
    if (prepend) {
      $('#chats').prepend(messageContainer);
    } else {
      $('#chats').append(messageContainer);
    }
    
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