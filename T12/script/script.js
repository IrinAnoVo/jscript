let array = [0, 1, 2, 3, 4, 5];
let array1 = ["d", "e", "f"];
let stringArray = ["apple", "banana", "cherry"];
let array2 = ["a", "b", "c"];
let charArray = ["a", "n?", "/3"];
let booleanArray = ["true", "false", "null"];
// 1. Напишите метод, который принимает массив целых чисел и массив строк, и возвращает их длины как массив из двух элементов.
function getArrayLengths(array, stringArray) {
    return [array.length, stringArray.length];
}
console.log(getArrayLengths(array, stringArray));

// 2. Напишите метод, который принимает массив строк и массив символов,
// и возвращает массив строк, каждая из которых начинается с соответствующего символа.
function filterStringsByChar(stringArray, charArray) {
    return stringArray.filter((str, index) => charArray[index] === str[0]);
}
console.log(filterStringsByChar(stringArray, charArray));

// 3. Напишите метод, который принимает массив целых чисел и массив логических значений, и возвращает сумму всех чисел, соответствующих true в логическом массиве.
function sumMatchingTrue(array, booleanArray) {
    return array.reduce((sum, num, index) => sum + (booleanArray[index]? num : 0), 0);
}
console.log(sumMatchingTrue(array, booleanArray));

// 4. Напишите метод, который принимает массив строк и массив целых чисел, и возвращает строку с самой большой длиной, если она длиннее, чем соответствующее число.
function getLongestStringIfLonger(stringArray, array) {
    return stringArray[array.indexOf(Math.max(...array))];
}
console.log(getLongestStringIfLonger(stringArray, array));

// 5. Напишите метод, который принимает массив символов и массив целых чисел, и возвращает массив символов, дублированных на значение из целого массива.
function duplicateCharsByNumbers(charArray, array) {
    return charArray.map((char, index) => char.repeat(array[index]));
}
console.log(duplicateCharsByNumbers(charArray, array));

// 6. Напишите метод, который принимает массив логических значений и массив строк, и возвращает массив строк, соответствующих true.
function getStringsMatchingTrue(booleanArray, stringArray) {
    return stringArray.filter((_, index) => booleanArray[index]);
}
console.log(getStringsMatchingTrue(booleanArray, stringArray));

// 7. Напишите метод, который принимает массив целых чисел и массив символов, и возвращает массив символов, соответствующих четным числам.
function getCharsForEvenNumbers(array, charArray) {
    return charArray.filter((_, index) => array[index] % 2 === 0);
}
console.log(getCharsForEvenNumbers(array, charArray));

// 8. Напишите метод, который принимает два массива строк и возвращает массив строк, где каждый элемент — это конкатенация строк с одинаковыми индексами из обоих массивов.
function concatenateStringArrays(array1, array2) {
    return array1.map((str, index) => str + array2[index]);
}
console.log(concatenateStringArrays(array1, array2));

// 9. Напишите метод, который принимает массив целых чисел и массив логических значений, и возвращает true, если хотя бы одно число больше 10 и соответствует true.
function hasNumberGreaterThan10MatchingTrue(array, booleanArray) {
    return array.some((num, index) => num > 10 && booleanArray[index]);
}
console.log(hasNumberGreaterThan10MatchingTrue(array, booleanArray));

// 10. Напишите метод, который принимает массив строк и массив символов, и возвращает массив строк, содержащих соответствующий символ.
function getStringsContainingChar(stringArray, charArray) {
    return stringArray.filter(str => 
        charArray.some(char => str.includes(char)));
}
console.log(getStringsContainingChar(stringArray, charArray));

