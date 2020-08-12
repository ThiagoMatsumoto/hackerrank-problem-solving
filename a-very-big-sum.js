//mesmo principio do exercicio de somar os elementos de um array

function aVeryBigSum(ar) {
    var i = 0;
    var total = 0;
    while (i < ar.length) {
        total += ar[i];
        i++;
    }
    return total;
}
