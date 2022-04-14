//Criando um objeto
const OBJ = {nome: "Camila", idade: 23, fazCompra: function(){
    console.log('Comprou alguma coisa');
}};

console.log(OBJ);

// OBJ.fazCompra();

const STR = '{"nome": "Camila", "idade": 37}';

console.log(JSON.parse(STR));

localStorage.setItem('nome', 'Camila');

const NOME = localStorage.getItem('nome');

console.log(NOME);

sessionStorage.setItem('idade', '37');

const IDADE = sessionStorage.getItem('idade');

console.log(IDADE);

document.querySelector('input.btn').addEventListener('click', function(e){
    e.preventDefault();
    const TAREFA = document.querySelector('#task').value;
    document.querySelector('#task').value = '';
    localStorage.setItem('tarefa', TAREFA);

});