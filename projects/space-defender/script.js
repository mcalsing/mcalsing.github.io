const spaceshipBox = document.querySelector('.spaceship-box');
const bullet = document.querySelector('.bullet');
//const bullet2 = document.querySelector('.bullet2');
//const bullet3 = document.querySelector('.bullet3');
const gameBoard = document.querySelector('.game-board');
const score = document.querySelector('.score');
const speed = document.querySelector('.spaceship-status');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
const btnFire = document.querySelector('.fire');

// Contador de acertos ao asteroide
let hitCount = 0;
// Modificador de velocidade de deslocamento horizontal da nave.
let baseSpeed = 7;

// Seta a posicao inicial da nave, so pelo css ela nao se move.
spaceshipBox.style.left = `${390}px`;

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


function hitCounter() {
    hitCount += 1;
    if (hitCount % 5 === 0) {
        speedModifier();
    }
    return hitCount;
}

function speedModifier() {
    baseSpeed += 0.2;
    return baseSpeed.toFixed(1);
}

function moveLeftBnt() {
    spaceshipBox.style.left = `${parseInt(spaceshipBox.style.left) - baseSpeed}px`;
}
function moveRightBnt() {
    spaceshipBox.style.left = `${parseInt(spaceshipBox.style.left) + baseSpeed}px`;
}


// Movimentação horizontal da nave
window.addEventListener("keydown", (eventOrigin) => {
    switch (eventOrigin.key) {
        //case 'Enter': spaceshipBox.style.left = `${390}px`; break;
        case 'ArrowLeft': spaceshipBox.style.left = `${parseInt(spaceshipBox.style.left) - baseSpeed}px`; break;
        case 'ArrowRight': spaceshipBox.style.left = `${parseInt(spaceshipBox.style.left) + baseSpeed}px`; break;
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
    const shotPositionH2 = spaceshipBox.offsetLeft + 2;
    const shotPositionH3 = spaceshipBox.offsetLeft + 63;
    
    // Verifica a posição da pedra em relação ao tiro, para aplicar colisão
    if (shot !== null) {
        const shotPositionV = +window.getComputedStyle(shot).bottom.replace('px', '');
        diferencaShotToRockV = Math.abs(rockPositionV - shotPositionV);
        diferencaShotToRockH = shotPositionH - rockPositionH;
        diferencaShotToRockH2 = shotPositionH2 - rockPositionH;
        diferencaShotToRockH3 = shotPositionH3 - rockPositionH;

        // Quando o tiro atinge a pedra, ela é removida e criada em um lugar aleatório
        
        //console.log(diferencaShotToRockH); 
        //console.log(diferencaShotToRockH2); 
        if (diferencaShotToRockV <= 15 && diferencaShotToRockH > -6 && diferencaShotToRockH < 81) {
            score.innerText = 'Score: ' + hitCounter();
            speed.innerText = 'Spaceship Speed: ' + baseSpeed.toFixed(1);
            //rock.style.bottom = `${rockPositionV}px`;
            rock.remove();
            shot.remove();
            createRock();
        }
        else if (diferencaShotToRockV <= 15 && diferencaShotToRockH2 > -4 && hitCount >= 0 &&
                diferencaShotToRockH2 < 81 && document.querySelector('.bullet2') !== null) {
            score.innerText = 'Score: ' + hitCounter();
            speed.innerText = 'Spaceship Speed: ' + baseSpeed.toFixed(1);
            rock.remove();
            //shot.remove();
            if (document.querySelector('.bullet2') !== null){
                document.querySelector('.bullet2').remove();
            }
            createRock();
        }
        else if (diferencaShotToRockV <= 15 && diferencaShotToRockH3 > -4 && hitCount >= 0 &&
                diferencaShotToRockH3 < 81 &&  document.querySelector('.bullet3') !== null) {
            score.innerText = 'Score: ' + hitCounter();
            speed.innerText = 'Spaceship Speed: ' + baseSpeed.toFixed(1);
            rock.remove();
            //shot.remove();
            if (document.querySelector('.bullet3') !== null){
                document.querySelector('.bullet3').remove();
            }
            createRock();
        } 
    }
    
    // Quando a nave e a pedra colidem, o jogo é parado
    diferencaShipToRockH = rockPositionH - boxPositionH;
    if (diferencaShipToRockH < 68 && rockPositionV < 55 && diferencaShipToRockH > -79) {
        rock.style.animation = 'none';
        //rock.style.bottom = `${rockPositionV}px`;
        hitCount = 0;
        baseSpeed = 7;
        alert('Game Over!')
    }

}, 30);

// Cria a div que funciona como um tiro saindo da nave.
function shotBullet(eventOrigin) {

    if (eventOrigin.target === gameBoard || eventOrigin.target === btnFire){
        const newShot = document.createElement('div');
        newShot.className = 'shot bullet';
        spaceshipBox.appendChild(newShot);
        if (hitCount >= 0) {
            const newShot = document.createElement('div');
            newShot.className = 'shot bullet2';
            spaceshipBox.appendChild(newShot);
            const newShot2 = document.createElement('div');
            newShot2.className = 'shot bullet3';
            spaceshipBox.appendChild(newShot2);
        }
        setTimeout(() => {
            if (document.querySelector('.shot') !== null) {
                //document.querySelector('.shot').remove();
                document.querySelectorAll('.shot').forEach((e) => e.remove());
            }
        }, 850); // Alcance do tiro
    }
}

document.addEventListener('click', shotBullet);
btnLeft.addEventListener('click', moveLeftBnt);
btnRight.addEventListener('click', moveRightBnt);

