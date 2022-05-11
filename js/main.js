
class TicTacToeGame {
    constructor (playerOne, playerTwo) {
        this.board = {}
        this.won = false
        this.playerOne = playerOne
        this.playerTwo = playerTwo
        this.currentPlayer = playerOne
        this.winConditions = [
            // horizontals
            [ 0 , 1 , 2 ],
            [ 3 , 4 , 5 ],
            [ 6 , 7 , 8 ],
            // verticals
            [ 0 , 3 , 6 ],
            [ 1 , 4 , 7 ],
            [ 2 , 5 , 8 ],
            // diagonals
            [ 0 , 4 , 8],
            [ 2 , 4 , 6],
        ]
    }
    fillSquare( e ) {
        const id = e.target.id
        if ( !this.board.id ) {
            this.board[`${id}`] = this.currentPlayer
            let p = document.createElement( 'p' )
            p.textContent = this.currentPlayer
            p.classList.add('squareFilled')
            document.getElementById( id ).appendChild( p )
        }
        this.checkWin()
        this.switchPlayer()
    }
    switchPlayer() {
        return this.currentPlayer == this.playerOne 
        ? this.currentPlayer = this.playerTwo 
        : this.currentPlayer = this.playerOne
    }
    changeWinColor() {
        // wanting to change the streak of 3 winning letters to another color
    }
    checkWin() {
        if ( this.won == false ) {
            for ( i=0; i<this.winConditions.length; i++) {
                if ( this.board[this.winConditions[i][0]] == 'X' 
                    && this.board[this.winConditions[i][1]] == 'X'
                    && this.board[this.winConditions[i][2]] == 'X' ) {
                        this.won = true
                        // this.clearBoard()
                        alert('Player X wins!')
                    } else if ( this.board[this.winConditions[i][0]] == 'O' 
                    && this.board[this.winConditions[i][1]] == 'O'
                    && this.board[this.winConditions[i][2]] == 'O' ) {
                        this.won = true
                        // this.clearBoard()
                        alert('Player O wins!')
                    }
            }
        }
    }
    clearBoard() {
        this.board = {}
        for ( i=0; i<=8; i++ ) { 
            let parentDiv = document.getElementById(`${i}`)
            let childDiv = document.getElementsByClassName('squareFilled')
            parentDiv.removeChild(childDiv)
        }
    }
    hidePlayButton() {
        document.querySelector('#playButton').classList.add('hidden')
    }
    toggleGameBlur() {
        document.querySelector('.container').classList.toggle('blurred')
    }
    listenForSquarePlay() {
        let squares = document.querySelectorAll('.square')
        console.log(squares)
        // for (i=0; i<squares.length; i++) {
        //     squares[i].addEventListener('click', (e) => this.fillSquare(e))
        // }
        for (square of squares) {
            console.log(square)
        }
    }
}

document.querySelector('#playButton').addEventListener('click', playGame)

function playGame() {
    let game = new TicTacToeGame('X', 'O')
    game.hidePlayButton()
    game.toggleGameBlur()
    // game.listenForSquarePlay()
    let squares = document.querySelectorAll('.square')
    for (i=0; i<squares.length; i++)  {
        squares[i].addEventListener('click', (e) => game.fillSquare(e))
    }
}