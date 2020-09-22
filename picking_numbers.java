import java.util.ArrayList;
import java.util.List;

/*
    Dado um array, encontrar o maior subarray em que as diferenças
    entre TODOS os elementos seja 1 (absoluto) ou 0.
    - Os elementos do array variam de 0 a 100
    - Array varia de 2 a 100 elementos

    fonte: https://www.youtube.com/watch?v=PtFAJTCKNn8&list=PLSIpQf0NbcCltzNFrOJkQ4J4AAjW3TSmA
    
    1 - Verificar os elementos de maior frequência no array. Como temos 
        o limite de 0 a 100, podemos armazenar num outro array a frequencia
        de cada elemento
    2 - Obtido essas frequências, podemos somar a frequência de ai com ai-1 ou
        ai com ai+1 (tanto faz) 
    3 - Então Para termos um array em que todo

*/


public class picking_numbers {


    public static int pickingNumbers(List<Integer> a) {
        int freq[] = new int[101]; //index 0 a 100
        int resultado = 0;
        
        for(int i = 0; i < a.size(); i++){
            int index = a.get(i); //pega o elemento da lista
            freq[index]++; //no elemento pego, soma +1 no espaço correspondente
        }

        for(int j = 1; j <= 100; j++){ //index 1 + 0; 2 + 1; 3 + 2...
            int soma = freq[j]+freq[j-1];
            if(soma > resultado){
                resultado = soma;
            }
        }
        return resultado;
    }

    public static void main(String[] args){
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(1);
        list.add(2);
        list.add(2);
        list.add(4);
        list.add(4);
        list.add(4);
        list.add(5);
        list.add(5);
        list.add(5);
        int resultado = pickingNumbers(list);
        System.out.println(resultado);
        
    }
}