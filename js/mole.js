export class Mole {
  constructor(game, speed = 1000) {
    this.game = game;
    this.speed = speed;
    this.currentHole = null;
    this.timeoutId = null;
  }

  start() {
    this.popUp();
  }

  popUp() {
    this.hide();

    const holes = this.game.holes;
    const randomIndex = Math.floor(Math.random() * holes.length);
    this.currentHole = holes[randomIndex];

    const mole = document.createElement('div');
    mole.classList.add('mole');
    this.currentHole.appendChild(mole);

    this.timeoutId = setTimeout(() => this.popUp(), this.speed + Math.random() * 500);
  }

  hide() {
    if (!this.currentHole) return;
    const mole = this.currentHole.querySelector('.mole');
    if (mole) mole.remove();
  }

  stop() {
    clearTimeout(this.timeoutId);
    this.hide();
  }
}