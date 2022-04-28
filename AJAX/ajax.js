document.querySelector('button').addEventListener('click', carregaConteudo);

function carregaConteudo(){
    const XHR = new XMLHttpRequest();

    XHR.open('GET', 'conteudo.txt', TRUE);

    XHR.onload = function(){
        if(this.status === 200){// HTTP code 2000 OK}
            document.getElementById('exibe-conteudo-recuperado').innerText = 
            this.responseText;
        }
    }
    XHR.send(); //Realiza a requisição
}

const POSTS = [
    {titulo: 'Post Um', cont: 'Conteúdo post um'},
    {titulo: 'Post Dois', cont: 'Conteúdo post dois'}];
