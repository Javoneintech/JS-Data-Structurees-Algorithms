// Exercises
// All the code for the exercises can be found on GitHub.[2]

// Spiral Print
// Let's create an example problem with a matrix. Given a matrix, print the elements in a spiral order, like in Figure 5-5.

// Figure 5-5: Spiral print

// This looks like a daunting task at first. However, the problem can be broken down to five main components.

// Printing from left to right

// Printing from top to bottom

// Printing from right to left

// Printing from bottom to top

// Keeping a limit on these four operations

// In other words, keep four key variables that indicate the following:

// Top row

// Bottom row

// Left column

// Right column

// Each time one of the four print functions is successfully executed, simply increment one of the four variables. For example, after printing the top row, increment it by 1.

//  1   var M = [
//  2       [1, 2, 3, 4, 5],
//  3       [6, 7, 8, 9, 10],
//  4       [11, 12, 13, 14, 15],
//  5       [16, 17, 18, 19, 20]
//  6   ];
//  7   function spiralPrint(M) {
//  8       var topRow = 0,
//  9           leftCol = 0,
// 10           btmRow = M.length - 1,
// 11           rightCol = M[0].length - 1;
// 12
// 13       while (topRow < btmRow && leftCol < rightCol) {
// 14           for (var col = 0; col <= rightCol; col++) {
// 15               console.log(M[topRow][col]);
// 16           }
// 17           topRow++;
// 18           for (var row = topRow; row <= btmRow; row++) {
// 19               console.log(M[row][rightCol]);
// 20           }
// 21           rightCol--;
// 22           if (topRow <= btmRow) {
// 23               for (var col = rightCol; col >= 0; col--) {
// 24                   console.log(M[btmRow][col]);
// 25               }
// 26               btmRow--;
// 27           }
// 28           if (leftCol <= rightCol) {
// 29               for (var row = btmRow; row > topRow; row--) {
// 30                   console.log(M[row][leftCol]);
// 31               }
// 32               leftCol++;
// 33           }
// 34       }
// 35   }
// 36   spiralPrint(M);
// Time Complexity: O(mn)

// Space Complexity: O(1)

// Here, m is the number of rows, and n is the number of columns. Each item in the matrix is visited only once.


// Tic-Tac-Toe Check
// Given a matrix representing a tic-tac-toe board, determine whether someone won, whether it was a tie, or whether the game has not ended yet.[3]

// Here are some examples.

// Here, X won:

//          OX-
//          -XO
//          OX
// Here it is as a matrix: [['O', 'X', '-'], ['-' ,'X', 'O'], ['O', 'X', '-']].

// Here, O won:

//         O-X
//         -O-
//         -XO
// Here it is as a matrix: [['O','-','X'], ['-','O','-'], ['-','X','O']].

// To do this, check all three rows using a for loop, check all columns using a for loop, and check diagonals.

//  1   function checkRow ( rowArr, letter ) {
//  2       for ( var i=0; i < 3; i++) {
//  3           if (rowArr[i]!=letter) {
//  4               return false;
//  5           }
//  6       }
//  7       return true;
//  8   }
//  9
// 10   function checkColumn ( gameBoardMatrix, columnIndex, letter ) {
// 11       for ( var i=0; i < 3; i++) {
// 12           if (gameBoardMatrix[i][columnIndex]!=letter) {
// 13               return false;
// 14           }
// 15       }
// 16       return true;
// 17   }
// 18
// 19   function ticTacToeWinner ( gameBoardMatrix, letter) {
// 20
// 21       // Check rows
// 22       var rowWin = checkRow(gameBoardMatrix[0], letter)
// 23       || checkRow(gameBoardMatrix[1], letter)
// 24       || checkRow(gameBoardMatrix[2], letter);
// 25
// 26       var colWin = checkColumn(gameBoardMatrix, 0, letter)
// 27       || checkColumn(gameBoardMatrix, 1, letter)
// 28       || checkColumn(gameBoardMatrix, 2, letter);
// 29
// 30       var diagonalWinLeftToRight = (gameBoardMatrix[0][0]==letter &&
//          gameBoardMatrix[1][1]==letter && gameBoardMatrix[2][2]==letter);
// 31       var diagonalWinRightToLeft = (gameBoardMatrix[0][2]==letter &&
//          gameBoardMatr ix[1][1]==letter && gameBoardMatrix[2][0]==letter);
// 32
// 33       return rowWin || colWin || diagonalWinLeftToRight || diagonalWinRightToLeft;
// 34   }
// 35 
// 36   var board = [['O','-','X'],['-','O','-'],['-','X','O']];
// 37   ticTacToeWinner(board, 'X'); // false
// 38   ticTacToeWinner(board, 'O'); // true
// Path Finding
// In Figure 5-6, given the location x, find the exit e.

// Figure 5-6: Finding a path

// \n is the set of characters used to break a line in JavaScript, like in many standard programming languages. Combining it with backticks, you can create line breaks during the variable-to-string assignment.

// 1   var board =
// 2   `%e%%%%%%%%%\n
// 3   %...%.%...%\n
// 4   %.%.%.%.%%%\n
// 5   %.%.......%\n
// 6   %.%%%%.%%.%\n
// 7   %.%.....%.%\n
// 8   %%%%%%%%%x%`;

// var rows = board.split("\n")
// Then use .map over the array to divide by certain characters into each column.

// function generateColumnArr (arr) {
//     return arr.split("");
// }
// var mazeMatrix = rows.map(generateColumnArr);
// This will generate the proper matrix where each row is an array of the characters and the board is the array of those rows.

// Now, first find the entrance, e, and exit, x. This function will return the row position, i, and the column position, j, of the character to be searched for:

// 1 function  findChar(char , mazeMatrix) {
// 2                 var  row =  mazeMatrix.length,
// 3                        column =  mazeMatrix[0 ].length;
// 4
// 5                 for  (var  i = 0 ; i <  row; i++ ) {
// 6                               for  (var  j = 0 ; j <  column; j++ ) {
// 7                                                    if  (mazeMatrix[i][j] ==
//                                                      char ) {
// 8                                                    return  [i, j];
// 9                                            }
// 10                             }
// 11         }
// 12  }
// Of course, there also needs to be a function to print the matrix nicely as a string, as shown here:

//  1 function  printMatrix(matrix) {
//  2                var  mazePrintStr = "" ,
//  3                       row =  matrix.length,
//  4                       column =  matrix[0 ].length;
//  5
//  6                for  (var  i = 0 ; i <  row; i++ ) {
//  7
//  8                               for  (var  j = 0 ; j <  column; j++ ) {
//  9                                             mazePrintStr +=  mazeMatrix[i][j];
// 10                            }
// 11
// 12                            mazePrintStr += "\n" ;
// 13
// 14         }
// 15         console.log(mazePrintStr);
// 16  }
// Finally, define a function called path. This recursively checks up, right, down, and left.

//          Up:      path(x+1,y)
//          Right:   path(x,y+1)
//          Down:    path(x-1,y)
//          Left:    path(x,y-1)
// function mazePathFinder(mazeMatrix) {
//     var row = mazeMatrix.length,
//         column = mazeMatrix[0].length,
//         startPos = findChar('e', mazeMatrix),
//         endPos = findChar('x', mazeMatrix);
//     path(startPos[0], startPos[1]);
//     function path(x, y) {
//         if (x > row - 1 || y > column - 1 || x < 0 || y < 0) {
//             return false;
//         }
//         // Found
//         if (x == endPos[0] && y == endPos[1]) {
//             return true;
//         }
//         if (mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == '+') {
//             return false;
//         }
//         // Mark the current spot
//         mazeMatrix[x][y] = '+';
//         printMatrix(mazeMatrix);
//         if (path(x, y - 1) || path(x + 1, y) || path(x, y + 1) || path(x - 1, y)) {
//             return true;
//         }
//         mazeMatrix[x][y] = '.';
//         return false;
//     }
// }
// Figure 5-7 shows the console output

// Figure 5-7: Console output

// Time Complexity: O(mn)

// Space Complexity: O(1)

// Here, m is the row length, and n is the column length. Each element is visited only once.

// Matrix Rotation
// Rotate a matrix to the left by 90 degrees.

// For example, the following:

//     101
//     001
//     111
// rotates to this:

//     111
//     001
//     101
// Figure 5-8 shows the rotation.

// Figure 5-8: Matrix counterclockwise rotation

// As shown in Figure 5-8, when rotated 90 degrees left, the following happens:

// The third column of the matrix becomes the first row of the result.

// The second column of the matrix becomes the second row of the result.

// The first column of the matrix becomes the third row of the result.

// The following rotation turns the third column of the original:

//  1   var matrix = [[1,0,1],[0,0,1],[1,1,1]];
//  2
//  3
//  4   function rotateMatrix90Left (mat){
//  5       var N = mat.length;
//  6
//  7       // Consider all squares one by one
//  8       for (var x = 0; x < N / 2; x++) {
//  9           // Consider elements in group of 4 in
// 10           // current square
// 11           for (var y = x; y < N-x-1; y++) {
// 12               // store current cell in temp variable
// 13               var temp = mat[x][y];
// 14
// 15               // move values from right to top
// 16               mat[x][y] = mat[y][N-1-x];
// 17
// 18               // move values from bottom to right
// 19               mat[y][N-1-x] = mat[N-1-x][N-1-y];
// 20
// 21               // move values from left to bottom
// 22               mat[N-1-x][N-1-y] = mat[N-1-y][x];
// 23
// 24               // assign temp to left
// 25               mat[N-1-y][x] = temp;
// 26           }
// 27       }
// 28   }
// 29  rotateMatrix90Left(matrix);
// 30   console.log(matrix); // [[1,1,1],[0,0,1],[1,0,1]]
// Time Complexity: O(mn)

// Space Complexity: O(1)

// Here, m is the row length, and n is the column length. Each element is visited only once. The space complexity is O(1) because the original array is modified instead of creating a new array.