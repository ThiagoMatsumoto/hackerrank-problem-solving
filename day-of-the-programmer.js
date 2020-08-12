/*Como os dia do programador é fixo para todos os anos, poderiamos simplesmente criar uma condicional
que recebe se o ano for <1918, =1918 ou >1918. Se fosse <1918, seria "12.09."+ano. Se fosse =1918,
seria "26.09.1918". Se fosse >1918, seria "13.09."+ano.
Porém, quis criar uma função mais abrangente que permitisse encontrar qualquer data seguindo essa mudança
feita no calendário russo, bastando alterar a variável diaProgramador para outro valor desejado.
Dito isso, criei um array de objetos para ambos os calendários do problema.
Antes de ter criado a função somaDosDias, estava fazendo o loop em todas as condições, então isolei a lógica
para ficar menos repetitivo. 
Somando os dias, o loop não sabe que deve parar antes do valor 256, então para isso quando ele chegasse acima 
do valor, ele subtrai o ultimo valor somado. Feito isso conseguimos obter o numero de dias. 
*/

function dayOfProgrammer(year){
    var monthJulin = [
        {id:"January", dias:31}, {id:"February", dias:29}, {id:"March",dias:31},
        {id:"April",dias:30}, {id:"May",dias:31}, {id:"June",dias:30}, 
        {id:"July",dias:31}, {id:"August",dias:30}, {id:"September",dias:31}, 
        {id:"October",dias:30}, {id:"November",dias:31}, {id:"December",dias:30}
    ]
    var monthGreg = [
        {id:"January",dias:31}, {id:"February",dias:28}, {id:"March",dias:31},
        {id:"April",dias:30}, {id:"May",dias:31}, {id:"June",dias:30}, 
        {id:"July",dias:31}, {id:"August",dias:31}, {id:"September",dias:30}, 
        {id:"October",dias:31}, {id:"November",dias:30}, {id:"December",dias:31}
    ]
   
    var diaProgramador = 256
    var somaDias = 0
    var mes = 0
    function somaDosDias(calendario){
        for (var i = 0; i <= calendario.length; i++){
            mes++
            if(somaDias < diaProgramador ){
                somaDias = somaDias + calendario[i].dias
            }
            if(somaDias > diaProgramador){
                somaDias = somaDias - calendario[i].dias
                break;
            }
        }
    }


    if(year < 1918){
        if(year % 4 == 0){
            //bissexto
            monthJulin[1].dias = 30;
            somaDosDias(monthJulin);
        } else{
            somaDosDias(monthJulin);
        }
    }

    if(year == 1918){
        monthGreg[1].dias = 15;
        somaDosDias(monthGreg);
    }
    
    if (year >= 1919){
        if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
            //bissexto
            monthGreg[1].dias = 29;
            somaDosDias(monthGreg);
        }else{
            somaDosDias(monthGreg);
        } 
    }

    var dia = diaProgramador - somaDias;
    if(mes<=9){
        mes = "0"+mes 
    }
    return dia + "." + mes + "." + year;
}
