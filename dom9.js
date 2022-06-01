//Event listeners - 

//e.target - Uma referência ao objeto que enviou o evento, pode ser usada para implementar a delegação de eventos.

document.querySelector('.card-title').addEventListener('click', function(e){
    console.log(e.target);
});

document.querySelector('.card-content').addEventListener('click', function(e){
    console.log(e.target);
});

document.querySelector('.card').addEventListener('click', function(e){
    console.log('Tudo');
});
