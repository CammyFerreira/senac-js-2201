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

const itens = document.getElementsByTagName('li');

let itensArray = Array.from(itens);

// itensArray.forEach(function(li, indice){
//     console.log(indice + ': ' + li.innerText);
// });

//odd - impar; even - par

let itensImpares = document.querySelectorAll('li:nth-child(odd)');

console.log(itensImpares);


let mudaCor = Array.from(itensImpares);

mudaCor.forEach(function(item){
    item.style.background = '#dedede';
});