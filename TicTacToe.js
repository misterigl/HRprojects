var player1 = true

function setPlayer(location) {
  var field = document.getElementById(location)
  field.innerText = player1 ? 'X' : 'O'
  player1 = !player1
  var textField = document.getElementById('textField')
  textField.innerText = player1 ? 'Player 1' : 'Player 2'
}
