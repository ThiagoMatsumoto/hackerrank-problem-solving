import java.util.Arrays;

/**
 * Não há como saber qual valor alterar ao achar somas diferentes nas linhas,
 * colunas e diagonais. Numa matriz 3x3 há um número limite de quadrados mágicos
 * perfeitos (8 ao todo). Portanto, para resolução desse problema, precisamos
 * saber como formar esses quadrados.
 * https://www.hackerrank.com/challenges/magic-square-forming/forum
 * 
 * No forum, um usuário mostrou que nos quadrados mágicos: 
 * - o centro de todos os quadrados possíveis tem que ser 5; 
 * - a soma de qualquer linha, coluna e diagonal sempre será 15.
 * 
 * Assim, podemos determinar as possíveis linhas, colunas e diagonais:
 * 
 * 9 5 1 
 * 7 5 3 
 * 2 5 8 
 * 4 5 6 
 * 2 9 4 
 * 6 1 8 
 * 6 7 2 
 * 8 3 4
 * 
 * A celula central deve aparecer no meio da coluna do meio, da linha do meio e
 * ambas diagonais. Ou seja, um número que aparece 4 vezes nessas combinações, o
 * 5. De maneira similar, os números dos cantos devem aparecer na linha, coluna
 * e diagonal. Ou seja, um número que aparece 3x, os numeros 2, 4, 6 e 8.
 * Formamos, assim, um esboço: 
 * 2 _ 4 
 * _ 5 _ 
 * 6 _ 8
 * 
 * Então as células dos cantos da linha e coluna do meio, são numeros que
 * aparecem 2x. Ou seja, 1, 3, 7 e 9. Podendo ser formado: 
 * 2 9 4 
 * 7 5 3 
 * 6 1 8
 * 
 * A partir disso podemos refletir esse quadrado horizontal e verticalmente ou
 * rotacionar seus elementos, obtendo os 8 quadrados perfeitos.
 * 
 * Com isso, podemos fazer uma comparação do input com todos os 8 quadrados.
 * 
 * Criamos um array para conter os valores absolutos de todas as comparações
 * para no fim ordenar o array e pegar o menor valor.
 * 
 * Criamos um loop para fazer essa comparação e manter os valores da diferença
 * absoluta.
 *  
 */

public class magic_square{

    static int formingMagicSquare(int[][] s){
        int custo[] = {0,0,0,0,0,0,0,0};
        int quadradosMagicos[][] = {
            {4,9,2,3,5,7,8,1,6},
            {4,3,8,9,5,1,2,7,6},
            {2,9,4,7,5,3,6,1,8},
            {2,7,6,9,5,1,4,3,8},
            {8,1,6,3,5,7,4,9,2},
            {8,3,4,1,5,9,6,7,2},
            {6,7,2,1,5,9,8,3,4},
            {6,1,8,7,5,3,2,9,4},
        };

        for(int i = 0; i < 8; i++){
            int j = 0;
            for(int k = 0; k < 3; k++){
                for(int l = 0; l < 3; l++){
                    custo[i] = custo[i]+Math.abs(quadradosMagicos[i][j]-s[k][l]);
                    j++;
                }
            }
        }
        Arrays.sort(custo);
    
        return custo[0];
    }

    public static void main(String[] args){
        int[][] s = {
            {4,9,2},
            {3,5,7},
            {8,1,5}
        };

        int resultado = formingMagicSquare(s);
        System.out.println(resultado);
    }
}
