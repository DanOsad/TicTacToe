
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
            for ( let i=0; i<this.winConditions.length; i++) {
                if ( this.board[this.winConditions[i][0]] == 'X' 
                    && this.board[this.winConditions[i][1]] == 'X'
                    && this.board[this.winConditions[i][2]] == 'X' ) {
                        this.won = true
                        this.clearBoard()
                        alert('Player X wins!')
                    } else if ( this.board[this.winConditions[i][0]] == 'O' 
                    && this.board[this.winConditions[i][1]] == 'O'
                    && this.board[this.winConditions[i][2]] == 'O' ) {
                        this.won = true
                        this.clearBoard()
                        alert('Player O wins!')
                    }
            }
        }
    }
    clearBoard() {
        // NEED TO WORK ON RESETTING THE GAME
        // console.log(this.board)
        this.board = {}
        // console.log(this.board)
        let nodeList = document.querySelectorAll('p')
        nodeList.forEach( element => element.remove() )
        // this.toggleGameBlur()
        // this.showPlayButton()
    }
    showPlayButton() {
        document.querySelector('#playButton').classList.remove('hidden')
    }
    hidePlayButton() {
        document.querySelector('#playButton').classList.add('hidden')
    }
    toggleGameBlur() {
        document.querySelector('.container').classList.toggle('blurred')
    }
    listenForSquarePlay() {
        let squares = document.querySelectorAll('.square')
        squares.forEach(square => square.addEventListener('click', (e) => this.fillSquare(e)))
    }
    lightMode() {
        document.querySelector('#lightMode').classList.add('hidden')
        document.querySelector('#darkMode').classList.remove('hidden')
        document.querySelector(':root').style.setProperty('--main-bg-color', 'white')
        document.querySelector(':root').style.setProperty('--secondary-color', 'black')
    }
    darkMode() {
        document.querySelector('#darkMode').classList.add('hidden')
        document.querySelector('#lightMode').classList.remove('hidden')
        document.querySelector(':root').style.setProperty('--main-bg-color', 'black')
        document.querySelector(':root').style.setProperty('--secondary-color', 'white')
    }
    toggleLightMode() {
        document.querySelector('#lightMode').addEventListener('click', this.lightMode)
        document.querySelector('#darkMode').addEventListener('click', this.darkMode)
    }
    showLightDarkButton() {
        document.querySelector('#lightDarkMode').style.setProperty('display', 'block')
    }
}

// MAIN GAME FUNCTION
document.querySelector('#playButton').addEventListener('click', playGame)

function playGame() {
    let game = new TicTacToeGame('X', 'O')
    game.showLightDarkButton()
    game.toggleLightMode()
    game.hidePlayButton()
    game.toggleGameBlur()
    game.listenForSquarePlay()
}