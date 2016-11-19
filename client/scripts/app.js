// YOUR CODE HERE:

var App = function() {
  this.rooms = {lobby: true, friends: true, all: true};
  this.messages = {};
  this.server = 'http://127.0.0.1:3000/classes/messages';
  this.friends = {};
};


App.prototype.init = function() {

};

App.prototype.send = function(message) {
  $.ajax({
    url: this.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
      app.clearMessages();
      app.fetch();
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

App.prototype.fetch = function() {
  $.ajax({
    url: this.server,
    type: 'GET', 
    success: function (data) {
      console.log('chatterbox: DATA GOT');
      console.log('data:', data);
      app.messages = {};
      for (var i = 0; i < data.results.length; i++) {
        app.messages[data.results[i].objectId] = data.results[i];
        app.rooms[data.results[i].roomname] = 1;
      }
      app.renderFetchedData();
    },
    error: function (data) {
      console.error('chatterbox: DATA NO GOT', data);
    }
  });
};

App.prototype.renderFetchedData = function() {
  console.log('renderFetched', this.messages);
  for (var key in this.messages) {
    this.renderMessage(this.messages[key]);
  }
  for (var index in this.rooms) {
    this.renderRoom(index);
  }

  var $users = $('.username');
  $users.on('click', function() {
    $user = $(this).text();
    app.handleUsernameClick($user);
  });

};

App.prototype.clearMessages = function() {
  $('#chats').children().remove();
};

App.prototype.renderMessage = function(message) {
  // this.send(message);
  var $messageDiv = $('<div class="message"></div>');
  var $messageHead = $('<div class="messageHead"></div>');
  var $userDiv = $('<div class="username"></div>');
  var $roomDiv = $('<div class="roomname"></div>');
  var $textDiv = $('<div class="messageText"></div>');
  var $timeDiv = $('<div class="messageTime"></div>');
  $userDiv.text('@' + message.username + ':');
  $roomDiv.text('#' + message.roomname);
  if (message.roomname) { $roomDiv.text('#' + message.roomname); } 
  else { $roomDiv.text('#'); }
  $textDiv.text(message.text);
  $timeDiv.text(this.parseTime(message.createdAt));
  $messageDiv.append($messageHead);
  $messageHead.append($userDiv);
  $messageHead.append($roomDiv);

  $messageDiv.append($textDiv);
  $messageDiv.append($timeDiv);
  $('#chats').append($messageDiv);
};




App.prototype.handleUsernameClick = function(user) {
  app.friends[$user] = true;

  $('.friendsContainer').empty(); 
  for (key in this.friends) {
    $('.friendsContainer').append('<h4><span class="ticker">&#9447</span>' + key + '</h4>');
  }

  $('.ticker').on('click', function() {
    var friend = $(this).parent().text();
    friend = friend.split('').splice(1).join('');

    delete app.friends[friend];
    $(this).parent().remove();


  });

};

App.prototype.renderRoom = function(room) {
  var $roomOption = $('<option value=' + '"' + room + '"' + '</option>');
  $roomOption.text(room.substring(0,20));
  $('#roomSelect').append($roomOption);
  // $roomOption.append(room.toString);
};

App.prototype.parseTime = function(time) {
  var displayTime = time.split(/[-T:.]/);
  var [year, month, day, hour, minute, second] = displayTime;
  var ampm = (hour > 11 && hour < 24) ? 'PM' : 'AM';
  var hour = hour > 12 ? hour - 12 : hour;
  var time = hour + ':' + minute + ampm;
  var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var result = months[month - 1] + ' ' + day + ', ' + year + ' ' + time;
  return result;
};

App.prototype.filterRooms = function(room) {
  $('#chats').empty();

  // if (room === 'friends') {
  //   for (var msg in this.messages) {
  //     if (_.contains(this.friends, this.messages[msg].username)) {
  //       this.renderMessage(this.messages[msg])
  //     }
  //   }
  // } else {
  for (var msg in this.messages) {
    if (this.messages[msg].roomname === room || room === 'all') {
      this.renderMessage(this.messages[msg]);
    }
  }

  var $users = $('.username');
  $users.on('click', function() {
    $user = $(this).text();
    app.handleUsernameClick($user);
  });
};


var app = new App;

// App.prototype.asyncWrapper = function(query, cb) {

//   cb(response)
// };



$(document).ready(function() {

  // Initialize page
  app.fetch();

  $('.submitBtn').on('click', function() {
    var message = {};
    message.username = window.location.search.split('=')[1];
    message.text = $('.postArea').val();
    message.roomname = $('#roomSelect').val();

    $('.postArea').val('');

    $(this).css('background-color', 'gray');
    $(this).prop('disabled', true);
    setTimeout(function() {
      $('.submitBtn').css('background-color', '#3F7EA6');
      $('.submitBtn').prop('disabled', false);
    }, 1000);


    app.send(message);

    app.renderMessage(message);

  });

  $('#roomSelect').on('change', function() {
    app.filterRooms($(this).val());
  });


});
