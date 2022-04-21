//Criando um objeto
const OBJ = {nome: "Camila", idade: 23, fazCompra: function(){
    console.log('Comprou alguma coisa');
}};

// console.log(OBJ);

// OBJ.fazCompra();

const STR = '{"nome": "Camila", "idade": 37}';

//console.log(JSON.parse(STR));

localStorage.setItem('nome', 'Camila');

const NOME = localStorage.getItem('nome');

// console.log(NOME);

sessionStorage.setItem('idade', '37');

const IDADE = sessionStorage.getItem('idade');

// console.log(IDADE);
//recupera valor do input preenchido pelo usuário e adiciona no storage
document.querySelector('input.btn').addEventListener('click', function(e){

//prevenir o comportamento padrão do botão
    e.preventDefault();

    const TAREFA = document.querySelector('#task').value;
    
    let tarefas;

    if(localStorage.getItem('tarefas') === null){

        tarefas =[];

    }else{

        tarefas = JSON.parse(localStorage.getItem('tarefas'));

    }

//push - 

    tarefas.push(TAREFA);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    
    console.log(tarefas);

    document.getElementById('task').value = '';
});

