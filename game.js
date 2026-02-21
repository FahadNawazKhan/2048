import readline from 'readline-sync';

// console.log(board);


function printBoard(board) {
    const cellWidth = 6;
    const line = "+------+------ +------+------+".replace(" ", "");

    console.log("+------+------+------+------+");

    for (let i = 0; i < 4; i++) {
        let row = "|";

        for (let j = 0; j < 4; j++) {
            let value = board[i][j] === 0 ? "." : board[i][j].toString();
            let spaces = cellWidth - value.length;

            let leftSpaces = Math.floor(spaces / 2);
            let rightSpaces = spaces - leftSpaces;

            for (let k = 0; k < leftSpaces; k++) row += " ";
            row += value;
            for (let k = 0; k < rightSpaces; k++) row += " ";

            row += "|";
        }

        console.log(row);
        console.log("+------+------+------+------+");
    }
}

// printBoard(board)


function addRandomTile(board) {
    let emptycell = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                emptycell.push([i, j])
            }
        }
    }

    if (emptycell.length == 0) {
        return
    }

    let randomindex = Math.floor(Math.random() * emptycell.length)
    let row = emptycell[randomindex][0]
    let col = emptycell[randomindex][1]

    board[row][col] = 2
}

// addRandomTile(board)
// console.log('----------');
// printBoard(board)

function shiftRowLeft(row) {
    let newrow = [0, 0, 0, 0]
    let position = 0

    for (let i = 0; i < 4; i++) {
        if (row[i] != 0) {
            newrow[position] = row[i]
            position++
        }
    }
    return newrow;
}


function mergeRows(row) {
    for (let i = 0; i < 3; i++) {
        if (row[i] != 0 && row[i] === row[i + 1]) {
            row[i] *= 2
            row[i + 1] = 0
        }
    }
    return row
}

function moveLeft(board) {
    let moved = false;

    for (let i = 0; i < 4; i++) {
        let original = board[i];
        let shifted = shiftRowLeft(original);
        let merged = mergeRows(shifted);
        let finalRow = shiftRowLeft(merged);

        for (let j = 0; j < 4; j++) {
            if (board[i][j] !== finalRow[j]) {
                moved = true;
            }
            board[i][j] = finalRow[j];
        }
    }

    return moved;
}

function reverserow(row) {
    let newrow = [0, 0, 0, 0]
    for (let i = 0; i < 4; i++) {
        newrow[i] = row[3 - i]
    }
    return newrow
}

function moveRight(board) {
    for (let i = 0; i < 4; i++) {
        board[i] = reverserow(board[i])
        board[i] = shiftRowLeft(board[i])
        board[i] = mergeRows(board[i])
        board[i] = shiftRowLeft(board[i])
        board[i] = reverserow(board[i])
    }

    return board;
}

function getColumn(board, colindex) {
    let column = [0, 0, 0, 0]

    for (let i = 0; i < 4; i++) {
        column[i] = board[i][colindex]
    }
    return column
}

function setColumn(board, colindex, column) {
    for (let i = 0; i < 4; i++) {
        board[i][colindex] = column[i]
    }
    return board
}

function moveUp(board) {
    for (let col = 0; col < 4; col++) {
        let column = getColumn(board, col)

        column = shiftRowLeft(column)
        column = mergeRows(column)
        column = shiftRowLeft(column)

        setColumn(board, col, column)
    }
    return board
}

function moveDown(board) {
    for (let col = 0; col < 4; col++) {
        let column = getColumn(board, col)

        column = reverserow(column)
        column = shiftRowLeft(column)
        column = mergeRows(column)
        column = shiftRowLeft(column)
        column = reverserow(column)

        setColumn(board, col, column)
    }
    return board
}

function isBoardFull(board) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false
            }
        }
    }
    return true
}

function canMergeHorizontally(board) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == board[i][j + 1]) {
                return true
            }
        }
    }
    return false
}

function canMergeVertically(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] == board[i + 1][j]) {
                return true
            }
        }
    }
    return false
}

function isGameOver(board) {
    if (!isBoardFull(board)) {
        return false
    }

    if (canMergeHorizontally(board)) {
        return false
    }

    if (canMergeVertically(board)) {
        return false
    }

    return true
}

while (true) {
    console.log(`

        ██████╗  ██████╗ ██╗  ██╗ █████╗ 
        ╚════██╗██╔═████╗██║  ██║██╔══██╗
        █████╔╝██║██╔██║███████║╚█████╔╝
        ██╔═══╝ ████╔╝██║╚════██║██╔══██╗
        ███████╗╚██████╔╝     ██║╚█████╔╝
        ╚══════╝ ╚═════╝      ╚═╝ ╚════╝

            2048 — Terminal Edition
            A Node.js CLI Game Project

------------------------------------------------
 Written in JavaScript | Runs in your terminal
------------------------------------------------

`);
    let choice = readline.questionInt(`1: START 0: EXIT \n`)
    if (choice !== 1) {
        break;
    }


    const board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];


    
    while (true) {
        console.clear();
        printBoard(board)
        let move = readline.question(`w a s d: `)

        if (isGameOver(board)) {
            console.log('GAME OVER');
            break;
        }

        let moved = false

        if (move == 'w') {
            moved = moveUp(board)

        }
        if (move == 'a') {
            moved = moveLeft(board)
        }
        if (move == 's') {
            moved = moveDown(board)


        }
        if (move == 'd') {
            moved = moveRight(board)

        }

        if (moved) {
            addRandomTile(board)
        }

    }
}