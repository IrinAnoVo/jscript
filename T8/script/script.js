let chararray = ["1", "b", "%c", "d d", "Fe"];
// 1. Напишите метод, который принимает массив символов и возвращает его длину.
function getArrayLength(chararray) {
    return chararray.length;
}
console.log(getArrayLength(chararray));

// 2. Напишите метод, который принимает массив символов и выводит его элементы в консоль.
function printArray(chararray) {
    for (let i = 0; i < chararray.length; i++) {
        console.log(chararray[i]);
    }
}
console.log(printArray(chararray));

// 3. Напишите метод, который принимает массив символов и возвращает первый символ.
function getFirstElement(chararray) {
    return chararray[0];
}
console.log(getFirstElement(chararray));

// 4. Напишите метод, который принимает массив символов и возвращает последний символ.
function getLastElement(chararray) {
    return chararray[chararray.length - 1];
}
console.log(getLastElement(chararray));

// 5. Напишите метод, который принимает массив символов и возвращает массив в обратном порядке.
function reverseArray(chararray) {
    let newArray = [];
    for (let i = chararray.length - 1; i >= 0; i--) {
        newArray.push(chararray[i]);
    }
    return newArray;
}
console.log(reverseArray(chararray));

// 6. Напишите метод, который принимает массив символов и возвращает количество гласных букв в массиве.
function countVowels(chararray) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < chararray.length; i++) {
        if (vowels.includes(chararray[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
console.log(countVowels(chararray));

// 7. Напишите метод, который принимает массив символов и заменяет все буквы на заглавные.
function toUpperCase(chararray) {
    for (let i = 0; i < chararray.length; i++) {
        if (chararray[i] >= "a" && chararray[i] <= "z") {
            chararray[i] = chararray[i].toUpperCase();
        }
    }
    return chararray;
}
console.log(toUpperCase(chararray));

// 8. Напишите метод, который принимает массив символов и проверяет, является ли он палиндромом.
function isPalindrome(chararray) {
    let reversedArray = reverseArray(chararray);
    for (let i = 0; i < chararray.length; i++) {
        if (chararray[i]!== reversedArray[i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(chararray));

// 9. Напишите метод, который принимает массив символов и возвращает количество пробелов в массиве.
function countSpaces(chararray) {
    let count = 0;
    for (let i = 0; i < chararray.length; i++) {
        if (chararray[i] === " ") {
            count++;
        }
    }
    return count;
}
console.log(countSpaces(chararray));

// 10. Напишите метод, который принимает массив символов и заменяет все цифры на символ '*'.
function replaceDigitsWithAsterisk(chararray) {
    for (let i = 0; i < chararray.length; i++) {
        if (chararray[i] >= "0" && chararray[i] <= "9") {
            chararray[i] = "*";
        }
    }
    return chararray;
}
console.log(replaceDigitsWithAsterisk(chararray));
