//Event listeners - 

document.querySelector('.card-title').addEventListener('click', function(e){
    console.log(e.target);
});

document.querySelector('.card-content').addEventListener('click', function(e){
    console.log(e.target);
});

document.querySelector('.card').addEventListener('click', function(e){
    console.log('Tudo');
});