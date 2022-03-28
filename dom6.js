//criar um elemento ex: classe 

const LI = document.createElement('li'); //criando o elemento

LI.className = 'collection-item';//criando uma classe para o elemento

LI.id = 'nova-tarefa-qualquer';//criando um ID para o elemento

LI.setAttribute('title','Pare o mouse para ver');//criando um atributo para o elemento

const TEXTO = document.createTextNode('Tarefa inserida dinamicamente');//criando um texto

LI.appendChild(TEXTO); //colocamos o texto em li

console.log(LI); 

const UL = document.querySelector('ul.collection');

UL.appendChild(LI);//colocando o LI no UL 

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

elementoPai.replaceChild(novoTitulo, tituloAntigo);//substituindo o antigo título pelo novo