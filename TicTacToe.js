var player1 = true
var fieldArray = [[0,0,0],[0,0,0],[0,0,0]]

function setPlayer(location) {
  var field = document.getElementById(location)
  field.innerText = player1 ? 'X' : 'O'
  player1 = !player1
  var textField = document.getElementById('textField')
  textField.innerText = player1 ? 'Player 1' : 'Player 2'

  switch (location) {
  case 'left-top':
    fieldArray[0][0] = player1 ? -1 : 1
    break
  case 'middle-top':
    fieldArray[0][1] = player1 ? -1 : 1
    break
  case 'right-top':
    fieldArray[0][2] = player1 ? -1 : 1
    break
  case 'left-middle':
    fieldArray[1][0] = player1 ? -1 : 1
    break
  case 'middle-middle':
    fieldArray[1][1] = player1 ? -1 : 1
    break
  case 'right-middle':
    fieldArray[1][2] = player1 ? -1 : 1
    break
  case 'left-bottom':
    fieldArray[2][0] = player1 ? -1 : 1
    break
  case 'middle-bottom':
    fieldArray[2][1] = player1 ? -1 : 1
    break
  case 'right-bottom':
    fieldArray[2][2] = player1 ? -1 : 1
    break
  default:
    //Statements executed when none of the values match the value of the expression
    break
  }
  console.log(fieldArray, (fieldArray[0][0] + fieldArray[0][1] + fieldArray[0][2]))

  // win conditions
  if (fieldArray[0][0] + fieldArray[0][1] + fieldArray[0][2] === 3 ) {
    textField.innerText = 'Player 1 won'
  }
  // plenty more to come, a loop probably would be better, or recursion
  // for (var i = 0; i < fieldArray.length; i++) {
  //   for (var j = 0; j < fieldArray.length; j++) {
  //     fieldArray[i]
  //   }
  // }
}
