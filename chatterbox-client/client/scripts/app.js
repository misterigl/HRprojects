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

    $('body').on('click', '.dropdown-menu li > .roomSelectorName', function(event) {
      app.currentRoom = $(this).text();
      $('#roomButton').html(app.currentRoom);
    });
    $('body').on('click', '.messageContainer .username', function() {
      app.friends.push($(this).text());
      console.log($(this).text(), 'added to friends list');
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
        for (let i = 0; i < data.results.length; i++) {
          if (data.results[i].roomname === app.currentRoom) {
            app.renderMessage(data.results[i]); 
          }
          if (app.roomList[data.results[i].roomname] === undefined) {
            app.roomList[data.results[i].roomname] = 1;
          } else {
            app.roomList[data.results[i].roomname]++;
          }
        }
        for (var room in app.roomList) {
          app.renderRoom(room, app.roomList[room]);
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
    } else {
      messageObj.createdAt = new Date(messageObj.createdAt);
    }
    let username = '';
    if (app.friends.includes(messageObj.username)) {
      username = `<p class='username' style='font-weight:bold;' >${messageObj.username}</p>`;
    } else {
      username = `<p class='username'>${messageObj.username}</p>`;
    }
    let timeCreated = `<p class='time'>${messageObj.createdAt}</p>`;
    let message = `<p>${messageObj.text}</p>`;
    let messageContainer = `<div class="messageContainer ${messageObj.roomname}">${username}${timeCreated}${message}</div>`;
    if (prepend) {
      $('#chats').prepend(messageContainer);
    } else {
      $('#chats').append(messageContainer);
    }
    
  }

  clearMessages() {
    $('#chats').html('');
    app.roomList = {};
    $('#roomSelect').html('').append('<li>Lobby</li><li role="separator" class="divider"></li>');
  }

  renderRoom(roomName, messageCount) {
    $('#roomSelect').append(`<li class="roomSelector"><span class="roomSelectorName">${roomName}</span> (${messageCount})</li>`);
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