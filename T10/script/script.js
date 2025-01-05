let array = [true, false, true, false, false];
let array1 = [true, true, true];
let array2 = [false, false, true, false];
// 1. Напишите метод, который принимает массив логических значений и возвращает количество значений true.
function countTrue(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            count++;
        }
    }
    return count;
}
console.log(countTrue(array));

// 2. Напишите метод, который принимает массив логических значений и возвращает true, если все элементы равны true.
function areAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]!== true) {
            return false;
        }
    }
    return true;
}
console.log(areAllTrue(array));

// 3. Напишите метод, который принимает массив логических значений и возвращает true, если хотя бы один элемент равен true.
function containsTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            return true;
        }
    }
    return false;
}
console.log(containsTrue(array));

// 4. Напишите метод, который принимает массив логических значений и возвращает массив с противоположными значениями.
function invertArray(array) {
    let invertedArray = [];
    for (let i = 0; i < array.length; i++) {
        invertedArray[i] = !array[i];
    }
    return invertedArray;
}
console.log(invertArray(array));

// 5. Напишите метод, который принимает массив логических значений и возвращает количество значений false.
function countFalse(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) {
            count++;
        }
    }
    return count;
}
console.log(countFalse(array));

// 6. Напишите метод, который принимает два массива логических значений и возвращает их логическое И (AND) поэлементно.
function andArrays(array1, array2) {
    let resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        resultArray[i] = array1[i] && array2[i];
    }
    return resultArray;       
}
console.log(andArrays(array1, array2));

// 7. Напишите метод, который принимает два массива логических значений и возвращает их логическое ИЛИ (OR) поэлементно.
function orArrays(array1, array2) {
    let resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        resultArray[i] = array1[i] || array2[i];
    }
    return resultArray;
}
console.log(orArrays(array1, array2));

// 8. Напишите метод, который принимает массив логических значений и возвращает true, если количество значений true больше, чем false.
function moreTrueThanFalse(array) {
    let countTrue = 0;
    let countFalse = 0;
    for (let value of array) {
        if (typeof value !== "boolean") {
            throw new Error("All elements in the array must be boolean values.");
            //все ли элементы массива имеют тип boolean
        }
        value ? countTrue++ : countFalse++;
    }
    return countTrue > countFalse;
}
console.log(moreTrueThanFalse(array));

// 9. Напишите метод, который принимает массив логических значений и возвращает индекс первого значения true.
function firstTrueIndex(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            return i;
        }
    }
    return -1;
}
console.log(firstTrueIndex(array));

// 10. Напишите метод, который принимает массив логических значений и возвращает true, если массив симметричен (палиндром).
function isSymmetric(array) {
    let reversedArray = array.slice().reverse();
    return array.join('') === reversedArray.join('');
}
console.log(isSymmetric(array));

