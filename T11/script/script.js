let array = [true, false, true, false, false];
let array1 = [true, true, true];
let array2 = [false, false, true, false];
// 1. Напишите метод, который принимает массив логических значений и возвращает количество значений true.
function countTrue(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            count++;
        }
    }
    return count;
}
console.log(countTrue(array));

// 2. Напишите метод, который принимает массив логических значений и возвращает true, если все элементы равны true.
function areAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            return false;
        }
    }
    return true;
}
console.log(areAllTrue(array));

// 3. Напишите метод, который принимает массив логических значений и возвращает true, если хотя бы один элемент равен true.
function containsTrue(barray) {
    for (let i = 0; i < barray.length; i++) {
        if (barray[i]) {
            return true;
        }
    }
    return false;
}
console.log(containsTrue(array));

// 4. Напишите метод, который принимает массив логических значений и возвращает массив с противоположными значениями.
function invertArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(!array[i]);
    }
    return result;
}
console.log(invertArray(array));

// 5. Напишите метод, который принимает массив логических значений и возвращает количество значений false.
function countFalse(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            count++;
        }
    }
    return count;
}
console.log(countFalse(array));

// 6. Напишите метод, который принимает два массива логических значений и возвращает их логическое И (AND) поэлементно.
function andArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] && array2[i]);
    }
    return result;
}
console.log(andArrays(array1, array2));

// 7. Напишите метод, который принимает два массива логических значений и возвращает их логическое ИЛИ (OR) поэлементно.
function orArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] || array2[i]);
    }
    return result;
}
console.log(orArrays(array1, array2));

// 8. Напишите метод, который принимает массив логических значений и возвращает true, если количество значений true больше, чем false.
function moreTrueThanFalse(array) {
}

// 9. Напишите метод, который принимает массив логических значений и возвращает индекс первого значения true.
function firstTrueIndex(array) {
}

// 10. Напишите метод, который принимает массив логических значений и возвращает true, если массив симметричен (палиндром).
function isSymmetric(array) {
}