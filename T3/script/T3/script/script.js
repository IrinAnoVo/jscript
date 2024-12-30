// 1. Напишите метод, который принимает массив целых чисел и возвращает его длину.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getArrayLength(array) {
    for (let i = 0; i <= array.length; i++) {
        length++; 
    } 
    return length;   
}
    console.log(getArrayLength(array));

// 2. Напишите метод, который принимает массив целых чисел и выводит его элементы в консоль.   
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        array.length;
    }
    return array; 
}
console.log(printArray(array));

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
function findMinElement(iarray) {
    let min = iarray[0];
    for (let i = 1; i < iarray.length; i++) {
        if (array[i] < min) {
            min = iarray[i];
        }
    }
    return min;
}
 console.log(findMinElement(iarray));
// 6. Напишите метод, который принимает массив целых чисел и возвращает
    // новый массив, содержащий только чётные элементы.
    function filterEvenNumbers(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray; 
}
console.log(filterEvenNumbers(array));

// 7. Напишите метод, который принимает массив целых чисел и
// возвращает массив в обратном порядке.
function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}
    console.log(reverseArray(array));

// 8. Напишите метод, который принимает массив целых чисел и возвращает true,
// если массив отсортирован по возрастанию.
function isArraySorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;    
}

// 9. Напишите метод, который принимает массив целых чисел и возвращает
// среднее арифметическое его элементов.
let arrayDouble = [1.2, 2.3, 5.7, 9.1];
function calculateAverageDouble (arrayDouble) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arrayDouble.length; i++) {
        sum = sum + arrayDouble[i];
        avg = sum / arrayDouble.length;
    }
    return avg;
}
console.log(calculateAverageDouble(arrayDouble));

// 10. Напишите метод, который принимает массив целых чисел и
// возвращает количество чётных чисел в массиве.
function countEvenNumbers(array) {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
        count++; 
        } 
    } 
    return count;
}  
console.log(countEvenNumbers(array));