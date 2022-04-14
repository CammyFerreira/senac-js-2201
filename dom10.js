document.body.addEventListener('click', function(e){
    if(e.target.parentElement.classList.contains('delete-item') === true){
        e.target.parentElement.parentElement.remove();
    };
});