const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

console.log(board);


function printBoard(board) {
    for (let i = 0; i < 4; i++) {
        let line = "";

        for (let j = 0; j < 4; j++) {
            line = line + board[i][j] + " ";
        }

        console.log(line);
    }
}
printBoard(board)
