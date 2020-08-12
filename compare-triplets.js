//problema: dados dois arrays a e b, precisamos comparar os elementos de cada posição com o outro array

function compareTriplets(a, b) {
    var i = 0;
    var numA = 0;
    var numB = 0;
    var output = [0, 0];
    while (i < 3) {
        if (a[i] > b[i]) {
            numA += 1;
            output[0] = numA;
        } else if (a[i] < b[i]) {
            numB += 1;
            output[1] = numB;
        }
        i++;
    }
    return output;
}
