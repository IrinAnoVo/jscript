
/*
 * 1. Создайте код на java script "Product" с полями:
 *    - id (уникальный идентификатор, тип int)
 *    - name (название продукта, тип String)
 *    - price (цена, тип double)
 *    - description (описание продукта, тип String)
 *   - inStock (наличие на складе, тип boolean)
 */
/* 
 * 2. Добавьте в класс "Product":
 *    - Конструктор по умолчанию
 *    - Конструктор с параметрами для всех полей
 *    - Геттеры и сеттеры для каждого поля
 *    - Метод toString для представления объекта в строковом виде
 */
// Определение класса Product
class Product {
        constructor(id, name, price, description, inStock) {
            // Проверка и инициализация полей
            if (!Number.isInteger(id)) {
                throw new Error("ID должен быть целым числом.");
            }
            if (typeof name !== "string" || name.trim() === "") {
                throw new Error("Название продукта должно быть непустой строкой.");
            }
            if (typeof price !== "number" || price < 0) {
                throw new Error("Цена должна быть положительным числом.");
            }
            if (typeof description !== "string") {
                throw new Error("Описание должно быть строкой.");
            }
            if (typeof inStock !== "boolean") {
                throw new Error("Поле inStock должно быть логическим значением.");
            }
            this.id = id;
            this.name = name;
            this.price = price;
            this.description = description;
            this.inStock = inStock;
        }
        // Геттеры и сеттеры для каждого поля
    get id() {
        return this._id;
    }

    set id(value) {
        if (!Number.isInteger(value)) {
            throw new Error("ID должен быть целым числом.");
        }
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Название продукта должно быть непустой строкой.");
        }
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (typeof value !== "number" || value < 0) {
            throw new Error("Цена должна быть положительным числом.");
        }
        this._price = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        if (typeof value !== "string") {
            throw new Error("Описание должно быть строкой.");
        }
        this._description = value;
    }

    get inStock() {
        return this._inStock;
    }

    set inStock(value) {
        if (typeof value !== "boolean") {
            throw new Error("Поле inStock должно быть логическим значением.");
        }
        this._inStock = value;
    }
        // Метод для вывода информации о продукте
        getInfo() {
                return `Продукт: ${this.name} (ID: ${this.id})\nЦена: $${this.price.toFixed(2)}
                \nОписание: ${this.description}\nВ наличии: ${this.inStock ? "Да" : "Нет"}`;
        }
        // Метод toString для представления объекта в строковом виде
        toString() {
                return `Product { id: ${this._id}, name: "${this._name}", price: ${this._price}
                , description: "${this._description}", inStock: ${this._inStock} }`;
        }
}
// Пример использования
const product = new Product(1, "Ноутбук", 999.99, "Мощный ноутбук с 16 ГБ ОЗУ и SSD 512 ГБ", true);
console.log(product.getInfo());
console.log(product.toString());

/* 3. Создайте класс "Customer" с полями:
 *    - id (уникальный идентификатор, тип int)
 *    - firstName (имя клиента, тип String)
 *    - lastName (фамилия клиента, тип String)
 *    - email (электронная почта клиента, тип String)
 *    - phoneNumber (номер телефона, тип String)
 */
/* 4. Добавьте в класс "Customer":
 *    - Конструктор по умолчанию
 *    - Конструктор с параметрами для всех полей
 *    - Геттеры и сеттеры для каждого поля
 *    - Метод toString для представления объекта в строковом виде
 */
// Определение класса Customer
class Customer {
        // Конструктор по умолчанию
        constructor(id = 0, firstName = "", lastName = "", email = "", phoneNumber = "") {
            if (!Number.isInteger(id)) {
                throw new Error("ID должен быть целым числом.");
            }
            if (typeof firstName !== "string" || firstName.trim() === "") {
                throw new Error("Имя клиента должно быть непустой строкой.");
            }
            if (typeof lastName !== "string" || lastName.trim() === "") {
                throw new Error("Фамилия клиента должна быть непустой строкой.");
            }
            if (typeof email !== "string" || (email && !email.includes("@"))) {
                throw new Error("Электронная почта должна быть действительным адресом.");
            }
            if (typeof phoneNumber !== "string" || phoneNumber.trim() === "") {
                throw new Error("Номер телефона должен быть непустой строкой.");
            }
    
            this._id = id;
            this._firstName = firstName;
            this._lastName = lastName;
            this._email = email;
            this._phoneNumber = phoneNumber;
        }
        // Геттеры и сеттеры для каждого поля
        get id() {
            return this._id;
        }
    
        set id(value) {
            if (!Number.isInteger(value)) {
                throw new Error("ID должен быть целым числом.");
            }
            this._id = value;
        }
    
        get firstName() {
            return this._firstName;
        }
    
        set firstName(value) {
            if (typeof value !== "string" || value.trim() === "") {
                throw new Error("Имя клиента должно быть непустой строкой.");
            }
            this._firstName = value;
        }
    
        get lastName() {
            return this._lastName;
        }
    
        set lastName(value) {
            if (typeof value !== "string" || value.trim() === "") {
                throw new Error("Фамилия клиента должна быть непустой строкой.");
            }
            this._lastName = value;
        }
    
        get email() {
            return this._email;
        }
    
        set email(value) {
            if (typeof value !== "string" || (value && !value.includes("@"))) {
                throw new Error("Электронная почта должна быть действительным адресом.");
            }
            this._email = value;
        }
    
        get phoneNumber() {
            return this._phoneNumber;
        }
    
        set phoneNumber(value) {
            if (typeof value !== "string" || value.trim() === "") {
                throw new Error("Номер телефона должен быть непустой строкой.");
            }
            this._phoneNumber = value;
        }
        // Метод для представления объекта в строковом виде
        toString() {
            return `Customer { id: ${this._id}, firstName: "${this._firstName}", lastName: "${this._lastName}", email: "${this._email}", phoneNumber: "${this._phoneNumber}" }`;
        }
    }
    // Пример использования
    const customer = new Customer(1, "Иван", "Иванов", "ivan.ivanov@example.com", "+1234567890");
    console.log(customer.toString());

/* 5. Создайте класс "Order" с полями:
 *    - id (уникальный идентификатор заказа, тип int)
 *    - customer (объект класса Customer)
 *    - productList (список продуктов, тип List<Product>)
 *    - totalAmount (общая сумма заказа, тип double)
 */

/* 6. Добавьте в класс "Order":
 *    - Конструктор по умолчанию
 *    - Конструктор с параметрами для всех полей
 *    - Геттеры и сеттеры для каждого поля
 *    - Метод toString для представления объекта в строковом виде
 */

/* 7. В основном классе создайте несколько объектов "Product", "Customer" и "Order".
 *    Проверьте работу всех методов, выводя информацию в консоль.
 */
// Определение класса Order
class Order {
        // Конструктор по умолчанию
        constructor(id = 0, customer = null, productList = [], totalAmount = 0.0) {
            if (!Number.isInteger(id)) {
                throw new Error("ID заказа должен быть целым числом.");
            }
            if (customer !== null && !(customer instanceof Customer)) {
                throw new Error("Параметр customer должен быть экземпляром класса Customer.");
            }
            if (!Array.isArray(productList) || !productList.every(p => p instanceof Product)) {
                throw new Error("Список продуктов должен быть массивом объектов класса Product.");
            }
            if (typeof totalAmount !== "number" || totalAmount < 0) {
                throw new Error("Общая сумма заказа должна быть положительным числом.");
            }
    
            this._id = id;
            this._customer = customer;
            this._productList = productList;
            this._totalAmount = totalAmount;
        }
    
        // Геттеры и сеттеры для каждого поля
        get id() {
            return this._id;
        }
    
        set id(value) {
            if (!Number.isInteger(value)) {
                throw new Error("ID заказа должен быть целым числом.");
            }
            this._id = value;
        }
    
        get customer() {
            return this._customer;
        }
    
        set customer(value) {
            if (!(value instanceof Customer)) {
                throw new Error("Параметр customer должен быть экземпляром класса Customer.");
            }
            this._customer = value;
        }
    
        get productList() {
            return this._productList;
        }
    
        set productList(value) {
            if (!Array.isArray(value) || !value.every(p => p instanceof Product)) {
                throw new Error("Список продуктов должен быть массивом объектов класса Product.");
            }
            this._productList = value;
        }
    
        get totalAmount() {
            return this._totalAmount;
        }
    
        set totalAmount(value) {
            if (typeof value !== "number" || value < 0) {
                throw new Error("Общая сумма заказа должна быть положительным числом.");
            }
            this._totalAmount = value;
        }
    
        // Метод для вычисления общей суммы заказа
        calculateTotalAmount() {
            this._totalAmount = this._productList.reduce((sum, product) => sum + product.price, 0);
        }
    
        // Метод для представления объекта в строковом виде
        toString() {
            return `Order { id: ${this._id}, customer: ${this._customer ? this._customer.toString() : "null"}, totalAmount: $${this._totalAmount.toFixed(2)}, productList: [${this._productList.map(p => p.toString()).join(", ")}]} `;
        }
    }
    
    // Пример использования
    // Создание объектов Customer
    const customer1 = new Customer(1, "Иван", "Иванов", "ivan.ivanov@example.com", "+1234567890");
    const customer2 = new Customer(2, "Анна", "Петрова", "anna.petrova@example.com", "+0987654321");
    
    // Создание объектов Product
    const product1 = new Product(1, "Ноутбук", 999.99, "Мощный ноутбук", true);
    const product2 = new Product(2, "Мышь", 19.99, "Беспроводная мышь", true);
    const product3 = new Product(3, "Клавиатура", 49.99, "Механическая клавиатура", true);
    const product4 = new Product(4, "Монитор", 199.99, "4K монитор", true);
    
    // Создание объектов Order
    const order1 = new Order(1, customer1, [product1, product2]);
    order1.calculateTotalAmount();
    console.log(order1.toString());
    
    const order2 = new Order(2, customer2, [product3, product4]);
    order2.calculateTotalAmount();
    console.log(order2.toString());
    
    // Проверка геттеров и сеттеров
    order1.id = 10;
    order1.customer = customer2;
    order1.productList = [product1, product3];
    order1.calculateTotalAmount();
    console.log(order1.toString());
    
    order2.productList.push(product2);
    order2.calculateTotalAmount();
    console.log(order2.toString());

