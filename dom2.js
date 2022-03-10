const p = document.getElementById('paragrafo');

p.innerText = 'Meu texto!';

if(confirm('Quer entrar com um valor?')){

    let valor = prompt('Digite um número de 0 a 10');


    if(valor >= 0 && valor<=10){

        p.innerText = '';

        for(i=1; i <= valor; i++){
            p.innerText = p.innerText + 'Camila\n';
        }
    }else{
        p.innerText = 'Valor inválido';
    }
}else{
    p.innerText = 'Que pena que você não entrou com um valor :c';
}
    

