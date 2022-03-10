// DOM - Document Object Model

const p = document.getElementById('paragrafo');

p.innerText = 'Meu texto!';

// p.style.background = 'red';



const v = ['red', 'purple', 'blue', 'yellow', 'pink'];


for(i=0, c = 0; i<1000; i++, c++){
   
    p.style.background = v[c];

    console.log(c + ': ' + p.style.background);

    if(c >= 5) c = -1;
}

console.log(p);

