 /**
     *
     * 1. Создайте базовый класс "Person" с полями:
     *    - id (уникальный идентификатор, тип int)
     *    - name (имя, тип String)
     *    - email (электронная почта, тип String)
     *
     *    Добавьте:
     *    - Конструктор по умолчанию
     *    - Конструктор с параметрами для всех полей
     *    - Геттеры и сеттеры для каждого поля
     *    - Метод toString для представления объекта в строковом виде
     *
     * 2. Создайте класс "Employee", который наследуется от "Person" и добавьте поля:
     *    - position (должность, тип String)
     *    - salary (зарплата, тип double)
     *
     *    Добавьте:
     *    - Конструктор по умолчанию
     *    - Конструктор с параметрами для всех полей, включая поля базового класса
     *    - Геттеры и сеттеры для каждого нового поля
     *    - Метод toString, который также выводит информацию из базового класса
     *
     * 3. Создайте класс "Manager", который наследуется от "Employee" и добавьте поля:
     *    - teamSize (размер команды, тип int)
     *    - bonus (размер бонуса, тип double)
     *
     *    Добавьте:
     *    - Конструктор по умолчанию
     *    - Конструктор с параметрами для всех полей, включая поля базового класса
     *    - Геттеры и сеттеры для каждого нового поля
     *    - Метод calculateTotalSalary(), который возвращает зарплату с учётом бонуса
     *    - Метод toString, который также выводит информацию из базового класса
     *
     * 4. В основном классе создайте несколько объектов классов "Person", "Employee" и "Manager".
     *    Проверьте работу всех методов, включая наследование, и выведите информацию в консоль.
     */
    // 1. Базовый класс "Person"
class Person {
    constructor(id = 0, name = "", email = "") {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Геттеры и сеттеры
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    // Метод toString
    toString() {
        return `Person [id=${this.id}, name=${this.name}, email=${this.email}]`;
    }
}

// 2. Класс "Employee", который наследуется от "Person"
class Employee extends Person {
    constructor(id = 0, name = "", email = "", position = "", salary = 0.0) {
        super(id, name, email);  // Вызов конструктора базового класса
        this.position = position;
        this.salary = salary;
    }

    // Геттеры и сеттеры
    getPosition() {
        return this.position;
    }

    setPosition(position) {
        this.position = position;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    // Метод toString
    toString() {
        return `${super.toString()}, Employee [position=${this.position}, salary=${this.salary}]`;
    }
}

// 3. Класс "Manager", который наследуется от "Employee"
class Manager extends Employee {
    constructor(id = 0, name = "", email = "", position = "", salary = 0.0, teamSize = 0, bonus = 0.0) {
        super(id, name, email, position, salary);  // Вызов конструктора родительского класса
        this.teamSize = teamSize;
        this.bonus = bonus;
    }

    // Геттеры и сеттеры
    getTeamSize() {
        return this.teamSize;
    }

    setTeamSize(teamSize) {
        this.teamSize = teamSize;
    }

    getBonus() {
        return this.bonus;
    }

    setBonus(bonus) {
        this.bonus = bonus;
    }

    // Метод для вычисления общей зарплаты с бонусом
    calculateTotalSalary() {
        return this.salary + this.bonus;
    }

    // Метод toString
    toString() {
        return `${super.toString()}, Manager [teamSize=${this.teamSize}, bonus=${this.bonus}]`;
    }
}

// 4. Пример использования классов
const person1 = new Person(1, "John Doe", "john@example.com");
const employee1 = new Employee(2, "Jane Smith", "jane@example.com", "Developer", 5000);
const manager1 = new Manager(3, "Alice Johnson", "alice@example.com", "Project Manager", 7000, 5, 1500);

console.log(person1.toString());  // Вывод информации о Person
console.log(employee1.toString());  // Вывод информации о Employee
console.log(manager1.toString());  // Вывод информации о Manager
console.log(`Manager's Total Salary: ${manager1.calculateTotalSalary()}`);  // Вывод общей зарплаты с бонусом

/*1.Класс Person содержит уникальный идентификатор (id), имя (name) и электронную почту (email).
* 2.Класс Employee наследует от Person и добавляет должность (position) и зарплату (salary).
* 3.Класс Manager наследует от Employee и добавляет размер команды (teamSize) и бонус (bonus). Также есть метод calculateTotalSalary(), который возвращает общую зарплату с учётом бонуса.
* 4.В примере создаются объекты каждого из классов, и их данные выводятся с помощью метода toString.
*/