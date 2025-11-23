export class Mole {
  constructor(game, speed = 1000) {
    this.game = game;
    this.speed = speed; // alltid 1 sekund mellan pop-ups
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
    mole.setAttribute('role', 'img');
    mole.setAttribute('aria-label', 'Mullvad');
    this.currentHole.appendChild(mole);

    // nästa mullvad poppar upp efter speed ms
    this.timeoutId = setTimeout(() => this.popUp(), this.speed);
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