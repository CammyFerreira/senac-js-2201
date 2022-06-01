//LocalStorage - A propriedade localStorage permite acessar um objeto Storage local. Armazenar dados.
// os dados no sessionStorage tem os seus dados limpos ao expirar a sessão da página — ou seja, quando a página (aba ou janela) é fechada.

//Criando um objeto
const OBJ = {nome: "Camila", idade: 23, fazCompra: function(){
    console.log('Comprou alguma coisa');
}};

console.log(OBJ);

// OBJ.fazCompra();

const STR = '{"nome": "Camila", "idade": 37}';

//O método JSON.parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string.
console.log(JSON.parse(STR));

//O método setItem() da interface Storage, quando passado 'chave' e 'valor', irá adicionar esta chave ao storage,
localStorage.setItem('nome', 'Camila');

//getItem - pegando as informações do localStorage
const NOME = localStorage.getItem('nome');

console.log(NOME);

sessionStorage.setItem('idade', '37');

const IDADE = sessionStorage.getItem('idade');

console.log(IDADE);

document.querySelector('input.btn').addEventListener('click', function(e){
    e.preventDefault();//Cancela o evento se for cancelável, sem parar a propagação do mesmo.   
    const TAREFA = document.querySelector('#task').value;
    document.querySelector('#task').value = '';
    localStorage.setItem('tarefa', TAREFA);

});
