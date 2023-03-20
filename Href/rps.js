const choices = ['rock', 'paper', 'scissors'];

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (choices.includes(userInput) || userInput === 'bomb') {
    return userInput;
  } else {
    while (!choices.includes(userInput)) {
      console.log('Invalid choice, Please choose rock, paper, or scissors');
      userInput = console.log('Please choose rock, paper, or scissors').toLowerCase();
    }
    return userInput;
  }
};

const getComputerChoice = () => {
  return choices[Math.floor(Math.random()*choices.length)];
};

const determineWinner = (userChoice , computerChoice) => {
  if (userChoice === 'bomb') return 'Cheat codes always win!';
  if (userChoice === computerChoice) return 'The game was a tie.';

  const winningRules = {
    rock: { scissors: 'user', paper: 'computer' },
    paper: { rock: 'user', scissors: 'computer' },
    scissors: { paper: 'user', rock: 'computer' }
  };

  return `The ${winningRules[userChoice][computerChoice]} is the winner!`;
};

const startGame = () => {
  console.log('Let\'s play a game of Rock, Paper, Scissors.');
  const userChoiceInput = document.getElementById("userChoiceInput");
  const userChoice = getUserChoice(userChoiceInput.value);
  const computerChoice = getComputerChoice();
  document.getElementById("result").textContent = `You chose: ${userChoice} and computer chose: ${computerChoice}. ${determineWinner(userChoice, computerChoice)}`;
};

document.getElementById("startGame").addEventListener("click", startGame);
