//se o if for true ele remove o elemento pai do elemento pai daquele elemento;

document.body.addEventListener('click', function(e){
    if(e.target.parentElement.classList.contains('delete-item') === true){
        e.target.parentElement.parentElement.remove();
    };
});
