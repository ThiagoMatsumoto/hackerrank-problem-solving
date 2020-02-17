/*
Passo 1: somar os valores dentro do array correspondente a conta total;
Passo 2: remover do array o index k correspondente ao que a Anna não consumiu;
Passo 3: somar os valores novamente;
Passo 4: calcular o valor que deveria ter sido pago pela Anna;
Passo 5: comparar o valor anterior com o valor que foi realmente pago b
Obs: Por algum motivo o return da função não estava funcionando, tendo de alterar para console.log para 
obter o output. 
*/



function bonAppetit(bill, k, b) {
    var somaTotal = bill.reduce(function (acc, val){return acc + val;}, 0);
    bill.splice(k, 1);

    var somaCerta = bill.reduce(function(acc,val){return acc+val;}, 0);
    var valorPagoAnna = somaCerta/2
    
    if(valorPagoAnna < b){
        var refound = b - valorPagoAnna;
        console.log(refound);
    } else{
        return console.log("Bon Appetit");
    }
}
