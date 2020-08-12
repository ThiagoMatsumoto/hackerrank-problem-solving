function countApplesAndOranges(s, t, a, b, apples, oranges) {

    var totalApples = 0;
    var totalOranges = 0;

    for (var i = 0; i < apples.length; i++){
        var distanciaAppleTree = a + apples[i];

        if (distanciaAppleTree >= s && distanciaAppleTree <= t) {
            totalApples++;
        } 
    }
    for (var j = 0; j < oranges.length; j++){
        var distanciaOrangeTree = b + oranges[j];

        if (distanciaOrangeTree <= t && distanciaOrangeTree >= s) {
            totalOranges++;
        }
    }

    console.log(totalApples);
    console.log(totalOranges);

}
