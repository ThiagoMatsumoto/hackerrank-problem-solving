/* 
Tendo dois arrays, para somar os valores podemos usar dois loops, para que um valor seja somado a todos
os outros seguindo as condições desejadas. De inicio deixamos o valor de retorno -1, e caso seja encontrado 
o valor desejado, atribuimos a essa variável o valor de retorno. 

Inicialmente, como desejamos o maior valor da soma, definimos o array para uma ordem decrescente. 
No primeiro teste, somamos keyboards[i] com drives[j] e se a soma desse > b, saíamos do loop, não
realizando a proxima condicional que atribuiria o valor da soma a variável de retorno.
Após a primeira tentativa, o código travou nos teste truncados (arrays infinitos). 

Depois de ler na discussão do problema, percebi que o sort realizado em um dos arrays era crescente
e não descente. 
Seguindo o exemplo da discussão, se temos os arrays ordenados:
  - keyboard = [3,1]
  - drives = [0,2,5,8]
E temos o limite b = 4:
Na primeira iteração o keyboard[i] = 3 e o drives[j] = 0, como 4 > 3 + 0, armazenamos a soma
na variável de retorno (valorPadrao) caso essa seja a resposta, depois incrementamos j, ficando drives[j] = 2
e nesse caso 4 < 3 + 2, ou seja, o limite foi ultrapassado. Como não queremos isso, usamos uma 
condicional com break para que o j não sofra mais incrementos já que os proximos valores são maiores
do que este ultimo (2). Esse break permite que o j permaneça como j=1, não havendo necessidade de 
somar keyboard[i] = 1 com drives[j] = 0, indo direto para keyboard[i] = 1 somando com drive[j] = 2.
Feito essa soma, que resultará em soma = 3, comparamos ela com o valorPadrao e como soma < valorPadrao, 
não haverá alteração da variável. Depois essa lógica do break continua até ter completado a iteração. 
*/


function getMoneySpent(keyboards, drives, b) {
    keyboards.sort(function(a,b){return b-a});
    drives.sort(function(a,b){return a-b});
    var valorPadrao = -1;

    for (var i = 0; i < keyboards.length; i++){
        for (var j = 0; j < drives.length; j++){
            soma = keyboards[i] + drives[j]
            if(soma > b){
                break
            }
            if(soma > valorPadrao){
                valorPadrao = soma
            }
        }
    }
    return valorPadrao;
}
