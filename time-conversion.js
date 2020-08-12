//Resolução inicial minha. Seprando as horas e depois analisando o ultimo elemento se tinha AM ou PM
//depois alterando os valors das horas
//Obs: insatisfeito com tantos IFs extensos

function timeConversion(s) {
    //separa a string em um array
    //seleciona o ultimo elemento para ver a existencia de PM e AM
    var tempoArray = s.split(":");
    var segundos = tempoArray[tempoArray.length - 1];
    var tarde = segundos.includes("PM");
    var manha = segundos.includes("AM");

    if (manha && tempoArray[0] == 12) {
        tempoArray[0] = "00";
        var horaSemAM = segundos.split("AM");
        tempoArray[2] = horaSemAM[0];
    }
    if (manha && tempoArray[0] !== 12){
        var horaSemAM = segundos.split("AM");
        tempoArray[2] = horaSemAM[0];
    }
    if (tarde && tempoArray[0] == 12) {
        tempoArray[0] = "12";
        var horaSemPM = segundos.split("PM")
        tempoArray[2] = horaSemPM[0];
    }
    if (tarde && tempoArray[0] != 12) {
        var numero = Number(tempoArray[0]);
        tempoArray[0] = numero += 12;
        var horaSemPM = segundos.split("PM")
        tempoArray[2] = horaSemPM[0];
    }
    
    return tempoArray.join(":");
}

//Resolução 2, para tentar diminuir os IFs
//Horario segue um padrão de index de String, sendo o que queremos os 8 primeiros caracteres, podemos usar slice().

function timeConversion(s) {
    var arr = s.slice(0, 8).split(':');

    //para o PM
    if (s.indexOf('PM') == 8) {
        //para a hora PM
        if (arr[0] == 12) {
            arr[0] = "12";
        } else {
            arr[0] = Number(arr[0]) + 12;
        };
    }
    //para o AM
    if (s.indexOf('AM') == 8) {
        //para a hora AM
        if (arr[0] == 12) {
            arr[0] = "00";
        };
    }
    return arr.join(':');
}
