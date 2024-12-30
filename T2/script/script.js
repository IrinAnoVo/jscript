console.log('hello')
let number = 5354;
let numbers = [2, 3, 5, 1];
// 11. Напишите метод, который принимает массив чисел и возвращает их сумму.
function sumArray(numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
       sum = sum + numbers[i];
   }
   return sum;
}
console.log(sumArray(numbers));

// 12. Напишите метод, который принимает два числа и возводит первое в степень второго.
function power(base, exponent) {
   let result = 1;
   for (let i = 0; i < exponent; i++) {
       result = result * base;
   }
   return result;
}
let base = 3;
let exponent = 3;
console.log(power(base, exponent));

// 13. Напишите метод, который проверяет, является ли число простым.
function isPrime(number) {
   for (let i = 2; i < number; i++) {
       if (number % i == 0) {
           return false;
       }
   }
return true;
}
console.log(isPrime(number));

// 14. Напишите метод, который принимает два числа и возвращает их наибольший общий делитель (НОД).
function gcd(num1, num2) {    
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}
let num1 = 10;
let num2 = 25;
console.log(gcd(num1, num2));

// 15. Напишите метод, который принимает массив чисел и возвращает его максимальный элемент.
function maxInArray(numbers) {
   let max = numbers[0];
   for (let i = 1; i < numbers.length; i++) {
       if (numbers[i] > max) {
           max = numbers[i];
       }
   }
   return max;
}
console.log(maxInArray(numbers));

// 16. Напишите метод, который принимает массив чисел и возвращает его минимальный элемент.
function minInArray(numbers) {
   let min = numbers[0];
   for (let i = 1; i < numbers.length; i++) {
       if (numbers[i] < min) {
           min = numbers[i];
       }
   }
   return min;
}
console.log(minInArray(numbers));

// 17. Напишите метод, который проверяет, является ли число палиндромом
// (одинаково читается слева направо и справа налево).
function isPalindrome(number) {
   let palindrome = number.toString();
   let length = palindrome.length;
   for (let i = 0; i < length / 2; i++) {
       if (palindrome.charAt(i) != palindrome.charAt(length - i - 1)) {
           return false;
        }   
    }
    return true; 
}
console.log(isPalindrome(number));

// 18. Напишите метод, который возвращает n-ое число Фибоначчи.
function fibonacci(n) {
   if (n < 0) {
       throw new Error('n must be non-negative');
   }
   if (n === 0) {
       return 0;
   }
   if (n === 1) {
       return 1;
   }
   let fib1 = 0; // Начальные два
   let fib2 = 1; // числа Фибоначчи
   for (let i = 2; i <= n; i++) {
    let temp = fib1 + fib2;
       fib1 = fib2;
       fib2 = temp;
   }
   return fib2; // Возвращаем n-е число Фибоначчи
}
let n = 6;
console.log(fibonacci(n));

// 19. Напишите метод, который принимает массив чисел и сортирует его по возрастанию.
function sortArray(numbers) {
   return numbers.sort((num1, num2) => num1 - num2);
}
console.log(sortArray(numbers));

// 20. Напишите метод, который принимает два числа и возвращает их наименьшее общее кратное (НОК).
function gcd(num1, num2) {
    while (num2 !== 0) { //алгоритм Евклида, функция нахождения НОД
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}
console.log(gcd(num1, num2));

// 21. Напишите метод, который принимает два числа и возвращает их наибольший общий кратный (НОК).
function lcm(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return 0;
    }
    return Math.abs(num1 * num2) / gcd(num1, num2); //формула для НОК   
}
console.log(lcm(num1, num2));