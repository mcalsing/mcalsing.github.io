const spaceshipBox = document.querySelector('.spaceship-box');
const bullet = document.querySelector('.bullet');
const gameBoard = document.querySelector('.game-board');
const score = document.querySelector('.score');
let hitCounter = 0;

function randomRockPosition() {
    let randomPosition = Math.floor(Math.random() * 720);
    return randomPosition;
}

function createRock() {
    const newRock = document.createElement('img');
    newRock.src = './imagens/rock.png';
    newRock.className = 'rock';
    newRock.style.left = `${randomRockPosition()}px`
    gameBoard.appendChild(newRock);
    return newRock;
}
createRock();

// Modificador de velocidade de deslocamento horizontal da nave.
let modifier = 5;

// Movimentação horizontal da nave
window.addEventListener("keydown", (eventOrigin) => {
    switch (eventOrigin.key) {
        case 'Enter': spaceshipBox.style.left = `${390}px`; break;
        case 'ArrowLeft': spaceshipBox.style.left = `${parseInt(spaceshipBox.style.left) - modifier}px`; break;
        case 'ArrowRight': spaceshipBox.style.left = `${parseInt(spaceshipBox.style.left) + modifier}px`; break;
    }
});

// Verifica a posição da rock e da nave a cada 30ms, para aplicar colisão
const loop = setInterval(() => {
    const shot = document.querySelector('.shot');
    const rock = document.querySelector('.rock');

    const rockPositionV = +window.getComputedStyle(rock).bottom.replace('px', '');
    const rockPositionH = rock.offsetLeft;
    const boxPositionH = spaceshipBox.offsetLeft;
    const shotPositionH = spaceshipBox.offsetLeft + 33;
    
    // Verifica a posição da pedra em relação ao tiro, para aplicar colisão
    if (shot !== null) {
        const shotPositionV = +window.getComputedStyle(shot).bottom.replace('px', '');
        diferencaShotToRockV = Math.abs(rockPositionV - shotPositionV);
        diferencaShotToRockH = shotPositionH - rockPositionH;

        // Quando o tiro atinge a pedra, ela é removida e criada em um lugar aleatório
        if (diferencaShotToRockV <= 15 && diferencaShotToRockH > -6 && diferencaShotToRockH < 81) {
            hitCounter += 1;
            score.innerText = 'Score: ' + hitCounter;
            rock.remove();
            shot.remove();
            createRock();
        }
    }
    
    // Quando a nave e a pedra colidem, o jogo é parado
    diferencaShipToRockH = rockPositionH - boxPositionH;
    if (diferencaShipToRockH < 68 && rockPositionV < 55 && diferencaShipToRockH > -79) {
        rock.style.animation = 'none';
        //rock.style.bottom = `${rockPositionV}px`
        hitCounter = 0;
        alert('Game Over!')
    }

}, 30);

// Cria a div que funciona como um tiro saindo da nave.
function shotBullet() {
     const newShot = document.createElement('div');
     newShot.className = 'shot bullet';
     spaceshipBox.appendChild(newShot);
     setTimeout(() => {
         if (document.querySelector('.shot') !== null) {
             document.querySelector('.shot').remove();
         }
     }, 1020); // Alcance do tiro
}

document.addEventListener('click', shotBullet);