const FORMULARIO = document.querySelector('#form-tarefa');
const LISTA = document.querySelector('.collection');
const BTN_LIMPAR = document.querySelector('.limpar-tarefas');
const FILTRO = document.querySelector('#filtro');
const CAMPO_TAREFA = document.querySelector('#tarefa');

function carregaMonitorDeEventos() {

    //Eventos
    FORMULARIO.addEventListener('submit', adicionarTarefa);
    LISTA.addEventListener('click', apagaTarefa);
    BTN_LIMPAR.addEventListener('click', apagaTodasTarefa);
    FILTRO.addEventListener('click', filtraTarefa);
}
function pegaTarefa() {
    let tarefas;

    if (localStorage.getItem('tarefas') === null) {
        tarefas = [];
    } else {
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.forEach(function () {
        const LI = document.createElement('li');
        LI.className = 'collection-item';
        LI.appendChild(document.createTextNode(tarefas));
        const A = document.createElement('a');
        A.className = 'apaga-tarefa secondary-content';
        const I = document.createElement('i');
        I.className = 'fa fa-remove';
        A.appendChild(I);
        LI.appendChild(A);
        LISTA.appendChild(LI);
    });
}
function filtraTarefa(evento) {

    const texto = evento.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (tarefa) {

        const item = tarefa.firstChild.textContent;
        //-1 significa que não há o que está sendo buscado
        if (item.toLowerCase().indexOf(texto) != -1) {
            tarefa.style.display = 'block';
        } else {
            tarefa.style.display = 'none'
        }
    });
}


function apagaTodasTarefa(evento) {

    evento.preventDefault();

    LISTA.innerHTML = '';

    apagaTodasDoLocalStorage();
}
function apagaTodasDoLocalStorage(){
    localStorage.removeItem('tarefas');
}
function apagaDoLocalStorage(tarefaParaApagar){
    let tarefas;

    if(localStorage.getItem('tarefas') === null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }
    tarefas.forEach(function(tarefa, indice){
        if(tarefaParaApagar.textContent === tarefa){
            tarefas.splice(indice, 1);
        }
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
function apagaTarefa(evento) {

    if (evento.target.parentElement.classList.contains('apaga-tarefa')) {
        evento.target.parentElement.parentElement.remove();
    }
}

function adicionarTarefa(evento) {
    evento.preventDefault();
    if (CAMPO_TAREFA.value === '') {//Verifica se o campo está vazio
        alert('Insira uma tarefa');
    } else {
        //CRIA OS NOVOS ELEMENTOS
        const LI = document.createElement('li');
        LI.className = 'collection-item';
        LI.appendChild(document.createTextNode(CAMPO_TAREFA.value));
        const A = document.createElement('a');
        A.className = 'apaga-tarefa secondary-content';
        const I = document.createElement('i');
        I.className = 'fa fa-remove';
        A.appendChild(I);
        LI.appendChild(A);

        LISTA.appendChild(LI);

        gravaTarefaNoLocalStorage(CAMPO_TAREFA);
        CAMPO_TAREFA.value = '';

    }


}

function gravaTarefaNoLocalStorage(tarefa) {
    let tarefas;

    if (localStorage.getItem('tarefa') === null) {
        tarefas = [];
    } else {
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }
    tarefas.push(tarefa.value);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

carregaMonitorDeEventos();

