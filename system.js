const calcular = document.getElementById('calcular');

/* esta funçao executa os valores informados na caixa de texto */

function ces () {
    const produto = document.getElementById('produto').value;
    const preco = +document.getElementById('preco').value;
    const quantidade = +document.getElementById('quantidade').value;
    const resultado = document.getElementById('resultado');
 /* Nesse código ele verifica se os campos estao preenchidos */
 if (produto!== '' && preco!== '' && quantidade !== '') {
/*Nesse código entra processamento , valor desc e valor a pagar */

        let valorCes = quantidade*preco ; 
        let vlrDesc  = ''; 

        let desconto = '';

        if (quantidade <= 2  ){
            desconto= valorCes*0.02 ;
            vlrDesc  =  valorCes -desconto ; 
         
        }else if (valorCes <= 5) {
            desconto = valorCes*0.05 ;
            vlrDesc  =  valorCes -desconto ; 
        }else if (valorCes >10){
            desconto = valorCes*0.10 ; 
            vlrDesc  =  valorCes -desconto ; 
           
        }

        resultado.textContent = `Valor Total ${produto}:R$${valorCes.toFixed(2)} \n Desconto de :
          R$${desconto.toFixed(2)} Valor a Pagar :R$${vlrDesc.toFixed(2)}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}


/* evento executa todo conteudo do html informado pelo usuario */
calcular.addEventListener('click', ces);