/**
     *
     * 1. Создайте класс "Category" с полями:
     *    - id (уникальный идентификатор категории, тип int)
     *    - name (название категории, тип String)
     *    - description (описание категории, тип String)
     *
     *    Добавьте:
     *    - Конструктор по умолчанию
     *    - Конструктор с параметрами для всех полей
     *    - Геттеры и сеттеры для каждого поля
     *    - Метод toString для представления объекта в строковом виде
     *
     * 2. Расширьте класс "Product":
     *    - Добавьте поле category (объект класса Category)
     *    - Добавьте поле discount (размер скидки, тип double)
     *    - Добавьте метод calculateFinalPrice(), который возвращает цену продукта с учётом скидки.
     *
     * 3. Создайте класс "Address" с полями:
     *    - street (улица, тип String)
     *    - city (город, тип String)
     *    - postalCode (почтовый индекс, тип String)
     *    - country (страна, тип String)
     *
     *    Добавьте:
     *    - Конструктор по умолчанию
     *    - Конструктор с параметрами для всех полей
     *    - Геттеры и сеттеры для каждого поля
     *    - Метод toString для представления объекта в строковом виде
     *
     * 4. Расширьте класс "Customer":
     *    - Добавьте поле addresses (список объектов Address)
     *    - Добавьте метод addAddress(Address address) для добавления нового адреса.
     *
     * 5. Создайте класс "OrderStatus" с полями:
     *    - id (уникальный идентификатор статуса, тип int)
     *    - status (статус заказа, тип String, например "Processing", "Shipped", "Delivered")
     *    - updateDate (дата последнего обновления статуса, тип LocalDate)
     *
     *    Добавьте:
     *    - Конструктор по умолчанию
     *    - Конструктор с параметрами для всех полей
     *    - Геттеры и сеттеры для каждого поля
     *    - Метод toString для представления объекта в строковом виде
     *
     * 6. Расширьте класс "Order":
     *    - Добавьте поле status (объект класса OrderStatus)
     *    - Добавьте поле orderDate (дата заказа, тип LocalDate)
     *    - Добавьте метод calculateTotalAmount(), который пересчитывает общую сумму заказа с учётом скидок на продукты.
     *
     * 7. В основном классе:
     *    - Создайте несколько объектов "Category", "Product", "Customer", "Address", "OrderStatus" и "Order".
     *    - Реализуйте сценарий, где создаётся заказ с несколькими продуктами, устанавливается статус, добавляются адреса клиента.
     *    - Выведите в консоль подробную информацию о заказе, включая финальную стоимость и статус.
     */
    // Определение класса Category
class Category {
     // Конструктор по умолчанию
     constructor(id = 0, name = "", description = "") {
         if (!Number.isInteger(id)) {
             throw new Error("ID категории должен быть целым числом.");
         }
         if (typeof name !== "string" || name.trim() === "") {
             throw new Error("Название категории должно быть непустой строкой.");
         }
         if (typeof description !== "string") {
             throw new Error("Описание категории должно быть строкой.");
         }
 
         this._id = id;
         this._name = name;
         this._description = description;
     }
 
     // Геттеры и сеттеры для каждого поля
     get id() {
         return this._id;
     }
 
     set id(value) {
         if (!Number.isInteger(value)) {
             throw new Error("ID категории должен быть целым числом.");
         }
         this._id = value;
     }
 
     get name() {
         return this._name;
     }
 
     set name(value) {
         if (typeof value !== "string" || value.trim() === "") {
             throw new Error("Название категории должно быть непустой строкой.");
         }
         this._name = value;
     }
 
     get description() {
         return this._description;
     }
 
     set description(value) {
         if (typeof value !== "string") {
             throw new Error("Описание категории должно быть строкой.");
         }
         this._description = value;
     }
 
     // Метод для представления объекта в строковом виде
     toString() {
         return `Category { id: ${this._id}, name: "${this._name}", description: "${this._description}" }`;
     }
 }
 
 // Расширение класса Product
 class Product {
     // Конструктор
     constructor(id = 0, name = "", price = 0.0, description = "", inStock = false, category = null, discount = 0.0) {
         if (!Number.isInteger(id)) {
             throw new Error("ID продукта должен быть целым числом.");
         }
         if (typeof name !== "string" || name.trim() === "") {
             throw new Error("Название продукта должно быть непустой строкой.");
         }
         if (typeof price !== "number" || price < 0) {
             throw new Error("Цена продукта должна быть положительным числом.");
         }
         if (typeof description !== "string") {
             throw new Error("Описание продукта должно быть строкой.");
         }
         if (typeof inStock !== "boolean") {
             throw new Error("Поле inStock должно быть логическим значением.");
         }
         if (category !== null && !(category instanceof Category)) {
             throw new Error("Поле category должно быть экземпляром класса Category.");
         }
         if (typeof discount !== "number" || discount < 0 && discount > 1) {
             throw new Error("Скидка должна быть числом в диапазоне от 0 до 1.");
         }
 
         this._id = id;
         this._name = name;
         this._price = price;
         this._description = description;
         this._inStock = inStock;
         this._category = category;
         this._discount = discount;
     }
 
     // Геттеры и сеттеры для каждого поля
     get id() {
         return this._id;
     }
 
     set id(value) {
         if (!Number.isInteger(value)) {
             throw new Error("ID продукта должен быть целым числом.");
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
             throw new Error("Цена продукта должна быть положительным числом.");
         }
         this._price = value;
     }
 
     get description() {
         return this._description;
     }
 
     set description(value) {
         if (typeof value !== "string") {
             throw new Error("Описание продукта должно быть строкой.");
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
 
     get category() {
         return this._category;
     }
 
     set category(value) {
         if (!(value instanceof Category)) {
             throw new Error("Поле category должно быть экземпляром класса Category.");
         }
         this._category = value;
     }
 
     get discount() {
         return this._discount;
     }
 
     set discount(value) {
         if (typeof value !== "number" || value < 0 || value > 1) {
             throw new Error("Скидка должна быть числом в диапазоне от 0 до 1.");
         }
         this._discount = value;
     }
 
     // Метод для вычисления итоговой цены с учётом скидки
     calculateFinalPrice() {
         return this._price * (1 - this._discount);
     }
 
     // Метод для представления объекта в строковом виде
     toString() {
         return `Product { id: ${this._id}, name: "${this._name}", price: ${this._price}, description: "${this._description}", inStock: ${this._inStock}, category: ${this._category ? this._category.toString() : "null"}, discount: ${this._discount}, finalPrice: ${this.calculateFinalPrice().toFixed(2)} }`;
     }
 }
 // Класс для адреса
class Address {
     constructor(street, city, zipCode, country) {
         this._street = street;
         this._city = city;
         this._zipCode = zipCode;
         this._country = country;
     }
 
     toString() {
         return `${this._street}, ${this._city}, ${this._zipCode}, ${this._country}`;
     }
 }
 
 // Класс для клиента
 class Customer {
     constructor(id, firstName, lastName, email, phoneNumber) {
         this._id = id;
         this._firstName = firstName;
         this._lastName = lastName;
         this._email = email;
         this._phoneNumber = phoneNumber;
         this._addresses = [];
     }
 
     addAddress(address) {
         this._addresses.push(address);
     }
 
     toString() {
         return `Customer { id: ${this._id}, name: ${this._firstName} ${this._lastName}, email: ${this._email}, phone: ${this._phoneNumber}, addresses: [${this._addresses.map(addr => addr.toString()).join(", ")}] }`;
     }
 }
 
 // Класс для статуса заказа
 class OrderStatus {
     constructor(id, status, date) {
         this._id = id;
         this._status = status;
         this._date = date;
     }
 
     toString() {
         return `OrderStatus { id: ${this._id}, status: "${this._status}", date: "${this._date.toLocaleString()}" }`;
     }
 }
 
 // Класс для заказа
 class Order {
     constructor(id, customer, products, discount, status, orderDate) {
         this._id = id;
         this._customer = customer;
         this._products = products;
         this._discount = discount;
         this._status = status;
         this._orderDate = orderDate;
     }
 
     calculateTotalAmount() {
         this._totalAmount = this._products.reduce((total, product) => total + product.calculateFinalPrice(), 0) * (1 - this._discount);
     }
 
     toString() {
         return `Order { id: ${this._id}, customer: ${this._customer.toString()}, products: [${this._products.map(prod => prod.toString()).join(", ")}], discount: ${this._discount}, totalAmount: ${this._totalAmount.toFixed(2)}, status: ${this._status.toString()}, orderDate: ${this._orderDate.toLocaleString()} }`;
     }
 }
 
 // Пример использования
 const electronics = new Category(1, "Электроника", "Товары для дома и офиса");
 const clothing = new Category(2, "Одежда", "Мужская и женская одежда");
 
 const laptop = new Product(1, "Ноутбук", 999.99, "Мощный ноутбук", true, electronics, 0.1);
 const tshirt = new Product(2, "Футболка", 19.99, "Хлопковая футболка", true, clothing, 0.2);
 
 console.log(laptop.toString());
 console.log(tshirt.toString());
 
// Пример использования классов

// Создание объектов Category
const electronics1 = new Category(1, "Electronics", "Devices and gadgets");
const books = new Category(2, "Books", "Printed and digital books");

// Создание объектов Product
const phone = new Product(1, "Smartphone", 699.99, "Latest model", true, electronics, 10);
const laptop1 = new Product(2, "Laptop", 999.99, "High-performance laptop", true, electronics, 15);
const novel = new Product(3, "Novel", 19.99, "Best-selling novel", true, books, 5);

// Создание объекта Customer и добавление адресов
const customer = new Customer(1, "John", "Doe", "john.doe@example.com", "123-456-7890");
customer.addAddress(new Address("123 Main St", "Springfield", "12345", "USA"));
customer.addAddress(new Address("456 Elm St", "Metropolis", "54321", "USA"));

// Создание объекта OrderStatus
const statusProcessing = new OrderStatus(1, "Processing", new Date());

// Создание объекта Order
const order = new Order(1, customer, [phone, laptop, novel], 0, statusProcessing, new Date());
order.calculateTotalAmount();

// Вывод информации о заказе
console.log(order.toString());