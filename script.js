let gameEnded = new Boolean(false);
let currentPlayer = 0;
const gameSquares = document.getElementsByClassName('gameSquare');

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
      alert('game won by player ' + (currentPlayer % 2 === 1 ? 'x' : 'o'));
      gameEnded = true;
    }, 200);
  }
  else if (
    gameSquares[0].innerHTML !== "" && gameSquares[1].innerHTML !== "" && gameSquares[2].innerHTML !== "" && gameSquares[3].innerHTML !== "" && gameSquares[4].innerHTML !== "" && gameSquares[5].innerHTML !== "" && gameSquares[6].innerHTML !== "" && gameSquares[7].innerHTML !== "" && gameSquares[8].innerHTML !== ""
  ) {
    setTimeout(function() {
    alert('draw');
      gameEnded = true;
    }, 200);
  }
}

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

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    for (let i = 0; i < gameSquares.length; i++) {
      gameSquares[i].innerHTML = "";
    }
    currentPlayer = 0;
  }
});
