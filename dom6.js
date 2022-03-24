//criar um elemento ex: classe 

const LI = document.createElement('li');

LI.className = 'collection-item';

LI.id = 'nova-tarefa-qualquer';

LI.setAttribute('title','Pare o mouse para ver');

const TEXTO = document.createTextNode('Tarefa inserida dinamicamente');

LI.appendChild(TEXTO); //colocamos o texto em li

console.log(LI);

const UL = document.querySelector('ul.collection');

UL.appendChild(LI);

//Criando o elemento A
const A = document.createElement('a');
A.href = '#';
A.className = 'delete-item secondary-content';
LI.appendChild(A); //colocamos o a no li

//Criando o elemento I
const I = document.createElement('i');
I.className = 'fa fa-remove';
A.appendChild(I);//colocamos o i no a


const novoTitulo = document.createElement('h2');
novoTitulo.id = 'task-title'; //define o id
novoTexto = document.createTextNode('Listinha');
novoTitulo.appendChild(novoTexto);

const tituloAntigo = document.querySelector('h5');
const elementoPai = document.querySelector('div.card-action');

elementoPai.replaceChild(novoTitulo, tituloAntigo);