// 1. Напишите метод, который принимает массив целых чисел и возвращает его длину.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function getArrayLength(array) {
    for (let i = 0; i <= array.length; i++) {
        if (i === array.length - 1) {
            return i + 1;
        } else {
            continue;
        }
    }    
}
    console.log(getArrayLength(array));

// 2. Напишите метод, который принимает массив целых чисел и выводит его элементы в консоль.   
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
    return array;
    } 
}
console.log(array);

// 3. Напишите метод, который принимает массив целых чисел и возвращает сумму его элементов.
function sumArrayElements(array) {
    let sum = 0; 
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];         
    }
    return sum;
}
console.log(sumArrayElements(array));

// 4. Напишите метод, который принимает массив целых чисел и возвращает максимальный элемент.
let iarray = [1, 2, 3, 6, 7, 8, 12, 10];
function findMaxElement(iarray) {
   let max = iarray[0];
    for (let i = 1; i < iarray.length; i++) {
        if (iarray[i] > max) {
            max = iarray[i];
        }
    }
    return max;
}
console.log(findMaxElement(iarray));

//5. Напишите метод, который принимает массив целых чисел и возвращает минимальный элемент.
    //function findMinElement(array) {
        // TODO: реализовать метод
        //return 0;
 
// 6. Напишите метод, который принимает массив целых чисел и возвращает
       // * новый массив, содержащий только чётные элементы. 
        //public static int[] filterEvenNumbers(int[] array) {
        // TODO: реализовать метод
        //return new int[0];
    //}

    /**
     * 7. Напишите метод, который принимает массив целых чисел и
     * возвращает массив в обратном порядке.
     */
    //public static int[] reverseArray(int[] array) {
        // TODO: реализовать метод
        //return new int[0];
    //}

    /**
     * 8. Напишите метод, который принимает массив целых чисел и возвращает true,
     * если массив отсортирован по возрастанию.
     */
    //public static boolean isArraySorted(int[] array) {
        // TODO: реализовать метод
        //return false;
    //}

    /**
     * 9. Напишите метод, который принимает массив целых чисел и возвращает
     * среднее арифметическое его элементов.
     */
    //public static double calculateAverage(int[] array) {
        // TODO: реализовать метод
        //return 0.0;
    //}

    /**
     * 10. Напишите метод, который принимает массив целых чисел и
     * возвращает количество чётных чисел в массиве.
     */
    //public static int countEvenNumbers(int[] array) {
        // TODO: реализовать метод
        //return 0;
    //}

    //public static void main(String[] args) {
        // Пример вызовов методов (после их реализации)
        // int[] exampleArray = {1, 2, 3, 4, 5};
        // System.out.println(getArrayLength(exampleArray));
    