/*const TODA_LISTA = document.querySelector('ul');//tudo que está apenas no ul vai ser deletado
const LIS = document.querySelectorAll('li');//tudo que está no li

TODA_LISTA.removeChild(LIS[3]);//remove apenas um item, de acordo com o índice


LIS.forEach(function( val, ind ){//para cada iteração, remove uma tarefa

    TODA_LISTA.removeChild(LIS[ind]);

});
*/


const APAGAR_CLASSE = document.getElementsByClassName('input-field col s12');

APAGAR_CLASSE[0].classList.add('collection-item');