//ELEMENTOS ÚNICOS

// console.log(document.querySelector('li:last-child').innerText);

// console.log(document.querySelector('li:first-child').innerText);

// console.log(document.querySelector('li:nth-child(2)').innerText);

// console.log(document.querySelector('li:first-child').innerText);

//nth - número ordinal

//ELEMENTOS MÚLTIPLOS
// console.log(document.getElementsByClassName('collection-item'));

// const itens = document.getElementsByClassName('collection-item');

// itens[3].style.color = 'blue';

//OU
              

// const itens = document.getElementsByTagName('li');
// itens[2].style.color = 'blue';

//pegando o elemento pela tag 'li'
//cria um vetor com os itens usando a classe Array
//looping 
//forEach

// const itens = document.getElementsByTagName('li');

// let itensArray = Array.from(itens);

// itensArray.forEach(function(li, indice){
//     console.log(indice + ': ' + li.innerText);
// });

//odd - impar; even - par

// let itensImpares = document.querySelectorAll('li:nth-child(odd)');

// console.log(itensImpares);


// mudaCor.forEach(function(item){
//     item.style.background = '#dedede';
// });

// let mudaCor = Array.from(itensImpares);

//pegar qualquer elemento, mesmo que não tenha id 
const ITENS = document.querySelector('ul.collection');

// pega o ul primeiro - a - i : console.log(ITENS.children[2].children[0].children[0]);
console.log(ITENS.children[2].firstChild);

ITENS.children[2].firstChild.textContent = 'Estudar ainda mais';

//ITENS.firstChild
// ITENS.lastChild
// ITENS.childElementCount

const tarefa = document.querySelector('div.input-field');
console.log(tarefa.children[1].textContent);

const clean = document.querySelector('a.clear-tasks');
let muda = clean.innerHTML = 'Clean taks';
console.log(muda);