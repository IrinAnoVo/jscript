let chararray = ["1", "b", "%c", "d d", "Fe", "Fe"];
//1. Напишите метод, который принимает массив символов и возвращает массив уникальных символов.
function getUniqueCharacters(chararray) {
    let uniqueArray = [];
    for (let i = 0; i < chararray.length; i++) {
        if (uniqueArray.indexOf(chararray[i]) === -1) {
            uniqueArray.push(chararray[i]);
        }
    }
    return uniqueArray;  
    // return Array.from(new Set(chararray)); // можно использовать Set для уникальности
}
console.log(getUniqueCharacters(chararray));

// 2. Напишите метод, который принимает массив символов и возвращает количество согласных букв.
function countConsonants(chararray) {
    let consonantsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < chararray.length; i++) {
        if (!vowels.includes(chararray[i])) {
            consonantsCount++;
        }
    }
    return consonantsCount;  
    // return chararray.filter(char =>!vowels.includes(char)).length; // можно использовать filter для упрощения.
}
console.log(countConsonants(chararray));

// 3. Напишите метод, который принимает массив символов и возвращает массив символов без пробелов.
function removeSpaces(chararray) {
    let filteredArray = [];
    for (let i = 0; i < chararray.length; i++) {
        if (chararray[i]!=='') {
            filteredArray.push(chararray[i]);
        }
    }
    return filteredArray;  
    // return chararray.filter(char => char!==''); // можно использовать filter для упрощения.
}
console.log(removeSpaces(chararray));

// 4. Напишите метод, который принимает массив символов и возвращает массив, содержащий только буквы.
function filterLetters(chararray) {
    let filteredArray = [];
    for (let i = 0; i < chararray.length; i++) {
        if (chararray[i].match(/[a-zA-Z]/)) {
            filteredArray.push(chararray[i]);
        }
    }
    return filteredArray;  
    // return chararray.filter(char => char.match(/[a-zA-Z]/)); // можно использовать filter для упрощения.
}
console.log(filterLetters(chararray));
    
// 5. Напишите метод, который принимает массив символов и возвращает самое часто встречающееся значение.
function findMostFrequentChar(chararray) {
    let charCountMap = {};
    let maxCount = 0;
    let mostFrequentChar;   
    for (let i = 0; i < chararray.length; i++) {
        if (charCountMap[chararray[i]] === undefined) {
            charCountMap[chararray[i]] = 1;
        } else {
            charCountMap[chararray[i]]++;
        }
        if (charCountMap[chararray[i]] > maxCount) {
            maxCount = charCountMap[chararray[i]];
            mostFrequentChar = chararray[i];
        }
    }
    return mostFrequentChar;       
}
console.log(findMostFrequentChar(chararray));

// 6. Напишите метод, который принимает массив символов и возвращает массив, где каждый символ увеличен на 1 в ASCII-коде.
function shiftCharactersByOne(chararray) {
    let shiftedArray = [];
    for (let i = 0; i < chararray.length; i++) {
        shiftedArray.push(String.fromCharCode(chararray[i].charCodeAt(0) + 1));
    }
    return shiftedArray;
}
console.log(shiftCharactersByOne(chararray));

// 7. Напишите метод, который принимает два массива символов и возвращает их объединение в один массив.
function mergeCharArrays(chararray1, chararray2) {
    let mergedArray = chararray1.concat(chararray2);
    return mergedArray;  
    // return [...chararray1,...chararray2]; // можно использовать spread оператор для объединения массивов
}
let chararray1 = ["2", "l", "m"];
let chararray2 = ["1!", "2", "l"];
console.log(mergeCharArrays(chararray1, chararray2));

// 8. Напишите метод, который принимает массив символов и возвращает true, если все символы являются буквами.
function areAllLetters(chararray) {
    for (let i = 0; i < chararray.length; i++) {
        if (!chararray[i].match(/[a-zA-Z]/)) {
            return false;
        }
    }
    return true;  
    // return chararray.every(char => char.match(/[a-zA-Z]/)); // можно использовать every для упрощения.
}
console.log(areAllLetters(chararray));

// 9. Напишите метод, который принимает массив символов и возвращает строку, составленную из символов массива.
function convertToString(chararray) {
    let result = '';
    for (let i = 0; i < chararray.length; i++) {
        result += chararray[i];
    }
    return result;  
    // return chararray.join(''); // можно использовать join для упрощения.
}
console.log(convertToString(chararray));

// 10. Напишите метод, который принимает массив символов и возвращает массив, в котором дубликаты заменены на символ '_'.
function replaceDuplicatesWithUnderscore(chararray) {
    let uniqueArray = [];
    for (let i = 0; i < chararray.length; i++) {
        if (uniqueArray.indexOf(chararray[i]) === -1) {
            uniqueArray.push(chararray[i]);
        } else {
            uniqueArray[uniqueArray.indexOf(chararray[i])] = '_';
        }
    }
    return uniqueArray;  
    // return Array.from(new Set(chararray)).map(char => char === '_'? '_' : char); // можно использовать Set для уникальности и map для замены дубликатов на '_'
}
console.log(replaceDuplicatesWithUnderscore(chararray));
