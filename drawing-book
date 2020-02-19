/*
Quando devo contar do inicio?
    Quando o p < n/2
Quando devo contar do fim?
    Quando o p > n/2

Passo 1: definir se as páginas n são pares ou impares, para definir a ultima página
Passo 2: definir por onde a contagem deve começar, inicio ou fim
Passo 3: definido por onde começar, somar +2 ou subtrair -2 e a cada iteração, contar +1
*/

function pageCount(n, p) {

    var paginaInicio = [0, 1];
    var paginaFim = []
    var count = 0

    if(n % 2 == 0){
        //paginas pares
        paginaFim = [n, n+1]
    }else{
        //paginas impares
        paginaFim = [n-1, n]
    }

    if(p <= n/2){
        //começa do inicio do livro
        for (var i = 0; i < n; i++){
            if(paginaInicio[0] == p || paginaInicio[1] == p){
                break;
            }
            paginaInicio[0] += 2;
            paginaInicio[1] += 2;
            count++
        }
    }
    if(p > n/2){
        //começa do fim do livro
        for (var j = 0; j < n; j++){
            if(paginaFim[0] == p || paginaFim[1] == p){
                break;
            }
            paginaFim[0] -= 2
            paginaFim[1] -= 2
            count++
        }
    }

  return count;
}
