const array = ["mur", "gav", "mee", "bee", "pip", "kvak"];

function getArrayLength(array) {
if (!Array.isArray(array)) {
    throw new Error("Input must be an array.");
}
return array.length;
}

// 1. Напишите метод, который принимает массив строк и возвращает его длину.
function getArrayLength(array) {
    return array.length;  
}
console.log(getArrayLength(array));

// 2. Напишите метод, который принимает массив строк и выводит его элементы в консоль.
function printArray(array) {
    if (!Array.isArray(array)) {
        throw new Error("Input must be an array.");
    }
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    return array;
}
console.log(printArray(array));

// 3. Напишите метод, который принимает массив строк и возвращает первую строку.
function getFirstElement(array) {
    if (!Array.isArray(array)) {
        throw new Error("Input must be an array.");
    }
    if (array.length === 0) {
        throw new Error("Array is empty.");
    }
    return array[0];
}
console.log(getFirstElement(array));

// 4. Напишите метод, который принимает массив строк и возвращает последнюю строку.
function getLastElement(array) {
//    if (!Array.isArray(array)) {
//        throw new Error("Input must be an array.");
 //   }
////       throw new Error("Array is empty.");
 //   }
    return array[array.length - 1];   
}
console.log(getLastElement(array));


// 5. Напишите метод, который принимает массив строк и возвращает массив строк в обратном порядке.
function reverseArray(array) {
    return array.slice().reverse();  // slice() создает новый массив, reverse() меняет порядок элементов массива
}
console.log(reverseArray(array));

// 6. Напишите метод, который принимает массив строк и возвращает длину самой длинной строки.
function getLongestStringLength(array) {
    let maxLength = 0;
    for (let i = 0; i < array.length; i++) {
        maxLength = Math.max(maxLength, array[i].length);
    }
    return maxLength;
}
console.log(getLongestStringLength(array));

// 7. Напишите метод, который принимает массив строк и возвращает строку с максимальной длиной.
function getLongestString(array) {
    let maxLength = 0;
    let longestString = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
            longestString = array[i];
        }
    }
    return longestString;
}
console.log(getLongestString(array));

// 8. Напишите метод, который принимает массив строк и возвращает true, если массив содержит заданную строку.
function containsString(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true;
        }щ
    }
    return false;
}
let target = "kvak";
console.log(containsString(array, target));

// 9. Напишите метод, который принимает массив строк и возвращает количество строк, которые начинаются с заданной буквы.
function countStringsStartingWith(array, letter) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === letter) {
            count++;
        }
    }
    return count;
}
let letter = "m";
console.log(countStringsStartingWith(array, letter));

// 10. Напишите метод, который принимает массив строк и возвращает массив строк в верхнем регистре.
function convertToUpperCase(array) {
    return array.map(element => {
        if (typeof element !== "string") {
            throw new Error("All elements in the array must be strings.");
        }
        return element.toUpperCase();
    }); 
}
console.log(convertToUpperCase(array));