const box = document.querySelector('.box');
const rock = document.querySelector('.rock');
const bullet = document.querySelector('.bullet');
const gameBoard = document.querySelector('.game-board');

let modifier = 5;

window.addEventListener("keydown", (eventOrigin) => {
    switch (eventOrigin.key) {
        case 'Enter': box.style.left = `${250}px`; break;
        case 'ArrowLeft': box.style.left = `${parseInt(box.style.left) - modifier}px`; break;
        case 'ArrowRight': box.style.left = `${parseInt(box.style.left) + modifier}px`; break;
    }
});

// Faz a verificacao da posicao da rock e da box, para aplicar colisao
const loop = setInterval(() => {

    const rockPosition = +window.getComputedStyle(rock).bottom.replace('px', '');
    const boxPosition = box.offsetLeft;

    if (rockPosition <= 60 && boxPosition <= 80) {
        rock.style.animation = 'none';
        rock.style.bottom = `${rockPosition}px`
    }

}, 20);

// Cria a div que funciona como um tiro saindo da nave.
function shotBullet() {
     const newShot = document.createElement('div');
     newShot.className = 'bullet shot';
     box.appendChild(newShot);
     setTimeout(() => {
        document.querySelector('.shot').remove();
     }, 900);
}

document.addEventListener('click', shotBullet);