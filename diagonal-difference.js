    //problema: temos um array dentro de um array! Iteramos com 2 laços então
    //1º laço - seleciona a subarray
    //2º laço - seleciona os elementos da subarray
    //diagonal1 - todos os itens com mesmo valor [0][0], [1][1] e [2][2] para matrix 3
    //diagonal2 - valores opostos menos o meio [0][2], [1][1] e [2][0]
    //para resolver a digonal oposta EX.: 
    //arr = [[11,2,4], [4,5,6], [10,8,-12]] ou [Array(3), Array(3), Array(3)]

    //[11, 2, 4]                                      [10, 8, -12]
    //[4, 5, 6]     -> trocamos o index 0 com 2       [4, 5, 6]  
    //[10, 8, -12]                                    [11, 2, 4] 
    //diagonal1: 11+5+(-12) 
    //diagonal2: 4+5+10        NÃO MUDA O VALOR!!     diagonal2: 10+5+4
    
    
function diagonalDifference(arr) {
    
    var diagonal1 = 0;  
    var diagonal2 = 0;

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++ )
            if (i == j) {
                diagonal1 += arr[i][j];
                diagonal2 += arr[arr.length - 1 -i][i];
            }
    }
    var difDiagonal = diagonal1 - diagonal2;

    if (difDiagonal < 0) { return difDiagonal * (-1) } else { return difDiagonal };

}
