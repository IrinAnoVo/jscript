let array = [0, 1, 2, 3, 4, 5];
let array1 = ["d", "e", "f"];
let strArray = ["apple", "banana", "cherry"];
let array2 = ["a", "b", "c"];
let charArray = ["a", "n?", "/3"];
let boolArray = ["true", "false", "null"];
// 1. Напишите метод, который принимает массив целых чисел и массив строк, и выводит элементы двух массивов построчно.
function printArrays(array, strArray) {
    for (let i = 0; i < array.length && i < strArray.length; i++) {
        console.log(array[i], strArray[i]);
    }
    return array, strArray;
}
console.log(printArrays(array, strArray));

// 2. Напишите метод, который принимает массив целых чисел и массив строк,
// и возвращает массив строк с добавлением соответствующего числа к каждой строке.

function appendNumbersToStrings(array, strArray) {
    let result = [];
    for (let i = 0; i < array.length && i < strArray.length; i++) {
        result.push(strArray[i] + array[i]);
    }
    return result;
}
console.log(appendNumbersToStrings(array, strArray));

// 3. Напишите метод, который принимает массив целых чисел и массив логических значений,
// и возвращает количество true для чисел, больших 10.
function countTrueForLargeNumbers(array, boolArray) {
    let count = 0;
    for (let i = 0; i < array.length && i < boolArray.length; i++) {
        if (boolArray[i] && array[i] > 10) {
            count++;
        }
    }
    return count;
}
console.log(countTrueForLargeNumbers(array, boolArray));

// 4. Напишите метод, который принимает массив строк и массив символов,
// и возвращает массив строк, где к каждой строке добавлен соответствующий символ.
function concatenateStringAndChar(strArray, charArray) {
    let result = [];
    for (let i = 0; i < strArray.length && i < charArray.length; i++) {
        result.push(strArray[i] + charArray[i]);
    }
    return result;
}
console.log(concatenateStringAndChar(strArray, charArray));

// 5. Напишите метод, который принимает массив строк и массив целых чисел,
// и возвращает сумму длин всех строк, умноженных на соответствующее число.
function sumStringLengthsTimesNumbers(strArray, array) {
    let sum = 0;
    for (let i = 0; i < strArray.length && i < array.length; i++) {
        sum += strArray[i].length * array[i];
    }
    return sum;
}
console.log(sumStringLengthsTimesNumbers(strArray, array));

// 6. Напишите метод, который принимает массив целых чисел и массив строк,
// и возвращает true, если длина строки равна соответствующему числу.
function areStringLengthsEqualToNumbers(strArray, array) {
    for (let i = 0; i < strArray.length && i < array.length; i++) {
        if (strArray.length !== array.length) {
            return false; // Если массивы разной длины, возвращаем false
        }
        return strArray.every((str, index) => str.length === array[index]);
    }
}
console.log(areStringLengthsEqualToNumbers(strArray, array));

// 7. Напишите метод, который принимает массив символов и массив строк,
// и возвращает количество строк, начинающихся с соответствующего символа.
function countStringsStartingWithChar(strArray, charArray) {
    let count = 0;
    for (let i = 0; i < charArray.length && i < strArray.length; i++) {
        if (charArray[i] == strArray[0].charAt(0)) {
            count++;
        }
    }
    return count;
}
console.log(countStringsStartingWithChar(strArray, charArray));

// 8. Напишите метод, который принимает массив целых чисел и массив логических значений,
// и возвращает массив чисел, если соответствующее значение в логическом массиве равно true.
function filterNumbersByBoolean(array, boolArray) {
    let result = [];
    for (let i = 0; i < array.length && i < boolArray.length; i++) {
        if (boolArray[i] && array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(filterNumbersByBoolean(array, boolArray));

// 9. Напишите метод, который принимает два массива строк,
// и возвращает массив, содержащий строки из первого массива, которых нет во втором.
function findUniqueStrings(array1, array2) {
    // Преобразуем второй массив в Set для быстрого поиска
    const set2 = new Set(array2);
    // Фильтруем строки из первого массива, которых нет во втором
    return array1.filter(str => !set2.has(str));
}
console.log(findUniqueStrings(array1, array2));

// 10. Напишите метод, который принимает массив целых чисел и массив строк,
// и возвращает строку, составленную из строк, повторенных число раз, равное соответствующему числу.
function repeatStringsByNumbers(strArray, array) {
    let result = "";
    for (let i = 0; i < array.length && i < strArray.length; i++) {
        for (let j = 0; j < array[i]; j++) {
            result += strArray[i];
        }
    }
    return result;
}
console.log(repeatStringsByNumbers(strArray, array));

