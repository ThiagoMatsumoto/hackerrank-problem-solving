/* 
Determinar a partir de um array contendo D(downhills) e U(uphills)
quantos valles a pessoa passou por, sendo que um valley é:
    - sequencia de passos a baixo do nivel do mar que termina acima do nivel do mar
ex. representativo:
                   /\      /\      /\
    nivel do mar _/  \    /  \    /  \_
                      \  /    \  /
                       \/      \/
                      vale    vale
Neste caso ele entrou em dois vales

Desafio: conseguir trackear quando é zero
    - Se o nivel do mar for 0 e o ultimo elemento for U, então estamos saindo de um vale
    - Se o nível do mar for 0 e o ultimo elemento for D, então estamos saindo de uma montanha
*/


function countingValleys(n, s) {
    var nivel_mar = 0;
    var vales = 0;

    for (var i = 0; i < n; i++){
        if(s[i] == 'U'){
            nivel_mar++;
        }
        if(s[i] == 'D'){
            nivel_mar--;
        }
        if(nivel_mar == 0 && s[i] == 'U'){
            vales++
        }
    }
    return vales;
}
