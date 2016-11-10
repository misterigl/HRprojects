/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n, all) {
  var solution = [];
  var solutions = [];
  // var matrix = Array(n).fill(Array(n).fill(0));
  // var board = new Board(matrix);
  var board = new Board({n: n});
  var rows = board.rows();
  var numRooks = 1;

  var rookPlacer = function(board) {
    // debugger;
    //go to each square in board ( 2x for loops)
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(numRooks, i, j);
      // if empty place rook there
        if (board.rows()[i][j] === 0) {
          board.togglePiece(i, j);
        //check for conflicts
        //if conflict
          if (board.hasAnyRooksConflicts()) {
          //stop recursion
            board.togglePiece(i, j);
            continue;
          } else {
            if (numRooks === n) {
              solution = (board.rows());
              solutions.push(board.rows());
              console.log('solution found');
              board = new Board({n: n});
            } else {
              numRooks++;
              rookPlacer(board);
            }
          }
        }
      }
    }
  };

  rookPlacer(board);
    // if no conflict
      // if numRooks is equal to n
        // push board into solution array  
      //else call rookPlacer with board

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  if (all) {
    return solutions;
  }
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  
  var solutionCount = findNRooksSolution(n, true).length; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
