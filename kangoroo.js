//teste 1, não passou em 13 de 29 testes. Erro de "Terminated due to timeout"

function kangaroo(x1, v1, x2, v2) {
    //condição: se um começar a frente do outro e "v" for maior, é impossível alcançar
    //o que começar a frente, deve obrigatoriamente ter um "v" menor, imprime "NO"
    //calculo: soma em loop do v1 com x1 e v2 com x2, quando for igual, imprime "YES"

    var kangoroo1 = x1 + v1;
    var kangoroo2 = x2 + v2;
    var resultado = '';

    if (x1 > x2 && v1 > v2 || x2 > x1 && v2 > v1) {
        resultado = "NO";
    } else {
        while (kangoroo1 != kangoroo2) {
            kangoroo1 += v1;
            kangoroo2 += v2;
        }
        resultado = "YES";
    };
    return resultado;
}

//teste 2, após pesquisar vi que a situação é uma simples equação: sendo y = número de pulos -> 
//x1 + (v1 * y) = x2 + (v2 * y). Temos que quando houver igualdade, os cangurus se encontrarão. 
Simplificando a equação: 
x1 - x2 = y(v2 - v1)
y = x1 - x2 / v2 - v1
se o resto da divisão dessa conta for 0, então os cangurus se encontraram
exemplos:
(x1, v1, x2, v2)
(0 3 4 2)
  y = 0 - 4 / 2 - 3 = -4 / -1 = 4.0
(21 6 47 3)
  y = 21 - 47 / 3 - 6 = -26/-3 = 8.666...  
(0 2 5 3)
  y = 0 - 5 / 3 - 2 = -5 / 1 = -5
  
//portanto:
//- o resto da divisão deve ser 0 
//- v1 deve ser maior que v2 (?) **Exercicio do mal formulado. Não informa que o canguro 2 tem que estar sempre a frente do 1.**
//fiz o teste: 
kangaroo(4, 2, 0, 3)
"NO"
y = 4 - 0 / 3 - 2 = 4 --> esperado "YES", o canguro 2 está a atrás
kangaroo(4, 3, 0, 2)
"YES"
y = 4 - 0 / 2 - 3 = -4 --> esperado "NO", o canguru 1 está a frente e o 2 nunca alcança porque pula menos

//ao rodar adicionando a condição o v1>v2, passou em todos os 29 testes. 

function kangaroo(x1, v1, x2, v2) {
    var resultado = "";
    var encontro = (x1 - x2) % (v2 - v1);

    if (encontro == 0 && (v1>v2)) {
        resultado = "YES";
    } else {
        resultado = "NO";
    }
    return resultado;
}
 
