//problema: adicionar um # por linha e por coluna. 'n' determina o quão grande essa "escada" será

//opção 1: para cada linha, precisamos definir espaços. Se o valor n é 6, então todas
//as linhas devem conter 6 espaços, porém a primeira com 5 espaços vazios e 1 espaço #
//e assim por diante até que na última linha temos 6 espaços #

//opção 2: iniciamos um array a partir do construtor, permitindo definirmos o tamanho
//da array igual a n e preenchemos com espaços vazios. A cada interação
//é criado um novo array de 6 itens com o ultimo espaço contendo #.

function staircase(n) {

    var linha = Array(n).fill(' ');

    for (var i = n - 1; i >= 0; i--){ 
        linha[i] = "#";
        console.log(linha.join(''));
    }
}
