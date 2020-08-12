function getTotalX(a, b) {
    // Write your code here
    // passo 1: descobrir os numeros existentes entre o ultimo elemento do array a e o primeiro de b
    // passo 2: para cada numero desse, dividir por todos elementos do array a
    // passo 3: se o resto da divisao for 0, acrescente no novo array
    // passo 4: com esse novo array, usar todos os elementos para dividir todos elementos do array b
    // passo 5: se o resto da divisao for 0, acrescentar num outro array novo
    // passo 6: retornar a funçao para o tamanho do ultimo array criado
    // dica: usar uma variável para guardar um estado true ou false. Se o estado for true, colocamos esse numero dentro do novo array
   
   // Exemplo prático:
    // [2,4] e [16, 32, 96]
    // de 4 a 16 há os numeros 4 5 6 7 8 9 10 11 12 13 14 15 16
    // destes, são divisiveis (% == 0) por 2: 4 6 8 10 12 14 16
    // e são divisiveis por 4:                4 8 12 16
    // 2 e 4 tem em comum: 4 8 12 16
    // destes 4 numeros, apenas 4, 8 e 16 conseguem dividir 16, 32 e 96 sem resto 
    // solução: 3
    
    
    
    var lastA = a[a.length - 1];
    var firstB = b[0];

    var novoArray = [];

    for(let i = lastA; i <= firstB; i++) {
        var incluirArray = true;
        for(var j = 0; j<a.length; j++) {
            if(i % a[j] !== 0) {
                incluirArray = false;
            }
        }
        if(incluirArray) {
            novoArray.push(i);
        }
  }

    var resultadoArray = [];

    for (var i = 0; i < novoArray.length; i++){
        var incluirArray = true;
        for(var j = 0; j < b.length; j++) {
            if(b[j] % novoArray[i] !== 0) {
                incluirArray = false;
            }
        }
        if (incluirArray){
            resultadoArray.push(novoArray[i]);
        }
    }
    return resultadoArray.length;
}
