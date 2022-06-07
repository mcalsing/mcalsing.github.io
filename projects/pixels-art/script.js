// Requisito 1: Adicione à página o título "Paleta de Cores".
// No .html

// Requisito 2: Adicione à página uma paleta contendo quatro cores distintas.
function createPixelPalette() {
  const newPixelColor = document.createElement('div');
  newPixelColor.className = 'color';
  document.getElementById('color-palette').appendChild(newPixelColor);
  return newPixelColor;
}
for (let i = 0; i < 4; i += 1) createPixelPalette();

// Preenche as outras 3 cores na peleta.
function printPixel() {
  for (let i = 1; i <= 3; i += 1) {
    document.querySelectorAll('.color')[i].style.background = colorGenerator();
    //document.querySelector('#color-palette').children[i].style.background = colorGenerator();
  }
}
printPixel();

// Requisito 3: Adicione a cor preta como a primeira cor da paleta de cores.
document.getElementsByClassName('color')[0].style.background = 'black';

// Requisito 4: Adicione à página um quadro contendo 25 pixels.
// Cria cada pixel do quadro
function createPixels() {
  const newPixel = document.createElement('div');
  newPixel.className = 'pixel';
  document.getElementById('pixel-board').appendChild(newPixel);
  return newPixel;
}
// Carrega a pagina com quadro 5x5
document.querySelector('#pixel-board').style.width = `${5 * 40}px`;
for (let i = 0; i < 25; i += 1) {
  createPixels();
}

// Requisito 5: Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.
// No .css

// Requisito 6: Defina a cor preta como cor inicial da paleta de cores.
// No final da pagina.

// Requisito 7 e 8: Seleciona a cor na baleta e pinta o quadro de pixels
const clickToGetColor = document.querySelector('#color-palette');
clickToGetColor.addEventListener('click', getColor);

function getColor(eventOrigin) {
  const mouseColor = eventOrigin.target.style.background;

  if (eventOrigin.target.className === 'color') {
    document.querySelector('.selected').classList.remove('selected');
    eventOrigin.target.classList.add('selected');
  }

  let clickToPrintPixel = document.getElementById('pixel-board');
  clickToPrintPixel = addEventListener('click', printPixelBoard);

  function printPixelBoard(eventOrigin) {
    if (eventOrigin.target.className === 'pixel') {
      eventOrigin.target.style.background = mouseColor;
    }
  }
}

// Requisito 9: Crie um botão que retorne a cor do quadro para a cor inicial.
function clearBoard() {
  const clear = document.querySelectorAll('.pixel');
  for (let i = 0; i < clear.length; i += 1) {
    clear[i].style.background = 'white';
  }
}
const whiteMission = document.getElementById('clear-board');
whiteMission.addEventListener('click', clearBoard);

// Requisito 10 e 11: Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
// Cria os pixels do quadro chamando a funcao createPixels
function dimensaoBoard() {
  // Recebe o valor do id board-size
  let dimensao = boardSize.value;

  if (dimensao === '') alert('Board inválido!');
  if (dimensao < 5) {
    dimensao = 5;
    document.querySelector('#pixel-board').style.width = `${dimensao * 40}px`;
  } else if (dimensao > 50) {
    dimensao = 50;
    document.querySelector('#pixel-board').style.width = `${dimensao * 40}px`;
  }

  document.querySelector('#pixel-board').style.width = `${dimensao * 40}px`;
  // Paga todas as divs pixel, assim, resetando a dimensao do board
  const element = document.querySelectorAll('.pixel');
  for (let i = 0; i < element.length; i += 1) element[i].remove();

  if (dimensao > 0) {
    dimensao = dimensao * dimensao;
    for (let i = 0; i < dimensao; i += 1) {
      createPixels();
    }
  }
}
// Atribui o que tem dentro do id board-size, no caso um valor de dimensao para a variavel boardSize
const boardSize = document.getElementById('board-size');
// Atribui o botao VQV a variavel generateBoard
const generateBoard = document.querySelector('#generate-board');
// Ao usar o evento click no botao generateBoard executa a funcao dimensaoBoard
generateBoard.addEventListener('click', dimensaoBoard);

// Requisito 12
function colorGenerator() {
  const color = [];
  for (let i = 0; i <= 5; i += 1) {
    color[i] = Math.floor(Math.random() * 10);
  }
  const rgb = '#' + color.join('');
  return rgb;
}


// Botao para mudar as cores da paleta
const changeColors = document.getElementById('change-colors');
changeColors.addEventListener('click', printPixel);

// Animacao do fundo
function speedBubbles(x) {
  const createB = document.createElement('span');
  createB.style = speedGenerator(x);
  document.getElementById('bubbles').appendChild(createB);
  return createB;
}

function speedGenerator(x) {
  const speed = Math.floor(Math.random() * 16) + 11;
  const speedTotal = 95 / speed + x;
  const style = 'animation-duration: calc(' + speedTotal + 's)';
  return style;
}

// Velocidade inicial das Bubbles 95
let velocidade = 0;
function speedBubblesUp() {
  // Remove os elementos span em #bubbles
  document.querySelectorAll('span').forEach((e) => e.remove());
  velocidade = velocidade - 1; // speed bubble +
  for (let i = 0; i < quantidade; i += 1) speedBubbles(velocidade);
}
function speedBubblesDown() {
  // Remove os elementos span em #bubbles
  document.querySelectorAll('span').forEach((e) => e.remove());
  velocidade = velocidade + 1; // speed bubble -
  for (let i = 0; i < quantidade; i += 1) speedBubbles(velocidade);
}

// Quantidade inicial de bubbles
let quantidade = 40;
function createBubblesUp() {
  // Remove os elementos span em #bubbles
  document.querySelectorAll('span').forEach((e) => e.remove());
  quantidade = quantidade + 4;
  for (let i = 0; i < quantidade; i += 1) speedBubbles(velocidade);
}

function createBubblesDown() {
  // Remove os elementos span em #bubbles
  document.querySelectorAll('span').forEach((e) => e.remove());
  quantidade = quantidade - 4;
  for (let i = 0; i < quantidade; i += 1) speedBubbles(velocidade);
}

for (let i = 0; i < quantidade; i += 1) speedBubbles(velocidade);

// Alterar velocidade das bubbles
const changeSpeedUp = document.getElementById('speed-bubblesup');
changeSpeedUp.addEventListener('click', speedBubblesUp);

const changeSpeedDown = document.getElementById('speed-bubblesdown');
changeSpeedDown.addEventListener('click', speedBubblesDown);

const changeQuantUp = document.getElementById('quant-bubblesup');
changeQuantUp.addEventListener('click', createBubblesUp);

const changeQuantDown = document.getElementById('quant-bubblesdown');
changeQuantDown.addEventListener('click', createBubblesDown);

// Requisito 6
window.onload = corPretaSelected;


  function corPretaSelected() {

    document.querySelector('.color').classList.add('selected');

    let clickToPrintPixel = document.getElementById('pixel-board');
    clickToPrintPixel = addEventListener('click', printPixelBoard);

    function printPixelBoard(eventOrigin) {
      if (eventOrigin.target.className === 'pixel') {
        eventOrigin.target.style.background = 'black';
      }
    }
  }
