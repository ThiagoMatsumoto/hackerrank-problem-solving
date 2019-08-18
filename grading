//desafio: encontrar uma maneira de estabelecer os multiplos de 5 a partir do valor do array
//para isso podemos usar o Math.ceil que retorna um número inteiro maior ou igual ao parâmetro passado
//ex.: 37/5=7.4; Math.ceil(37/5) -> 8; ou ainda Math.ceil(71/10) -> 8

function gradingStudents(grades) {
    // Write your code here
    for (var i = 0; i < grades.length; i++){
        var multiplo = Math.ceil(grades[i] / 5) * 5;

        if (grades[i] <= 37) {
            ;                                       //--> bloco vazio ou "Do nothing"
        } else if (multiplo - grades[i] < 3) {
            grades[i] = multiplo;
        } 
    }
    return grades;
}
