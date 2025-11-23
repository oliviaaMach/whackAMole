export function timer() {

const countDown = new Date().getTime() + 59000;
const cdInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = countDown - now;

    const sec = Math.floor((timeLeft % (1000 * 60)) / 1000);


    document.getElementById('countDown').innerHTML = `
        <p>${sec}</p>
    `;

    if(timeLeft < 0 ){
        clearInterval(cdInterval);
        document.getElementById('countDown').innerHTML = `
            <p>END</p>`;
    }
});

}

