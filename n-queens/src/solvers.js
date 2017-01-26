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
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  if (n === 0 ) {
    return 1;
  }
  
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
    // if no conflict
      // if numRooks is equal to n
        // push board into solution array  
      //else call rookPlacer with board
  console.log('Number of solutions for ' + n + ' rooks:', sols);
  return sols;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 0 || n === 2 || n === 3 ) {
    board = new Board({n: n});
    return board.rows();
  }

  var board = new Board({n: n});
  var solutions = [];

  var queenPlacer = function(board, recI, recJ) {
    //go to each square in board ( 2x for loops)
    for (var i = recI; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (board.rows()[i][j] === 0) {
          board.togglePiece(i, j);
          var numQueens = countQueens(board);
          if (!board.hasAnyQueensConflicts()) {
            if (numQueens < n) {
              queenPlacer(board, i, j);
            } else {
              solutions = cloneBoard(board.rows());
              break;
            }
          }
          if (board.rows()[i][j] === 1) {
            board.togglePiece(i, j);
          }
        }
        if (solutions.length > 0) { break; }
      }
    }
  };

  var countQueens = function(board) {
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

  queenPlacer(board, 0, 0);
    // if no conflict
      // if numRooks is equal to n
        // push board into solution array  
      //else call rookPlacer with board

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutions));
  return solutions;

  // return solutionCount;


  // var start = 0;
  // var start2 = 0;
  // var board = new Board({n: n});  
  // while (countQueens(board) <= n) {
  //   for (var i = 0; i < n; i++) {
  //     for (var j = start; j < n; j++) {
  //       start = 0;
  //       console.log(i, j);
  //       board.togglePiece(i, j);
  //       // numQueens = countQueens(board);
  //       console.log(JSON.stringify(board.rows()));
  //       if (board.hasAnyQueensConflicts()) {
          
  //         board.togglePiece(i, j);
  //         // numQueens = countQueens(board);  

  //       } else {
  //         if (countQueens(board) === n) {
  //           console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  //           return board.rows();
  //         }
  //       }
  //     }
  //     // console.log('endToggle', JSON.stringify(board.rows()));
  //     // if (boardboard.togglePiece(i, j - 1);
  //     // console.log('endToggle', JSON.stringify(board.rows()));
  //     // numQueens = countQueens(board);
  //   }
  //   board = new Board({n: n});
  //   start2++;
  //   start = start2;
  // }

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 0 ) {
    return 1;
  }
  var board = new Board({n: n});
  var sols = 0;
  var solutions = [];

  var queenPlacer = function(board, recI, recJ) {
    //go to each square in board ( 2x for loops)
    for (var i = recI; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (board.rows()[i][j] === 0) {
          board.togglePiece(i, j);
          var numQueens = countQueens(board);
          if (!board.hasAnyQueensConflicts()) {
            if (numQueens < n) {
              queenPlacer(board, i, j);
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

  var countQueens = function(board) {
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

  queenPlacer(board, 0, 0);
    // if no conflict
      // if numRooks is equal to n
        // push board into solution array  
      //else call rookPlacer with board

  console.log('Number of solutions for ' + n + ' queens:', sols);
  return sols;

  // return solutionCount;
};
