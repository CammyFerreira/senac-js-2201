//Tamanho da tela
const tamanho = 'A:' + window.innerHeight + ' x L:' + window.innerWidth;

const paragrafo = document.getElementById('paragrafo');

const navegador = window.navigator; 

console.log(navegador);

paragrafo.innerText = navegador;

//document.write(tamanho);
//querySelector ou getElementById - pegar um elemento do html

// const p = document.querySelector('p');
// p.style.background = 'pink';

