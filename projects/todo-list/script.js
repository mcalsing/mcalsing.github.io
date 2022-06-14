const botaoCriaTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas').children;
const listaTarefasPai = document.querySelector('#lista-tarefas');
const itemSelecionado = document.querySelector('.selected')

// Requisito 5: Ao apertar o botao uma nova terefa eh criada ao final da lista e imput limpo
botaoCriaTarefa.addEventListener('click', criaTarefa);
function criaTarefa (eventOrigin){
    if (textoTarefa.value !== '') {
        const novaLi = document.createElement('li');
        novaLi.innerText = textoTarefa.value;
        document.getElementById('lista-tarefas').appendChild(novaLi);
        textoTarefa.value = '';
    }
}

// Requisito 7 e 8: Preenche e remove o background do item na lista
const itemCinza = addEventListener('click', pintaFundo);
function pintaFundo (eventOrigin){
    if (document.querySelector('.selected') === null && eventOrigin.target.tagName === 'LI') {
        eventOrigin.target.classList.toggle('selected');
    }
    else if (eventOrigin.target.tagName === 'LI' && eventOrigin.target.className !== 'selected') {
        document.querySelector('.selected').classList.remove('selected');
        eventOrigin.target.classList.add('selected');
    }
}

// Requisito 9: Add letra riscada ao clicar duas vezes no elemento
addEventListener('dblclick', tarefaCompleta);
function tarefaCompleta(eventOrigin){
    //document.querySelector('.selected').classList.remove('selected');
    if (eventOrigin.target.tagName === 'LI' ){
        //eventOrigin.target.className = 'completed';
        eventOrigin.target.classList.toggle('completed');
    }
}

// Requisito 10: Adicione um botão que quando clicado deve apagar todos os itens da lista
const apagartudo = document.querySelector('#apaga-tudo');
apagartudo.addEventListener('click', botaoApagar);
function botaoApagar(eventOrigin) {
    document.querySelectorAll('li').forEach((element) => element.remove());
}

// Requisito 11: Remove os elementos finalizados da lista
const apagarfinalizados = document.querySelector('#remover-finalizados');
apagarfinalizados.addEventListener('click', botaoApagarFinalizados);
function botaoApagarFinalizados(eventOrigin) {
    document.querySelectorAll('.completed').forEach((element) => element.remove());
}

// Requisito 12: Botao para salvar a lista localmente.
const salvarLista = document.getElementById('salvar-tarefas');
salvarLista.addEventListener('click', botaoSalvarLista);
let arrayLista = [];
function botaoSalvarLista (eventOrigin){
    for (let i = 0; i < listaTarefas.length; i += 1){
        //localStorage.setItem('lista', JSON.stringify(listaTarefas[i].innerText))
        localStorage.setItem('lista' + i, listaTarefas[i].innerText);
        localStorage.setItem('classe' + i, listaTarefas[i].classList.value);
        localStorage.setItem('tamanhoLista', listaTarefas.length);
    }
}

// Insere itens na lista vindas do localstorage
function insereListaNoDom (){
    let tamanho = localStorage.getItem('tamanhoLista')
    for (let i = 0; i < tamanho; i += 1){
        const novaLi = document.createElement('li');
        novaLi.innerText = localStorage.getItem('lista' + i);
        if (localStorage.getItem('classe' + i) === 'completed selected' || localStorage.getItem('classe' + i) === 'selected completed' || localStorage.getItem('classe' + i) === 'completed'){
            novaLi.className = 'completed';
        }
        document.getElementById('lista-tarefas').appendChild(novaLi);
    }
}


// Requisito 13: Mover item selecionado para cima.
const moveSelecionadoUp = document.getElementById('mover-cima');
moveSelecionadoUp.addEventListener('click', botaoMoverSelecionadoUp);
function botaoMoverSelecionadoUp(eventOrigin){
    let itemSelecionado = document.querySelector('.selected')
    if (itemSelecionado === null) return null;
    else if (itemSelecionado.previousElementSibling !== null){
        listaTarefasPai.insertBefore(itemSelecionado, itemSelecionado.previousElementSibling);
    }
}

// Requisito 13: Mover item selecionado para baixo. Funcionando.
const moveSelecionadoDown = document.getElementById('mover-baixo');
moveSelecionadoDown.addEventListener('click', botaoMoverSelecionadoDown);
function botaoMoverSelecionadoDown(eventOrigin){
    let itemSelecionado = document.querySelector('.selected')
    if (itemSelecionado === null) return null;
    else if (itemSelecionado.nextElementSibling !== null){ // Se retirar essa linha o codigo funciona, mas quando tiver na ultima posicao, vai voltar pra a primeira.
        listaTarefasPai.insertBefore(itemSelecionado.nextElementSibling, itemSelecionado);
    }
}

// Requisito 14: Adicione um botão que, quando clicado, remove o item selecionado
const removeSelecionado = document.getElementById('remover-selecionado');
removeSelecionado.addEventListener('click', botaoRemoverSelecionado);
function botaoRemoverSelecionado(eventOrigin){
    document.querySelector('.selected').remove();
}


window.onload = function() {
    insereListaNoDom();
  };