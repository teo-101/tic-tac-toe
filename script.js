let gameEnded = new Boolean(false);
let currentPlayer = 0;
const gameSquares = document.getElementsByClassName('gameSquare');

// Checks for every turn if game ended
function checkWin() {
  if (
    // Check rows
    (gameSquares[0].innerHTML !== "" && gameSquares[0].innerHTML === gameSquares[1].innerHTML && gameSquares[1].innerHTML === gameSquares[2].innerHTML) ||
    (gameSquares[3].innerHTML !== "" && gameSquares[3].innerHTML === gameSquares[4].innerHTML && gameSquares[4].innerHTML === gameSquares[5].innerHTML) ||
    (gameSquares[6].innerHTML !== "" && gameSquares[6].innerHTML === gameSquares[7].innerHTML && gameSquares[7].innerHTML === gameSquares[8].innerHTML) ||
    // Check columns
    (gameSquares[0].innerHTML !== "" && gameSquares[0].innerHTML === gameSquares[3].innerHTML && gameSquares[3].innerHTML === gameSquares[6].innerHTML) ||
    (gameSquares[1].innerHTML !== "" && gameSquares[1].innerHTML === gameSquares[4].innerHTML && gameSquares[4].innerHTML === gameSquares[7].innerHTML) ||
    (gameSquares[2].innerHTML !== "" && gameSquares[2].innerHTML === gameSquares[5].innerHTML && gameSquares[5].innerHTML === gameSquares[8].innerHTML) ||
    // Check diagonals
    (gameSquares[0].innerHTML !== "" && gameSquares[0].innerHTML === gameSquares[4].innerHTML && gameSquares[4].innerHTML === gameSquares[8].innerHTML) ||
    (gameSquares[2].innerHTML !== "" && gameSquares[2].innerHTML === gameSquares[4].innerHTML && gameSquares[4].innerHTML === gameSquares[6].innerHTML)
  ) {
    setTimeout(function() {
      alert('Player ' + (currentPlayer % 2 === 1 ? 'x' : 'o') + ' won the game!');
      gameEnded = true;
    }, 200);
  }
  else if ( // Draw
    gameSquares[0].innerHTML !== "" && gameSquares[1].innerHTML !== "" && gameSquares[2].innerHTML !== "" && gameSquares[3].innerHTML !== "" && gameSquares[4].innerHTML !== "" && gameSquares[5].innerHTML !== "" && gameSquares[6].innerHTML !== "" && gameSquares[7].innerHTML !== "" && gameSquares[8].innerHTML !== ""
  ) {
    setTimeout(function() {
    alert('Game ended as a DRAW!');
      gameEnded = true;
    }, 200);
  }
}

// Set current player
function boxSet(box) {
  if (box.innerHTML === "") {
    if (currentPlayer % 2 == 0) {
      box.innerHTML = "x";
      currentPlayer++;
    }
    else {
      box.innerHTML = "o";
      currentPlayer++;
    }
    checkWin();
  }
}

// Game restart 'Space'
document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    for (let i = 0; i < gameSquares.length; i++) {
      gameSquares[i].innerHTML = "";
    }
    currentPlayer = 0;
  }
});
