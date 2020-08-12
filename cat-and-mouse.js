/*
Passo 1: calcular distância de A até C (converter negativo em positivo)
Passo 2: calcular distância de B até C (converter negativo em positivo)
Passo 3: criar as condicionais com retorno do valor desejado
*/

function catAndMouse(x, y, z) {

    var distanciaA = Math.abs(x - z);

    var distanciaB = Math.abs(y - z);

    if (distanciaA == distanciaB){
        return "Mouse C"
    }
    if(distanciaA > distanciaB){
        return "Cat B"
    }
    if(distanciaA < distanciaB){
        return "Cat A"
    }

}
