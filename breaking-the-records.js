function breakingRecords(scores) {

    var comparadorHighest = scores[0]; 
    var comparadorLowest = scores[0];

    var highestArray = [];
    var lowestArray = [];

    for (var i = 0; i < scores.length; i++){
        if (scores[i] > comparadorHighest){
            comparadorHighest = scores[i];
            highestArray.push(comparadorHighest);
        } 
        if(scores[i] < comparadorLowest){
            comparadorLowest = scores[i];
            lowestArray.push(comparadorLowest);
        }
    }

    var resultados = [highestArray.length, lowestArray.length]

    return resultados;
}
