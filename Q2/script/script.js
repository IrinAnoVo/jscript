/**
 * 1. Напишите метод, который принимает массив объектов "Order" и возвращает список продуктов,
 *    которые встречаются в более чем одном заказе.
 */
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

/**
 * 2. Напишите метод, который принимает массив объектов "Customer" и возвращает клиента с наибольшей общей суммой заказов.
 */
function getCustomerWithHighestTotal(customers) {
    const customerTotalAmount = new Map();
    
    customers.forEach(customer => {
        let totalAmount = customer.getOrders().reduce((sum, order) => sum + order.getTotalAmount(), 0);
        customerTotalAmount.set(customer, totalAmount);
    });

    return [...customerTotalAmount.entries()].reduce((max, curr) => curr[1] > max[1] ? curr : max)[0];
}
console.log(getCustomerWithHighestTotal([customer1, customer2]));

/**
 * 3. Напишите метод, который принимает массив объектов "Product" и массив объектов "Order",
 *    и возвращает список продуктов, которые ни разу не были заказаны.
 */
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

/**
 * 4. Напишите метод, который принимает массив объектов "Order" и возвращает список заказов,
 *    отсортированных по их общей сумме (по убыванию).
 */
function getOrdersSortedByTotalAmount(orders) {
    return orders.sort((order1, order2) => order2.getTotalAmount() - order1.getTotalAmount());
}
console.log(getOrdersSortedByTotalAmount(orders));

/**
 * 5. Напишите метод, который принимает массив объектов "User" и возвращает список всех клиентов,
 *    у которых заказы содержат более 3 продуктов.
 */
function getCustomersWithMoreThanThreeProducts(customers) {
    return customers.filter(customer => customer.getOrders().some(order => order.getProductList().length > 3));
}
console.log(getCustomersWithMoreThanThreeProducts([customer1, customer2]));

/**
 * 6. Напишите метод, который принимает массив объектов "Order" и возвращает карту (Map),
 *    где ключ — это "Customer", а значение — список заказов этого клиента.
 */
function getCustomerOrdersMap(customers) {
    const customerOrdersMap = new Map();
    
    customers.forEach(customer => {
        customerOrdersMap.set(customer, customer.getOrders());
    });

    return customerOrdersMap;
}
console.log(getCustomerOrdersMap([customer1, customer2]));

/**
 * 7. Напишите метод, который принимает массив объектов "Admin" и возвращает список привилегий,
 *    которые имеют все администраторы (общие привилегии).
 */
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

/**
 * 8. Напишите метод, который принимает массив объектов "Customer" и возвращает карту (Map),
 *    где ключ — это имя клиента, а значение — общая сумма всех его заказов.
 */
function getCustomerTotalAmountMap(customers) {
    const customerTotalAmountMap = new Map();
    
    customers.forEach(customer => {
        const totalAmount = customer.getOrders().reduce((sum, order) => sum + order.getTotalAmount(), 0);
        customerTotalAmountMap.set(customer.getUsername(), totalAmount);
    });

    return customerTotalAmountMap;
}
console.log(getCustomerTotalAmountMap([customer1, customer2]));

/**
 * 9. Напишите метод, который принимает массив объектов "Order" и возвращает продукт,
 *    который чаще всего встречается в заказах.
 */
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

/**
 * 10. Напишите метод, который принимает массив объектов "Order" и возвращает карту (Map),
 *     где ключ — это месяц (тип String), а значение — общая сумма всех заказов за этот месяц.
 */
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
