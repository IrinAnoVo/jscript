let numbers = [1, 2, 3];
let array = [1, 2, -3, -4, 6, -7];
let array2 = [1, 2, 3, 4, 5];
// 1. Напишите метод, который принимает массив целых чисел и удваивает каждый его элемент.
function doubleArrayElements(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = numbers[i];
        numbers[i] = sum * 2; 
    }
    return numbers;
}
console.log(doubleArrayElements(numbers));

// 2. Напишите метод, который принимает массив целых чисел и
// возвращает массив только с положительными числами.
function filterPositiveNumbers(array) {
    let positiveNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positiveNumbers.push(array[i]);
        }
    }
    return positiveNumbers;
}
console.log(filterPositiveNumbers(array));

// 3. Напишите метод, который принимает два массива
// целых чисел и возвращает их объединение.
function mergeArrays(array, array2) {
    let mergeArray = array.concat(array2);
    return mergeArray;      
}
console.log(mergeArrays(array, array2));
 
//4. Напишите метод, который принимает массив целых
// чисел и возвращает количество уникальных элементов.
function countUniqueElements(array) {
    return new Set(array).size;    
}
console.log(countUniqueElements(array));
    
// 5. Напишите метод, который принимает массив целых
// чисел и возвращает новый массив, содержащий квадраты элементов исходного массива.
function squareArrayElements(array) {
    let square = [];
    for (let i = 0; i < array.length; i++) {
        square.push(array[i] * array[i]);
    }
    return square;   
}
console.log(squareArrayElements(array));

// 6. Напишите метод, который принимает массив целых чисел и возвращает второй по величине элемент.
function findSecondLargest(array) {
    let max = array[0];
    let secondMax = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            secondMax = max;
            max = array[i];
        } else if (array[i] > secondMax && array[i] < max) {
            secondMax = array[i];
        }
    }
    return secondMax;    
}
console.log(findSecondLargest(array));

// 7. Напишите метод, который принимает массив целых чисел и
// возвращает true, если массив содержит заданное число.
function containsNumber(array,number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return true;
        }
        return false;
    }       
}
let number = 5;
console.log(containsNumber(array, number));

// 8. Напишите метод, который принимает массив целых чисел
// и заменяет все отрицательные числа на 0.
function replaceNegativesWithZero(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}
console.log(replaceNegativesWithZero(array));

// 9. Напишите метод, который принимает массив целых
// чисел и возвращает индекс первого вхождения заданного числа.
function findFirstIndex(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i;
        }
    }
    return -1;
}
console.log(findFirstIndex(array, number));

// 10. Напишите метод, который принимает массив целых 
// чисел и возвращает true, если в массиве нет повторяющихся элементов.
function hasNoDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return false;
            }
        }
    }
    return true;       
}
console.log(hasNoDuplicates(array));
