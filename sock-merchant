/*
mesmo problema do migratory birds
Exemplo de execução do comando: 

input: 10, [1,2,1,4,5,2,3,4,5,6]
                    cores                                             pares
i = 0               Object { 1: 1 }                                     0 

i = 1               Object { 1: 1, 2: 1 }                               0 

i = 2               Object { 1: 0, 2: 1 }                               1 

i = 3               Object { 1: 0, 2: 1, 4: 1 }                         1 

i = 4               Object { 1: 0, 2: 1, 4: 1, 5: 1 }                   1

i = 5               Object { 1: 0, 2: 0, 4: 1, 5: 1 }                   2 

i = 6               Object { 1: 0, 2: 0, 3: 1, 4: 1, 5: 1 }             2

i = 7               Object { 1: 0, 2: 0, 3: 1, 4: 0, 5: 1 }             3 

i = 8               Object { 1: 0, 2: 0, 3: 1, 4: 0, 5: 0 }             4 

i = 9               Object { 1: 0, 2: 0, 3: 1, 4: 0, 5: 0, 6: 1 }       4
*/



function sockMerchant(n, arr) {
    const cores = {};
    let pares = 0;

    for (let i = 0; i < n; i++) {
        if (cores[arr[i]]) {  //se o objeto cores contem esse elemento arr[i]:
            pares++;
            cores[arr[i]] = 0; //reseta para 0 para que não seja feito pares com valores já contados
        } else { //se o objeto cores não contem esse elemento arr[i];
            cores[arr[i]] = 1;
        }

    }
    return pares;
}
