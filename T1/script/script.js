// 1. Напишите метод, который принимает два целых числа и возвращает их сумму.
     console.log('Hello')
     //let num1 = Number(prompt('enter number'));
     //let num2 = Number(prompt('enter number'));
    function add(num1, num2) {   
        console.log(num1 + num2)    
    }
    console.log(add(4, 5))
   
    // 2. Напишите метод, который принимает два числа и возвращает их разность.
    function subtract(num1, num2) {
        console.log(num1 - num2)
    }

    // 3. Напишите метод, который принимает два числа и возвращает их произведение.
    function multiply(num1, num2) {
        console.log(num1 * num2)
    }

    // 4. Напишите метод, который принимает два числа и возвращает их частное.
    function divide(num1, num2) {
    console.log(num1 / num2)        
    }

    // 5. Напишите метод, который принимает число и возвращает его квадрат.
    function square(num1) {
        console.log(num1 ** 2)
    }

    // 6. Напишите метод, который принимает три числа и возвращает их среднее арифметическое.
    function average(num1, num2, num3) {
        console.log((num1 + num2 + num3) / 3)
    }

    // 7. Напишите метод, который принимает два числа и возвращает остаток от их деления.
    function modulus(num1, num2) {
        console.log(num1 % num2)
    }

    // 8. Напишите метод, который принимает два числа и возвращает большее из них.
    function max(num1, num2) {
        let max = 0;
        if (num1 > num2) {
            max = num1;
        } else {
            max = num2;
        }
        console.log(max)
    }

    /// 9. Напишите метод, который принимает два числа и возвращает меньшее из них.
    function min(num1, num2) {
        let min = 0;
        if (num1 < num2) {
            min = num1;
        } else {
            min = num2;
        }
        console.log(min);
    }

    // 10. Напишите метод, который принимает число и проверяет, является ли оно четным.
    // Возвращает true, если число четное, и false, если нечетное.
    function isEven(num1) {
        if (num1 % 2 == 0) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
    console.log(isEven(6))