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
  var board = new Board({n: n});

  for (var i = 0; i < n; i++) {
    board.togglePiece(i, i);
  }

  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  
  var board = new Board({n: n});
  var sols = 0;
  var solutions = [];

  var rookPlacer = function(board, recI, recJ) {
    //go to each square in board ( 2x for loops)
    for (var i = recI; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (board.rows()[i][j] === 0) {
          board.togglePiece(i, j);
          var numRooks = countRooks(board);
          if (!board.hasAnyRooksConflicts()) {
            if (numRooks < n) {
              rookPlacer(board, i, j);
            } else {
              sols++;
              // console.log(board.rows()[0], board.rows()[1], board.rows()[2]);
              // solutions.push(cloneBoard(board.rows()));
            }
          }
          if (board.rows()[i][j] === 1) {
            board.togglePiece(i, j);
          }
        }
      }
    }
  };

  var countRooks = function(board) {
    var rows = board.rows();
    var count = 0;
    for (var i = 0; i < rows.length; i++) {
      for (var j = 0; j < rows[i].length; j++) {
        count += rows[i][j];
      }
    }
    return count;
  };

  var cloneBoard = function(rows) {
    if (_.isArray(rows)) {
      return _.map(rows, cloneBoard);  
    } else {
      return rows;
    }
  };

  rookPlacer(board, 0, 0);
  console.log(solutions);
    // if no conflict
      // if numRooks is equal to n
        // push board into solution array  
      //else call rookPlacer with board

  return sols;
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
