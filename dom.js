// DOM - Document Object Model

//getElementByID - Retorna a referência do elemento através do seu ID.
const p = document.getElementById('paragrafo');

//mudando o texto do parágrafo
p.innerText = 'Meu texto!';
//mudando a cor de fundo do parágrafo
p.style.background = 'red';


//Exercício 
const v = ['red', 'purple', 'blue', 'yellow', 'pink'];


for(i=0, c = 0; i<1000; i++, c++){
   
    p.style.background = v[c];

    console.log(c + ': ' + p.style.background);
    
    if(c >= 5) c = -1;
}

console.log(p);

