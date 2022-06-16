const box = document.querySelector('.box');
const bullet = document.querySelector('.bullet');
const gameBoard = document.querySelector('.game-board');

function randomRockPosition() {
    let randomPosition = Math.floor(Math.random() * 500);
    return randomPosition;
}

function createRock() {
    const newRock = document.createElement('img');
    newRock.src = './imagens/rock.webp';
    newRock.className = 'rock';
    newRock.style.left = `${randomRockPosition()}px`
    gameBoard.appendChild(newRock);
    return newRock;
}
createRock();

// Modificador de velocidade de deslocamento horizontal da nave.
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
    const rock = document.querySelector('.rock');

    const rockPositionV = +window.getComputedStyle(rock).bottom.replace('px', '');
    const rockPositionH = rock.offsetLeft;
    //console.log(rockPositionH);
    const boxPositionH = box.offsetLeft;
    const shotPositionH = box.offsetLeft + 12.5;
    //console.log(shotPositionH);
    
    // Verifica a posicao da pedra em relacao ao tiro, para aplicar colisao
    if (shot !== null) {
        const shotPositionV = +window.getComputedStyle(shot).bottom.replace('px', '');
        diferencaShotToRockV = Math.abs(rockPositionV - shotPositionV);
        diferencaShotToRockH = shotPositionH - rockPositionH;
        //console.log(diferencaShotToRockH);

        // Quando o tiro atinge a pedra, ela é removida
        if (diferencaShotToRockV <= 15 && 
            diferencaShotToRockH >= -12.5 && diferencaShotToRockH < 67.5) {
            rock.remove();
            shot.remove();
            createRock();
        }
    }
    
    // Quando a nave e a pedra colidem, o jogo eh parado
    diferencaShipToRockH = rockPositionH - boxPositionH;
    //console.log(diferencaShipToRockH);
    if (diferencaShipToRockH < 50 && rockPositionV < 60 && diferencaShipToRockH > -80) {
        rock.style.animation = 'none';
        rock.style.bottom = `${rockPositionV}px`
        console.log('Perdeu!');
    }

}, 30);

// Cria a div que funciona como um tiro saindo da nave.
function shotBullet() {
     const newShot = document.createElement('div');
     newShot.className = 'shot bullet';
     box.appendChild(newShot);
     setTimeout(() => {
         if (document.querySelector('.shot') !== null) {
             document.querySelector('.shot').remove();
         }
     }, 900);
}

document.addEventListener('click', shotBullet);