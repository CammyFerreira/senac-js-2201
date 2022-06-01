/*AJAX - Quando essas tecnologias são combinadas no modelo AJAX, as aplicações web que a utilizam são capazes de fazer rapidamente atualizações incrementais para a 
interface do usuário sem recarregar a página inteira do navegador. Isso torna a aplicação mais rápida e sensível às ações do usuário.
*/

//Ele fornece uma maneira fácil de recuperar dados de um URL sem ter que fazer uma atualização de página inteira. 
//Exemplo com XMLHttpsRequest
document.getElementById('xhr').addEventListener('click', buscarDados);

function buscarDados(){

    const XHR = new XMLHttpRequest;

    XHR.open('GET' , 'conteudo.txt', true);//Inicializa uma requisição. Recebe 3 parâmetros: método, url que vai fazer a solicitação, se vai ser assíncrono;

    XHR.onload = function(){

        if(this.status === 200){//OK é a resposta de status de sucesso

            document.getElementById('exibe-conteudo-recuperado').innerText = 
                this.responseText;
        }
    }

    XHR.send();//Envia a solicitação. 
}

//A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas.
//Exemplo com Fetch
document.getElementById('fetch').addEventListener('click', carregaConteudo);

function carregaConteudo(){

    fetch('http://10.135.236.14:5500/aula-27-04-22/AJAX/conteudo.txt').then(function(resultado){
        return resultado.text();
    }).then(function(conteudo){
        document.getElementById('exibe-conteudo-recuperado').innerText = conteudo;
    });
}
