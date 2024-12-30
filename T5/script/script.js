let array = [1, 2, 3, 4, 2];
// 1. Напишите метод, который принимает массив целых чисел и возвращает все подмассивы длиной 2.   
function generateSubArrays(array) {
    let subArrays = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
           subArrays.push([array[i], array[j]]); 
        }    
    }
    return subArrays;
}
console.log(generateSubArrays(array));

// 2. Напишите метод, который принимает массив целых чисел и возвращает true, если массив является палиндромом.
function isArrayPalindrome(array) {
    let reversedArray = array.slice().reverse();
    return array.toString() === reversedArray.toString();
}
console.log(isArrayPalindrome(array));

// 3. Напишите метод, который принимает массив целых чисел и возвращает самый часто встречающийся элемент.
function findMostFrequentElement(array) {
    let frequent = {};
    let maxFrequent = 0;
    let mostFrequentElement; 
    for (let i = 0; i < array.length; i++) {
        if (frequent[array[i]] === undefined) {
            frequent[array[i]] = 1;
        } else {
            frequent[array[i]]++;
        }
        if (frequent[array[i]] > maxFrequent) {
            maxFrequent = frequent[array[i]];
            mostFrequentElement = array[i];
        }
    }
    return mostFrequentElement; 
}
console.log(findMostFrequentElement(array));

// 4. Напишите метод, который принимает массив целых чисел и
// сортирует его без использования встроенных методов сортировки.
function sortArrayManually(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
console.log(sortArrayManually(array));


// 5. Напишите метод, который принимает массив целых чисел и
// переставляет элементы массива в случайном порядке.
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
//меняем местами текущий элемент и случайный элемент в каждой итерации, пока currentIndex не станет 0
    while (0 !== currentIndex) {
//выбираем случайный индекс
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;
//меняем местами текущий элемент и случайный элемент
        array[currentIndex] = array[randomIndex];
    }
    return array;
}
console.log(shuffleArray(array));

// 6. Напишите метод, который принимает массив целых
// чисел и возвращает новый массив с уникальными элементами.
function removeDuplicates(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;  
}
console.log(removeDuplicates(array));

// 7. Напишите метод, который принимает массив целых
// чисел и возвращает его циклически сдвинутым вправо на k позиций.
function rotateArrayRight(array, k) {
// oбработка пустого массива   
   if (!array.length) return array;
// нормализация k для предотвращения лишних сдвигов
   k = k % array.length;
// если k равно 0, возвращаем массив без изменений
   if (k === 0) return array;
// разделяем массив на две части и объединяем их в новом порядке
let rightShiftArray = array.slice(-k);
let leftShiftArray = array.slice(0, array.length - k);
return rightShiftArray.concat(leftShiftArray);            
}
let k = 1; // выбранное значение сдвига
console.log(rotateArrayRight(array, k));

// 8. Напишите метод, который принимает два массива
// целых чисел и возвращает их пересечение.
function findArrayIntersection(array1,array2) {
    let intersection = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                intersection.push(array1[i]);
                break;
            }
        }
    }
    return intersection;
}
let array1 = [1, 2, 3 ,4];
let array2 = [2, 3, 4, 5];
console.log(findArrayIntersection(array1, array2));

// 9. Напишите метод, который принимает массив целых чисел и
// возвращает true, если в массиве есть дублирующиеся элементы.
function hasDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return true;
            }
        }
    }
    return false; 
}
console.log(hasDuplicates(array));

// 10. Напишите метод, который принимает массив целых чисел и
// возвращает максимальную сумму подмассива (алгоритм Кадане).
    function maxSubarraySum(array) {
        if (array.length === 0) return 0;
        let maxSoFar = array[0];
        let currentMax = array[0];
        for (let i = 1; i < array.length; i++) {
            currentMax = Math.max(array[i], currentMax + array[i]);
            maxSoFar = Math.max(maxSoFar, currentMax);
        }
        return maxSoFar;
    }
    console.log(maxSubarraySum(array));
