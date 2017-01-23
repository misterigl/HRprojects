var player1 = true
var fieldArray = [[],[],[]]

function setPlayer(location) {
  var field = document.getElementById(location)
  field.innerText = player1 ? 'X' : 'O'
  player1 = !player1
  var textField = document.getElementById('textField')
  textField.innerText = player1 ? 'Player 1' : 'Player 2'

  switch (location) {
  case 'left-top':
    fieldArray[0][0] = player1 ? 'X' : 'O'
    break;
  case 'middle-top':
    fieldArray[0][1] = player1 ? 'X' : 'O'
    break;
  case 'right-top':
    fieldArray[0][2] = player1 ? 'X' : 'O'
    break;
  case 'left-middle':
    fieldArray[1][0] = player1 ? 'X' : 'O'
    break;
  case 'middle-middle':
    fieldArray[1][1] = player1 ? 'X' : 'O'
    break;
  case 'right-middle':
    fieldArray[1][2] = player1 ? 'X' : 'O'
    break;
  case 'left-bottom':
    fieldArray[2][0] = player1 ? 'X' : 'O'
    break;
  case 'middle-bottom':
    fieldArray[2][1] = player1 ? 'X' : 'O'
    break;
  case 'right-bottom':
    fieldArray[2][2] = player1 ? 'X' : 'O'
    break;
  default:
    //Statements executed when none of the values match the value of the expression
    break;
  }
  console.log(fieldArray);
}
