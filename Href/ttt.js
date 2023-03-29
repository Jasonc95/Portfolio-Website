const board = document.getElementById('board');
const status = document.getElementById('gameStatus');
const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleMove(event) {
  const cell = event.target;
  const cellIndex = parseInt(cell.getAttribute('data-cell'));
  if (cell.textContent !== '') {
    return;
  }

  cell.textContent = currentPlayer;
  if (checkWin()) {
    status.textContent = `${currentPlayer} wins!`;
    setTimeout(() => reset(), 4000);
    return;
  }

  if (checkDraw()) {
    status.textContent = 'Draw!';
    setTimeout(() => reset(), 4000);
    return;
  }

  currentPlayer = 'O';
  status.textContent = `It's ${currentPlayer}'s turn`;

  // simulate computer's move after a short delay
  setTimeout(() => {
    const emptySquares = [...squares].filter(square => square.textContent === '');
    const computerMove = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    computerMove.textContent = currentPlayer;
    if (checkWin()) {
      status.textContent = `${currentPlayer} wins!`;
      setTimeout(() => reset(), 4000);
      return;
    }

    if (checkDraw()) {
      status.textContent = 'Draw!';
      setTimeout(() => reset(), 4000);
      return;
    }

    currentPlayer = 'X';
    status.textContent = `It's ${currentPlayer}'s turn`;
  }, 750);
}

function checkWin() {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return squares[index].textContent === currentPlayer;
    });
  });
}

function checkDraw() {
  return [...squares].every(square => {
    return square.textContent !== '';
  });
}

function reset() {
  squares.forEach(square => {
    square.textContent = '';
  });
  currentPlayer = 'X';
  status.textContent = `It's ${currentPlayer}'s turn`;
}

squares.forEach(square => {
  square.addEventListener('click', handleMove);
});

reset();