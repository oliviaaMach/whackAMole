import { mole } from "./js/mole.js"
import { game } from "./js/game.js"
import { timer } from "./js/countDown.js"


const gameOn = new game('container', 'status');
gameOn.createBoard();

gameOn.start()

let startBtn = document.getElementById('startBtn'); 
    startBtn.addEventListener('click', () => {
        timer(); 
    });

    

