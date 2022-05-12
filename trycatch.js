try {
    
    executaMinhaFuncao();

}catch(erro) {
    alert('Olha o que aconteceu ' + erro.message);
}

try {
    
    executaMinhaFuncao();

}catch(erro) {
    alert(erro instanceof ReferenceError);
}

//finally é executado de qualquer forma
try {
    
    executaMinhaFuncao();

}catch(erro) {
    alert(erro.message);
}finally{
    console.log('Executou!');
}

// jogar os próprios erros
try{
    let a = "b";
    if(typeof a == "boolean"){
        throw new SyntaxError('A tem que ser inteiro');
        }
}catch(e){
    console.log(e);
}finally{
    console.log('Se der erro ou não, esse código é executado');
}