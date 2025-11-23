import { Game } from '../js/game.js';
import { Mole } from '../js/mole.js';

const game = new Game('game-container', 'status');
game.createBoard();

const mole = new Mole(game); // standard speed = 1000ms

// Knappkontroller
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

startBtn.addEventListener('click', () => {
  game.score = 0;
  game.misses = 0;
  game.updateStatus();

  game.start();
  mole.start(); // mullvader poppar med standardhastighet
});

stopBtn.addEventListener('click', () => {
  game.stop();
  mole.stop();
});