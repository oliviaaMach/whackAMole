export class game {
  constructor(container, status) {
    this.container = document.getElementById('container');
    this.status = document.getElementById('status');
    this.holes = [];          // Array som håller alla hål
    this.score = 0;           // Antal träffar
    this.handleInteraction = this.handleInteraction.bind(this); // Behövs för eventlistener
  }

  createBoard(rows = 3, cols = 3) {
    // Rensa container
    this.container.innerHTML = '';

    for (let i = 0; i < rows * cols; i++) {
      const hole = document.createElement('button');  // Fokusbar med Tab
      hole.classList.add('hole');
      hole.setAttribute('data-index', i);            // Identifiera hålet
      hole.setAttribute('aria-label', `Hole ${i + 1}`);
      this.container.appendChild(hole);
      this.holes.push(hole);
      
      console.log('skapar hål', i, hole)
    }

  }

  start() {
    // Lyssnar på hela brädet
    this.container.addEventListener('click', this.handleInteraction);
    this.container.addEventListener('keydown', this.handleInteraction);
    this.updateStatus();
  }

  stop() {
    this.container.removeEventListener('click', this.handleInteraction);
    this.container.removeEventListener('keydown', this.handleInteraction);
  }

  handleInteraction(event) {
    const isEnterOrSpace = event.type === 'keydown' && (event.key === 'Enter' || event.key === ' ');
    if (event.target.classList.contains('mole') || isEnterOrSpace && event.target.classList.contains('hole')) {
      // Träff
      this.score++;
      this.updateStatus();
      // Eventuellt meddela Mole att den ska försvinna
    } 
    // else if (event.target.classList.contains('hole')) {
    //   // Miss
    //   this.misses++;
    //   this.updateStatus();
    // }
  }

  updateStatus() {
    this.status.textContent = `Hits: ${this.score}`;
  }
}
