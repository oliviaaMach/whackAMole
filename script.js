import { Game } from './js/game.js';
import { Mole } from './js/mole.js';

const game = new Game('game-container', 'status');
game.createBoard();

const mole = new Mole(game);

// Knappkontroller
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const difficultySelect = document.getElementById('difficulty');

startBtn.addEventListener('click', () => {
  const speed = parseInt(difficultySelect.value);
  mole.speed = speed;

  game.score = 0;
  game.misses = 0;
  game.updateStatus();

  game.start();
  mole.start();
});

stopBtn.addEventListener('click', () => {
  game.stop();
  mole.stop();
});