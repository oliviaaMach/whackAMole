export class Game {
  constructor(containerId, statusId) {
    this.container = document.getElementById(containerId);
    this.status = document.getElementById(statusId);
    this.holes = [];
    this.score = 0;
    this.misses = 0;

    this.timeLeft = 30;
    this.timerId = null;

    this.handleInteraction = this.handleInteraction.bind(this);
  }

  createBoard(rows = 3, cols = 3) {
    this.container.innerHTML = '';
    this.holes = [];

    for (let i = 0; i < rows * cols; i++) {
      const hole = document.createElement('button');
      hole.classList.add('hole');
      hole.setAttribute('data-index', i);
      hole.setAttribute('aria-label', `Hole ${i + 1}`);
      this.container.appendChild(hole);
      this.holes.push(hole);
    }
  }

  start() {
    this.container.addEventListener('click', this.handleInteraction);
    this.container.addEventListener('keydown', this.handleInteraction);
    this.startTimer();
    this.updateStatus();
  }

  stop() {
    this.container.removeEventListener('click', this.handleInteraction);
    this.container.removeEventListener('keydown', this.handleInteraction);
    this.stopTimer();
  }

  handleInteraction(event) {
    const isEnterOrSpace = event.type === 'keydown' && (event.key === 'Enter' || event.key === ' ');
    const targetHole = event.target.closest('.hole');

    if (!targetHole) return;

    const mole = targetHole.querySelector('.mole');

    if (mole && (event.type === 'click' || isEnterOrSpace)) {
      this.score++;
      mole.remove();
    } else if (!mole && event.type === 'click') {
      this.misses++;
    }

    this.updateStatus();
  }

  updateStatus() {
    this.status.textContent = `Hits: ${this.score} | Misses: ${this.misses} | Time: ${this.timeLeft}s`;
  }

  startTimer() {
    this.timeLeft = 30;
    this.updateStatus();
    this.timerId = setInterval(() => {
      this.timeLeft--;
      this.updateStatus();
      if (this.timeLeft <= 0) {
        this.stop();
        alert(`Time's up! Your score: ${this.score}`);
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerId);
  }
}