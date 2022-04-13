/*document.querySelector('input.btn').addEventListener('click', function(evento){
    evento.preventDefault();//previne evento padrão não desejável

    //console.log(evento.target.className);

    const valorDoUsuario = document.querySelector('input#task'.value);
    //aqui criou mais uma tarefa
const LI = document.createElement('li');

LI.className = 'collection-item';

LI.id = 'nova-tarefa-qualquer';

LI.setAttribute('title', 'Pare o mouse');
//criamos o elemento li

//criamos um texto para colocar na li
const TEXTO = document.createTextNode(valorDoUsuario);

LI.appendChild(TEXTO);//colocamos o texto em li


});
/*

/*
document.querySelector('input.btn').addEventListener('click', function(evento){

    evento.preventDefault();



});
*/
//com click
/*
document.querySelector('span.card-title').addEventListener('click', function(evento){

    document.querySelector('#task-title').style.color = 'red';//lista de tarefas fica em vermelho
});
*/

/*
document.querySelector('span.card-title').addEventListener('mouseover', function(evento){//ao passar o mouse, as letras ficam vermelhas

    document.querySelector('#task-title').style.color = 'red';
});
*/

/*
const  BTN_BLACK = document.getElementsByClassName('clear-tasks btn black');//limpar todas as tarefas da lista

BTN_BLACK[0].addEventListener('click', function(a){
    a.preventDefault();

    document.querySelector('ul').remove();
});
*/

//mexendo nos eixos x e y de movimentação do mouse, as cores de fundo mudam
/*
const card = document.querySelector('.card');
const titulo = document.querySelector('h5');

card.addEventListener('mousemove', mostraEvento);

function mostraEvento(evento){
console.log(`Tipo de evento: ${evento.type}`);
titulo.textContent =   `Eixo X: ${evento.offsetX} Eixo Y: ${evento.offsetY}`;

document.body.style.backgroundColor = `rgb(${evento.offsetX} , ${evento.offsetY}, 40)`; 

}
*/

/*

//aqui cria mais uma tarefa
const LI = document.createElement('li');

LI.className = 'collection-item';

LI.id = 'inserir';

LI.setAttribute('title', 'escreva');
//criamos o elemento li

//criamos um texto para colocar na li
const TEXTO = document.createTextNode('');
    document.querySelector('input#task').value;

LI.appendChild(TEXTO);//colocamos o texto em li

console.log(LI);

*/

document.querySelector('input.btn').addEventListener('click', function(adicionarTarefas){
    
    adicionarTarefas.preventDefault();

    //Criar elemento pelo JavaScript LI
    
    const LI = document.createElement('li');
    LI.className = 'collection-item';
    LI.id = 'novo-item';
    LI.setAttribute('title', 'Novo Item');
    //Pegamos o texto do input
    
    const textoInput = document.querySelector('input#task').value;

    const TEXTO = document.createTextNode(textoInput);

    //Colocamos o texto
    LI.appendChild(TEXTO);

    //Criamos o elemento A
    const A = document.createElement('a');
    A.className = 'delete-item secondary-content';
    A.href = '#';

    //Criamos o elemento I
    const I = document.createElement('i');
    I.className = 'fa fa-remove';

    const UL = document.querySelector('ul.collection');

    //Colocamos o elemetento I dentro do A
    A.appendChild(I);

    //Colocamos o elemetento A dentro do LI
    LI.appendChild(A);

    //Colocamos o elemetento LI dentro do UL
    UL.appendChild(LI);

    const limpar = document.querySelector('input#task').value = "";

})