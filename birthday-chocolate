/*
rascunho:
    como obter essa soma, sendo que a quantidade depende do valor mes?
    dois loops:
        primeiro: pega o primeiro index (var i)
        segundo:  soma o valor do primeiro index com um segundo valor que depende de m (var j)
        se m = 3, o que deveria acontecer:
        i = 0 j = 0 - s[0]  soma = soma + s[0]
        i = 0 j = 1 - s[1]  soma = (soma + s[0]) + s[1]
        i = 0 j = 2 - s[2]  soma = (soma + s[0] + s[1]) + s[2]
                                Se essa soma final for igual ao d, fazemos uma condicional para count++
        i = 1 j = 0 - s[1]  soma = soma + s[1]
        i = 1 j = 1 - s[2]  soma = (soma + s[1]) + s[2]
        i = 1 j = 2 - s[3]  soma = (soma + s[1] + s[2]) + s[3]
                                Se essa soma final for igual ao d, fazemos uma condicional para count++
*/


function birthday(s, d, m) {
    var count = 0;
    for (var i = 0; i < s.length; i++){
        var sum = 0; 
        for (var j = 0; j < m; j++){
            sum = sum + s[i + j]
        }
        if (sum == d) {
            count++
        }
    }
    return count;
}
