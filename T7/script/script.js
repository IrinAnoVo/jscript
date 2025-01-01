let array = ["aa", "ba", "c", "d1", "e?", "c"];
// 1. Напишите метод, который принимает массив строк и возвращает массив строк, отсортированный в лексикографическом порядке.
function sortArray(array) {
    return array.sort();
}
console.log(sortArray(array));

// 2. Напишите метод, который принимает массив строк и возвращает самую часто встречающуюся строку.
function findMostFrequentString(array) {
    let frequent = {};
    let maxFrequent = 0;
    for (let i = 0; i < array.length; i++) {
        let count = (frequent[array[i]] || 0) + 1;
        frequent[array[i]] = count;
        if (count > maxFrequent) {
            maxFrequent = count;
        }
    }
    let mostFrequentStrings = [];
    for (let key in frequent) {
        if (frequent[key] === maxFrequent) {
            mostFrequentStrings.push(key);
        }
    }
    return mostFrequentStrings;
}
console.log(findMostFrequentString(array));

// 3. Напишите метод, который принимает массив строк и возвращает массив только уникальных строк.
function getUniqueStrings(array) {
    let uniqueStrings = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueStrings.indexOf(array[i]) === -1) {
            uniqueStrings.push(array[i]);
        }
    }
    return uniqueStrings;
}
console.log(getUniqueStrings(array));

// 4. Напишите метод, который принимает два массива строк и возвращает массив строк, которые присутствуют в обоих массивах.
function findCommonStrings(array1, array2) {
    let commonStrings = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i])!== -1) {
            commonStrings.push(array1[i]);
        }
    }
    return commonStrings;
}
let array1 = ["mur", "gav", "mee", "bee", "pip", "kvak"];
let array2 = ["bee", "kuku", "kvak", "muu"];
console.log(findCommonStrings(array1, array2));

// 5. Напишите метод, который принимает массив строк и возвращает массив строк, которые являются палиндромами.
function findPalindromes(array) { 
    let palindromes = [];
    for (let i = 0; i < array.length; i++) {
        let reversed = array[i].split('').reverse().join('');
        if (array[i] === reversed) {
            palindromes.push(array[i]);
        }
    }
    return palindromes;
}
console.log(findPalindromes(array));

// 6. Напишите метод, который принимает массив строк и удаляет строки, содержащие заданное слово.
function removeStringsContainingWord(array, word) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].indexOf(word) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;  
}
let word = "a";
console.log(removeStringsContainingWord(array, word));

// 7. Напишите метод, который принимает массив строк и возвращает строку с наибольшим количеством гласных.
function findStringWithMostVowels(array) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowels = 0;
    let stringWithMostVowels = "";
    for (let i = 0; i < array.length; i++) {
        let vowelCount = 0;
        for (let j = 0; j < array[i].length; j++) {
            if (vowels.includes(array[i][j].toLowerCase())) {
                vowelCount++;
            }
        }
        if (vowelCount > maxVowels) {
            maxVowels = vowelCount;
            stringWithMostVowels = array[i];
        }
    }
    return stringWithMostVowels;
}
console.log(findStringWithMostVowels(array));

// 8. Напишите метод, который принимает массив строк и возвращает массив строк, содержащих только буквы (без цифр или специальных символов).
function filterAlphabeticStrings(array) {
    let alphabeticStrings = [];
    for (let i = 0; i < array.length; i++) {
        let isAlphabetic = /^[a-zA-Z]+$/.test(array[i]);
        if (isAlphabetic) {
            alphabeticStrings.push(array[i]);
        }
    }
    return alphabeticStrings;
}
console.log(filterAlphabeticStrings(array));

// 9. Напишите метод, который принимает массив строк и возвращает массив строк, где каждая строка перевернута (reverse).
function reverseEachString(array) {
    let reversedStrings = [];
    for (let i = 0; i < array.length; i++) {
        let reversed = array[i].split('').reverse().join('');
        reversedStrings.push(reversed);
    }
    return reversedStrings;
}
console.log(reverseEachString(array));

// 10. Напишите метод, который принимает массив строк и возвращает массив строк, сгруппированных по их длине (каждая группа отдельный элемент массива).
function groupStringsByLength(array) {
    let groups = {};
    for (let i = 0; i < array.length; i++) {
        let length = array[i].length;
        if (!groups[length]) {
            groups[length] = [];
        }
        groups[length].push(array[i]);
    }
    let groupedStrings = [];
    for (let length in groups) {
        groupedStrings.push(groups[length]);
    }
    return groupedStrings;
}
console.log(groupStringsByLength(array));
