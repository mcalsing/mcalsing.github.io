const box = document.querySelector('.box');
const rock = document.querySelector('.rock');
const bullet = document.querySelector('.bullet');
const gameBoard = document.querySelector('.game-board');

// Modificador de velocidade de deslocamento horizontal.
let modifier = 5;

// Movimentacao horizontal do nave
window.addEventListener("keydown", (eventOrigin) => {
    switch (eventOrigin.key) {
        case 'Enter': box.style.left = `${250}px`; break;
        case 'ArrowLeft': box.style.left = `${parseInt(box.style.left) - modifier}px`; break;
        case 'ArrowRight': box.style.left = `${parseInt(box.style.left) + modifier}px`; break;
    }
});

// Verifica a posicao da rock e da box a cada 100ms, para aplicar colisao
const loop = setInterval(() => {
    const shot = document.querySelector('.shot');

    const rockPosition = +window.getComputedStyle(rock).bottom.replace('px', '');
    const boxPosition = box.offsetLeft;
    const shotPositionH = box.offsetLeft + 13;
    console.log('Posicao horizontal: ', shotPositionH);
    
    // Verifica a posicao da pedra em relacao ao tiro, para aplicar colisao
    if (shot !== null) {
        const shotPositionV = +window.getComputedStyle(shot).bottom.replace('px', '');
        
        diferencaShotToRock = Math.abs(rockPosition - shotPositionV);
        if (diferencaShotToRock <= 15 && shotPositionH < 80) {
            rock.style.animation = 'none';
            rock.style.bottom = `${rockPosition}px`
            alert('You Win!')
        }
    }
    
    if (rockPosition <= 60 && boxPosition <= 80) {
        rock.style.animation = 'none';
        rock.style.bottom = `${rockPosition}px`
        alert('You Lose!')
    }

    

}, 100);

// Cria a div que funciona como um tiro saindo da nave.
function shotBullet() {
     const newShot = document.createElement('div');
     newShot.className = 'shot bullet';
     box.appendChild(newShot);
     setTimeout(() => {
        document.querySelector('.shot').remove();
     }, 900);
}

document.addEventListener('click', shotBullet);