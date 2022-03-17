const p = document.getElementById('paragrafo');
const titulo = document.querySelector('h1');

console.log(titulo);

p.innerText = 'Meu texto!';

if(confirm('Quer entrar com um valor?')){

    let valor = prompt('Digite um número de 0 a 10');

    if(valor >= 0 && valor<=10){

        p.innerText = '';

        for(i=1; i <= valor; i++){
            p.innerText = p.innerText + 'Camila\n';
        }

        titulo.style.background = 'green';

    }else{
        p.innerText = 'Valor inválido';
        titulo.style.background = 'yellow';
    }
}else{
    p.innerText = 'Que pena que você não entrou com um valor :c';
    titulo.style.background = 'red';
}
    

