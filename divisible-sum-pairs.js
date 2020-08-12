Exemplo
    6 3 
    [1, 3, 2, 6, 1, 2]

    Soma deve ser divisivel por 3:
    Para o index 0:
    1 + 3 = 4
    1 + 2 = 3
    1 + 6 = 7
    1 + 1 = 2
    1 + 2 = 3
    Há 2 pares: 1 2 e 1 2 --> index 0, 2 e 0, 5
    Para o index 1:
    3 + 1 = 4
    3 + 2 = 5
    3 + 6 = 9
    3 + 1 = 4
    3 + 2 = 5
    Há 1 par: 3 6 --> index 1, 3
    ...

Problema: A ordem de formação dos pares não importa. No index 0, obtemos os pares (0, 2) e (0, 5),
          mas ao chegar no index 2, também iremos obter (2, 0), que é o mesmo par do index 0. 
          Infelizmente, não obtive tempo para encontrar uma solução mais elegante juntado com a teoria de 
          análise combinatória (não sou muito bom nesta área), e no forum do problema não achei uma resposta
          melhor. Para este momento, podemos simplesmente dividir o count por 2, visto que o loop é no mesmo 
          array, podemos assumir que ele esta "indo e voltando" na formação dos pares.

function divisibleSumPairs(n, k, ar){
    var count = 0;
    for(var i = 0; i < n; i++){
        var sum = 0;
        for(var j = 0; j < n; j++){
            if(i == j){continue} //continue permite pularmos a atual iteração e ir para a seguinte
            sum = ar[i] + ar[j]
            if (sum % k == 0){
                count++
            }
        }
    } 
    return count/2;
}
