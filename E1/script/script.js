// 1. Напишите метод, который принимает два массива строк одинаковой длины и возвращает массив,
//содержащий строки, составленные из соответствующих строк двух массивов в обратном порядке.
let array1 = ["a", "b", "c", "d"];
let array2 = ["a", "b", "c", "d"];
function combineReversedStrings(array1, array2) {
let resultArray = [];
    for (let i = array1.length - 1; i >= 0; i--) {
        resultArray.push(array1[i] + array2[i]);
    }
    return resultArray;
}
console.log(combineReversedStrings(array1, array2)); // ["dd", "cc", "bb", "aa"]

// 2. Напишите метод, который принимает массив целых чисел и массив строк,
// и возвращает количество строк, чья длина больше, чем соответствующее число в массиве чисел.
let numArray = [1, 2, 3];
let strArray = ["apple", "banana", "cherry", "date"];
function countStringsLongerThanNumbers(numArray, strArray) {
let count = 0;
    for (let i = 0; i < Math.min(numArray.length, strArray.length); i++) {
        if (strArray[i].length > numArray[i]) {
            count++;
        }
    }
    return count;
}
console.log(countStringsLongerThanNumbers(numArray, strArray)); // 3

// 3. Напишите метод, который принимает массив символов и массив строк,
// и возвращает массив, где строки содержат только символы из соответствующего элемента массива символов.
let charArray = ["a", "n?", "1r"];
let stringArray = ["apple", "banana", "cherry", "date"];
function filterStringsByAllowedChars(charArray, stringArray) {
    let result = [];
    for (let i = 0; i < Math.min(charArray.length, stringArray.length); i++) {
        // Преобразуем charArray[i] в массив допустимых символов
        let allowedChars = new Set(charArray[i].split(""));    
        // Фильтруем строку, оставляя только символы из allowedChars
        let filteredString = stringArray[i]
            .split("")
            .filter(char => allowedChars.has(char))
            .join("");
        result.push(filteredString);
    }
    return result;
}
console.log(filterStringsByAllowedChars(charArray, stringArray)); // ["a", "nn", "rr"]

// 4. Напишите метод, который принимает два массива целых чисел одинаковой длины
// и возвращает массив, содержащий разность квадратов соответствующих чисел.
let numarray1 = [4, 6];
let numarray2 = [2, 3];
function getDifferenceOfSquares(numarray1, numarray2) {
    let result = [];
    for (let i = 0; i < Math.min(numarray1.length, numarray2.length); i++) {
        result.push(Math.pow(numarray1[i], 2) - Math.pow(numarray2[i], 2));
    }
    return result;
}
console.log(getDifferenceOfSquares(numarray1, numarray2)); // [12, 27]

// 5. Напишите метод, который принимает массив логических значений и массив строк,
// и возвращает массив строк, где каждое значение true добавляет "(valid)" к соответствующей строке.
let boolArray = [true, false, false];
let str1Array = ["apple", "banana", "cherry"];
function addValidToStrings(boolArray, str1Array) {
    let result = [];
    for (let i = 0; i < Math.min(boolArray.length, str1Array.length); i++) {
        if (boolArray[i]) {
            result.push(str1Array[i] + "(valid)");
        } else {
            result.push(str1Array[i]);
        }
    }
    return result;
}
console.log(addValidToStrings(boolArray, str1Array)); // ['apple(valid)', 'banana', 'cherry']

// 6. Напишите метод, который принимает два массива строк одинаковой длины
// и возвращает массив строк, где каждая строка — это объединение строк из обоих массивов с добавлением их длин.
let array3 = ["a", "b"];
let array4 = ["c", "d"];
function combineStringsAndLengths(array1, array2) {
    let result = [];
    for (let i = 0; i < Math.min(array3.length, array4.length); i++) {
        result.push(array3[i] + array4[i] + array3[i].length + array4[i].length);
    }
    return result;
}
console.log(combineStringsAndLengths(array3, array4)); // ["ac11", "bd11"]

// 7. Напишите метод, который принимает массив чисел с плавающей точкой и массив целых чисел,
// и возвращает массив, содержащий произведения соответствующих элементов.
let floatArray = [1.5, 2.3, 4.1];
let numberArray = [2, 3, 1, 5];
function multiplyArrays(floatArray, intArray) {
    if (floatArray.length !== intArray.length) {
        //throw new Error("Массивы должны быть одинаковой длины");
    }
    return floatArray.map((num, index) => num * intArray[index]);// Вычисляем произведения соответствующих элементов
}
console.log(multiplyArrays(floatArray, numberArray)); // [3.0, 6.9, 3.7, 20.5]

// 8. Напишите метод, который принимает два массива символов и возвращает массив символов,
// которые присутствуют в обоих массивах.
let array5 = ["a", "b", "c"];
let array6 = ["b", "c", "d"];
function getCommonChars(array5, array6) {
    return array5.filter(char => array6.includes(char));
}
console.log(getCommonChars(array5, array6)); // ["b", "c"]

// 9. Напишите метод, который принимает массив строк и массив чисел,
// и возвращает true, если все строки массива имеют длину, равную соответствующему числу.
let stringArray2 = ["apple", "banana", "cherry"];
let numberArray2 = [5, 6, 6];
function checkStringLengths(stringArray, numberArray) {
    return stringArray.every((str, index) => str.length === numberArray[index]);
}
console.log(checkStringLengths(stringArray2, numberArray2)); // true

// 10. Напишите метод, который принимает два массива строк и возвращает строку,
//7 содержащую чередующиеся элементы из двух массивов.
let array7 = ["ab", "bc", "ce"];
let array8 = ["df", "fg"];
function combineStrings(array1, array2) {
    let result = "";
    for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
        result += array1[i] + array2[i];
    }
    return result;
}
console.log(combineStrings(array7, array8)); // "abdfbcfg" элементы без пары не выводится

