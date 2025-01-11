 /**
 * 1. Создайте абстрактный базовый класс "User" с полями:
 *    - userId (уникальный идентификатор пользователя, тип int)
 *    - username (имя пользователя, тип String)
 *    - email (электронная почта, тип String)
 *
 *    Добавьте:
 *    - Конструктор с параметрами для всех полей
 *    - Геттеры и сеттеры для всех полей
 *    - Абстрактный метод getUserRole(), который возвращает роль пользователя (тип String)
 *    - Метод toString для вывода информации о пользователе
 *
 * 2. Создайте класс "Admin", который наследуется от "User", и добавьте:
 *    - privileges (список привилегий, тип List<String>)
 *
 *    Добавьте:
 *    - Конструктор с параметрами для всех полей, включая поля базового класса
 *    - Геттеры и сеттеры для списка привилегий
 *    - Реализацию метода getUserRole(), который возвращает "Admin"
 *    - Метод addPrivilege(String privilege), который добавляет новую привилегию
 *    - Метод toString, который дополнительно выводит список привилегий
 *
 * 3. Создайте класс "Customer", который наследуется от "User", и добавьте:
 *    - orders (список заказов, тип List<Order>)
 *
 *    Добавьте:
 *    - Конструктор с параметрами для всех полей, включая поля базового класса
 *    - Геттеры и сеттеры для списка заказов
 *    - Реализацию метода getUserRole(), который возвращает "Customer"
 *    - Метод addOrder(Order order), который добавляет новый заказ в список
 *    - Метод toString, который дополнительно выводит количество заказов
 *
 * 4. Создайте класс "Order" с полями:
 *    - orderId (уникальный идентификатор заказа, тип int)
 *    - productList (список продуктов, тип List<Product>)
 *    - totalAmount (общая сумма заказа, тип double)
 *
 *    Добавьте:
 *    - Конструктор с параметрами для всех полей
 *    - Геттеры и сеттеры для всех полей
 *    - Метод calculateTotalAmount(), который пересчитывает общую сумму заказа на основе продуктов
 *    - Метод toString для вывода информации о заказе
 *
 * 5. Создайте класс "Product" с полями:
 *    - productId (уникальный идентификатор продукта, тип int)
 *    - name (название продукта, тип String)
 *    - price (цена продукта, тип double)
 *
 *    Добавьте:
 *    - Конструктор с параметрами для всех полей
 *    - Геттеры и сеттеры для всех полей
 *    - Метод toString для вывода информации о продукте
 *
 * 6. Создайте класс "ECommerceSystem" с полями:
 *    - users (список пользователей, тип List<User>)
 *    - orders (список заказов, тип List<Order>)
 *
 *    Добавьте:
 *    - Конструктор с параметрами для всех полей
 *    - Метод addUser(User user), который добавляет нового пользователя в систему
 *    - Метод addOrder(Order order), который добавляет новый заказ в систему
 *    - Метод getAllAdmins(), который возвращает список всех пользователей с ролью "Admin"
 *    - Метод getAllCustomersWithOrders(), который возвращает список всех клиентов, у которых есть заказы
 *    - Метод calculateTotalRevenue(), который вычисляет общую сумму всех заказов в системе
 *    - Метод toString, который выводит общее количество пользователей и заказов
 *
 * 7. В основном классе создайте:
 *    - Несколько объектов "Admin" и "Customer"
 *    - Несколько объектов "Order" и "Product"
 *    - Объект "ECommerceSystem", добавьте в него пользователей и заказы
 *    - Проверьте работу всех методов, включая наследование, пересчёты, фильтрацию и отображение данных
 *    - Выведите в консоль общую информацию о системе
 */
// Abstract base class "User"
class User {
    constructor(userId, username, email) {
        if (new.target === User) {
            throw new Error("Cannot instantiate abstract class User directly.");
        }
        this.userId = userId;
        this.username = username;
        this.email = email;
    }

    getUserId() {
        return this.userId;
    }

    setUserId(userId) {
        this.userId = userId;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username) {
        this.username = username;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    // Abstract method
    getUserRole() {
        throw new Error("getUserRole() must be implemented by subclasses.");
    }

    toString() {
        return `User { userId: ${this.userId}, username: "${this.username}", email: "${this.email}" }`;
    }
}

// Admin class
class Admin extends User {
    constructor(userId, username, email, privileges = []) {
        super(userId, username, email);
        this.privileges = privileges;
    }

    getPrivileges() {
        return this.privileges;
    }

    setPrivileges(privileges) {
        this.privileges = privileges;
    }

    getUserRole() {
        return "Admin";
    }

    addPrivilege(privilege) {
        this.privileges.push(privilege);
    }

    toString() {
        return `${super.toString()}, privileges: [${this.privileges.join(", ")}]`;
    }
}

// Customer class
class Customer extends User {
    constructor(userId, username, email, orders = []) {
        super(userId, username, email);
        this.orders = orders;
    }

    getOrders() {
        return this.orders;
    }

    setOrders(orders) {
        this.orders = orders;
    }

    getUserRole() {
        return "Customer";
    }

    addOrder(order) {
        this.orders.push(order);
    }

    toString() {
        return `${super.toString()}, ordersCount: ${this.orders.length}`;
    }
}

// Order class
class Order {
    constructor(orderId, productList = [], totalAmount = 0.0) {
        this.orderId = orderId;
        this.productList = productList;
        this.totalAmount = totalAmount;
    }

    getOrderId() {
        return this.orderId;
    }

    setOrderId(orderId) {
        this.orderId = orderId;
    }

    getProductList() {
        return this.productList;
    }

    setProductList(productList) {
        this.productList = productList;
    }

    getTotalAmount() {
        return this.totalAmount;
    }

    setTotalAmount(totalAmount) {
        this.totalAmount = totalAmount;
    }

    calculateTotalAmount() {
        this.totalAmount = this.productList.reduce((sum, product) => sum + product.price, 0);
    }

    toString() {
        return `Order { orderId: ${this.orderId}, totalAmount: ${this.totalAmount.toFixed(2)} }`;
    }
}

// Product class
class Product {
    constructor(productId, name, price) {
        this.productId = productId;
        this.name = name;
        this.price = price;
    }

    getProductId() {
        return this.productId;
    }

    setProductId(productId) {
        this.productId = productId;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    toString() {
        return `Product { productId: ${this.productId}, name: "${this.name}", price: ${this.price.toFixed(2)} }`;
    }
}

// ECommerceSystem class
class ECommerceSystem {
    constructor(users = [], orders = []) {
        this.users = users;
        this.orders = orders;
    }

    addUser(user) {
        this.users.push(user);
    }

    addOrder(order) {
        this.orders.push(order);
    }

    getAllAdmins() {
        return this.users.filter(user => user.getUserRole() === "Admin");
    }

    getAllCustomersWithOrders() {
        return this.users.filter(user => user.getUserRole() === "Customer" && user.getOrders().length > 0);
    }

    calculateTotalRevenue() {
        return this.orders.reduce((total, order) => total + order.getTotalAmount(), 0);
    }

    toString() {
        return `ECommerceSystem { totalUsers: ${this.users.length}, totalOrders: ${this.orders.length} }`;
    }
}

// Main section
const admin1 = new Admin(1, "Admin1", "admin1@example.com", ["Manage Users", "View Reports"]);
const admin2 = new Admin(2, "Admin2", "admin2@example.com");

const product1 = new Product(101, "Laptop", 1200.0);
const product2 = new Product(102, "Phone", 800.0);
const product3 = new Product(103, "Headphones", 150.0);

const order1 = new Order(1, [product1, product2]);
order1.calculateTotalAmount();

const order2 = new Order(2, [product3]);
order2.calculateTotalAmount();

const orders = [
    new Order(1, [new Product(101, "Laptop", 1200.0), new Product(102, "Phone", 800.0)]),
    new Order(2, [new Product(103, "Headphones", 150.0), new Product(101, "Laptop", 1200.0)]),
    new Order(3, [new Product(102, "Phone", 800.0)]),
];

const customer1 = new Customer(3, "Customer1", "customer1@example.com");
const customer2 = new Customer(4, "Customer2", "customer2@example.com", [order1]);
customer1.addOrder(order2);

const ecommerceSystem = new ECommerceSystem([admin1, admin2, customer1, customer2], [order1, order2]);

console.log(ecommerceSystem.toString());
console.log("Total Revenue:", ecommerceSystem.calculateTotalRevenue().toFixed(2));
console.log("Admins:", ecommerceSystem.getAllAdmins().map(admin => admin.toString()));
console.log("Customers with Orders:", ecommerceSystem.getAllCustomersWithOrders().map(customer => customer.toString()));

// 1 метод (Q1)
function printUsernames(users) {
    users.forEach(user => console.log(user.getUsername()));
}
printUsernames([admin1, admin2, customer1, customer2]);

// 2 метод (Q1)
function getAllPrivileges(admins) {
    return admins.flatMap(admin => admin.getPrivileges());
}
console.log("All Privileges:", getAllPrivileges([admin1, admin2]));

// 3 метод (Q1)
function countTotalOrders(customers) {
    return customers.reduce((total, customer) => total + customer.getOrders().length, 0);
}
console.log("Total Orders from Customers:", countTotalOrders([customer1, customer2]));

// 4 метод (Q1)
function calculateTotalOrderAmount(orders) {
    return orders.reduce((total, order) => total + order.getTotalAmount(), 0);
}
console.log("Total Amount of All Orders:", calculateTotalOrderAmount([order1, order2]));

// 5 метод (Q1)
function getProductNames(products) {
    return products.map(product => product.getName());
}
console.log(getProductNames([product1, product2, product3]));

// 6 метод (Q1)
function logOrderDetails(orders) {
    return orders.map(order => `Order ID: ${order.getOrderId()}, Total Amount: ${order.getTotalAmount().toFixed(2)}`);
}
console.log(logOrderDetails([order1, order2]));

// 7 метод (Q1)
function getAdmins(users) {
    return users.filter(user => user instanceof Admin);
}
console.log(getAdmins([admin1, admin2, customer1, customer2]));

// 8 метод (Q1)
function getMostExpensiveProduct(products) {
    return products.reduce((maxProduct, product) => {
      return product.getPrice() > maxProduct.getPrice() ? product : maxProduct;
    });
}console.log(getMostExpensiveProduct([product1, product2, product3]));

// 9 метод (Q1)
function getOrdersExceedingAmount(orders, amount) {
    return orders.filter(order => order.getTotalAmount() > amount);
}
console.log(getOrdersExceedingAmount([order1, order2], 100));

// 10 метод (Q1)
function getCustomersWithNoOrders(customers) {
    return customers.filter(customer => customer.getOrders().length === 0);
}
console.log(getCustomersWithNoOrders([customer1, customer2]));

// 1 метод (Q2)
function getProductsInMultipleOrders(orders) {
    const productCount = new Map();
    orders.forEach(order => {
        order.getProductList().forEach(product => {
            productCount.set(product.productId, (productCount.get(product.productId) || 0) + 1);
        });
    });
    return Array.from(productCount.entries())
                .filter(([_, count]) => count > 1)
                .map(([productId]) => {
                    return orders.flatMap(order => order.getProductList()).find(product => product.productId === productId);
                });
}
orders.forEach(order => order.calculateTotalAmount());
console.log(getProductsInMultipleOrders(orders));

// 2 метод (Q2)
function getCustomerWithHighestTotal(customers) {
    const customerTotalAmount = new Map();
    
    customers.forEach(customer => {
        let totalAmount = customer.getOrders().reduce((sum, order) => sum + order.getTotalAmount(), 0);
        customerTotalAmount.set(customer, totalAmount);
    });

    return [...customerTotalAmount.entries()].reduce((max, curr) => curr[1] > max[1] ? curr : max)[0];
}
console.log(getCustomerWithHighestTotal([customer1, customer2]));

// 3 метод (Q2)
function getProductsNeverOrdered(products, orders) {
    const orderedProductIds = new Set();
    
    orders.forEach(order => {
        order.getProductList().forEach(product => {
            orderedProductIds.add(product.productId);
        });
    });

    return products.filter(product => !orderedProductIds.has(product.productId));
}
console.log(getProductsNeverOrdered([product1, product2, product3], orders));

// 4 метод (Q2)
function getOrdersSortedByTotalAmount(orders) {
    return orders.sort((order1, order2) => order2.getTotalAmount() - order1.getTotalAmount());
}
console.log(getOrdersSortedByTotalAmount(orders));

// 5 метод (Q2)
function getCustomersWithMoreThanThreeProducts(customers) {
    return customers.filter(customer => customer.getOrders().some(order => order.getProductList().length > 3));
}
console.log(getCustomersWithMoreThanThreeProducts([customer1, customer2]));

// 6 метод (Q2)
function getCustomerOrdersMap(customers) {
    const customerOrdersMap = new Map();
    
    customers.forEach(customer => {
        customerOrdersMap.set(customer, customer.getOrders());
    });

    return customerOrdersMap;
}
console.log(getCustomerOrdersMap([customer1, customer2]));

// 7 метод (Q2)
function getCommonPrivileges(admins) {
    const privilegeCount = new Map();
    
    admins.forEach(admin => {
        admin.getPrivileges().forEach(privilege => {
            privilegeCount.set(privilege, (privilegeCount.get(privilege) || 0) + 1);
        });
    });

    const adminCount = admins.length;
    return [...privilegeCount.entries()]
        .filter(([_, count]) => count === adminCount)
        .map(([privilege]) => privilege);
}
console.log(getCommonPrivileges([admin1, admin2]));

// 8 метод (Q2)
function getCustomerTotalAmountMap(customers) {
    const customerTotalAmountMap = new Map();
    
    customers.forEach(customer => {
        const totalAmount = customer.getOrders().reduce((sum, order) => sum + order.getTotalAmount(), 0);
        customerTotalAmountMap.set(customer.getUsername(), totalAmount);
    });

    return customerTotalAmountMap;
}
console.log(getCustomerTotalAmountMap([customer1, customer2]));

// 9 метод (Q2)
function getMostFrequentProduct(orders) {
    const productCount = new Map();

    orders.forEach(order => {
        order.getProductList().forEach(product => {
            productCount.set(product.productId, (productCount.get(product.productId) || 0) + 1);
        });
    });

    const mostFrequentProductId = [...productCount.entries()].reduce((max, curr) => curr[1] > max[1] ? curr : max)[0];
    return orders.flatMap(order => order.getProductList()).find(product => product.productId === mostFrequentProductId);
}
console.log(getMostFrequentProduct(orders));

// 10 метод (Q2)
function getTotalAmountByMonth(orders) {
    const monthAmountMap = new Map();
    
    orders.forEach(order => {
        const orderDate = new Date(order.orderId);  // Assuming orderId is timestamp for simplicity
        const month = orderDate.toLocaleString('default', { month: 'long', year: 'numeric' });
        const totalAmount = order.getTotalAmount();
        
        monthAmountMap.set(month, (monthAmountMap.get(month) || 0) + totalAmount);
    });

    return monthAmountMap;
}
console.log(getTotalAmountByMonth(orders));
