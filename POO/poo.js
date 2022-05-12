class Usuario{

//quando instancia a classe ele é executado automaticamente

    constructor(){
       this.nome = 'Camila';
    }

    listar(){
        this.mostraMensagem();
    }

    editar(){
        console.log('editar usuario');
    }
    
    
    cadastrar(){
        console.log('cadastro feito');
    }

    mostraMensagem(){
        alert('Mensagem para usuário');
    }
}

let user = new Usuario;
let camila = new Usuario;
let bono = new Usuario;

user.editar();
user.listar();
console.log(user.nome);