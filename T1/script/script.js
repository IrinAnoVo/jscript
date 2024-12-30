// 1. Напишите метод, который принимает два целых числа и возвращает их сумму.
console.log('Hello')
//let num1 = Number(prompt('enter number'));
//let num2 = Number(prompt('enter number'));
let num1 = 2;
let num2 = 6;
function add(num1, num2) {   
    return (num1 + num2);    
}
console.log(add(num1, num2))

// 2. Напишите метод, который принимает два числа и возвращает их разность.
function subtract(num1, num2) {
    return (num1 - num2);
}
console.log(subtract(num1, num2));

// 3. Напишите метод, который принимает два числа и возвращает их произведение.
function multiply(num1, num2) {
    return (num1 * num2);
}
console.log(multiply(num1, num2));

// 4. Напишите метод, который принимает два числа и возвращает их частное.
function divide(num1, num2) {
    return (num1 / num2);        
}
console.log(divide(num1, num2));

// 5. Напишите метод, который принимает число и возвращает его квадрат.
function square(num1) {
    return (num1 ** 2);
}
console.log(square(num1));

// 6. Напишите метод, который принимает три числа и возвращает их среднее арифметическое.
function average(num1, num2, num3) {
    return ((num1 + num2 + num3) / 3);
}
let num3 = 3;
console.log(average(num1, num2, num3));

// 7. Напишите метод, который принимает два числа и возвращает остаток от их деления.
function modulus(num1, num2) {
    return (num1 % num2);
}
console.log(modulus(num1, num2));

// 8. Напишите метод, который принимает два числа и возвращает большее из них.
function max(num1, num2) {
    let max = 0;
    if (num1 > num2) {
        max = num1;
    } else {
        max = num2;
    }
    return max;
}
console.log(max(num1, num2));

/// 9. Напишите метод, который принимает два числа и возвращает меньшее из них.
function min(num1, num2) {
    let min = 0;
    if (num1 < num2) {
        min = num1;
    } else {
        min = num2;
    }
    return min;
}
console.log(min(num1, num2));

// 10. Напишите метод, который принимает число и проверяет, является ли оно четным.
// Возвращает true, если число четное, и false, если нечетное.
function isEven(num1) {
    if (num1 % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(num1));