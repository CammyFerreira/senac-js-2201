class Calculadora{

    constructor(){
        document.getElementById('calc').addEventListener('click', this.calcula());
    }
    calcula(){
        const n1 = document.getElementById('num1').value;
        const n2 = document.getElementById('num2').value;

        const resultado = this.soma(n1, n2);

        this.exibeResultado(resultado);
    }

    soma(nm1,nm2){
        let n1 = Number(nm1);
        let n2 = Number(nm2);
        
        return n1 + n2;
    }

    exibeResultado(res){
        document.getElementById('resultado').innerText = res;
    }
}

new Calculadora;