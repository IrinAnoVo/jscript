/**
 * 1. Напишите метод, который принимает массив объектов "User" (!!!! класссы из E6 ьерем за основу) и выводит их имена в консоль.
 */
function printUsernames(users) {
    users.forEach(user => console.log(user.getUsername()));
}
printUsernames([admin1, admin2, customer1, customer2]);

/**
 * 2. Напишите метод, который принимает массив объектов "Admin" и возвращает список всех привилегий.
 */
function getAllPrivileges(admins) {
    return admins.flatMap(admin => admin.getPrivileges());
}
console.log("All Privileges:", getAllPrivileges([admin1, admin2]));
  
/**
 * 3. Напишите метод, который принимает массив объектов "Customer" и подсчитывает общее количество заказов у всех клиентов.
 */
function countTotalOrders(customers) {
    return customers.reduce((total, customer) => total + customer.getOrders().length, 0);
}
console.log("Total Orders from Customers:", countTotalOrders([customer1, customer2]));

/**
 * 4. Напишите метод, который принимает массив объектов "Order" и возвращает общую сумму всех заказов.
 */
function calculateTotalOrderAmount(orders) {
    return orders.reduce((total, order) => total + order.getTotalAmount(), 0);
}
console.log("Total Amount of All Orders:", calculateTotalOrderAmount([order1, order2]));
  
/**
 * 5. Напишите метод, который принимает массив объектов "Product" и возвращает массив названий всех продуктов.
 */
function getProductNames(products) {
    return products.map(product => product.getName());
}
console.log(getProductNames([product1, product2, product3]));

/**
 * 6. Напишите метод, который принимает массив объектов "Order" и выводит в консоль идентификатор каждого заказа и его общую сумму.
 */
function logOrderDetails(orders) {
    return orders.map(order => `Order ID: ${order.getOrderId()}, Total Amount: ${order.getTotalAmount().toFixed(2)}`);
}
console.log(logOrderDetails([order1, order2]));

/**
 * 7. Напишите метод, который принимает массив объектов "User" и возвращает массив объектов "Admin" (используйте проверку типа).
 */
function getAdmins(users) {
    return users.filter(user => user instanceof Admin);
}
console.log(getAdmins([admin1, admin2, customer1, customer2]));

/**
 * 8. Напишите метод, который принимает массив объектов "Product" и возвращает продукт с максимальной ценой.
 */
function getMostExpensiveProduct(products) {
    return products.reduce((maxProduct, product) => {
      return product.getPrice() > maxProduct.getPrice() ? product : maxProduct;
    });
}console.log(getMostExpensiveProduct([product1, product2, product3]));

/**
 * 9. Напишите метод, который принимает массив объектов "Order" и возвращает массив заказов, общая сумма которых превышает заданное значение.
 */
function getOrdersExceedingAmount(orders, amount) {
    return orders.filter(order => order.getTotalAmount() > amount);
}
console.log(getOrdersExceedingAmount([order1, order2], 100));

/**
 * 10. Напишите метод, который принимает массив объектов "Customer" и возвращает список клиентов, у которых нет ни одного заказа.
 */
function getCustomersWithNoOrders(customers) {
    return customers.filter(customer => customer.getOrders().length === 0);
}
console.log(getCustomersWithNoOrders([customer1, customer2, customer3]));