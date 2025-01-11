/**
 * 1. Создайте базовый класс "Account" с полями:
 *    - accountId (уникальный идентификатор аккаунта, тип int)
 *    - ownerName (имя владельца, тип String)
 *    - balance (баланс, тип double)
 *
 *    Добавьте:
 *    - Конструктор по умолчанию
 *    - Конструктор с параметрами для всех полей
 *    - Геттеры и сеттеры для каждого поля
 *    - Метод toString для представления объекта в строковом виде
 *    - Метод withdraw(double amount), который уменьшает баланс (если достаточно средств)
 *    - Метод deposit(double amount), который увеличивает баланс
 *
 * 2. Создайте класс "SavingsAccount", который наследуется от "Account", и добавьте:
 *    - interestRate (процентная ставка, тип double)
 *
 *    Добавьте:
 *    - Конструктор по умолчанию
 *    - Конструктор с параметрами для всех полей, включая поля базового класса
 *    - Геттеры и сеттеры для поля interestRate
 *    - Метод applyInterest(), который добавляет проценты к балансу
 *    - Переопределите метод withdraw(double amount), чтобы запретить снятие средств, если баланс станет меньше минимального уровня (например, 100.0)
 *    - Переопределите метод toString, чтобы также отображать процентную ставку
 *
 * 3. Создайте класс "CheckingAccount", который наследуется от "Account", и добавьте:
 *    - overdraftLimit (лимит перерасхода, тип double)
 *
 *    Добавьте:
 *    - Конструктор по умолчанию
 *    - Конструктор с параметрами для всех полей, включая поля базового класса
 *    - Геттеры и сеттеры для поля overdraftLimit
 *    - Переопределите метод withdraw(double amount), чтобы позволить перерасход до лимита
 *    - Переопределите метод toString, чтобы также отображать лимит перерасхода
 *
 * 4. Создайте класс "Bank" с полями:
 *    - bankName (название банка, тип String)
 *    - accounts (список аккаунтов, тип List<Account>)
 *
 *    Добавьте:
 *    - Конструктор с параметрами для всех полей
 *    - Метод addAccount(Account account) для добавления нового аккаунта в банк
 *    - Метод getAccountById(int accountId) для поиска аккаунта по идентификатору
 *    - Метод calculateTotalBalance(), который возвращает общую сумму на всех аккаунтах в банке
 *    - Метод toString для вывода списка всех аккаунтов
 *
 * 5. В основном классе создайте:
 *    - Несколько объектов "SavingsAccount" и "CheckingAccount" с различными параметрами
 *    - Объект "Bank" и добавьте в него созданные аккаунты
 *    - Проверьте работу всех методов, включая переопределение, операции снятия, пополнения, начисления процентов и перерасхода
 *    - Выведите информацию о банке и его аккаунтах в консоль
 */
// 1. Base class "Account"
class Account {
    constructor(accountId = 0, ownerName = "", balance = 0.0) {
        this.accountId = accountId;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    // Getters and setters
    getAccountId() {
        return this.accountId;
    }

    setAccountId(accountId) {
        this.accountId = accountId;
    }

    getOwnerName() {
        return this.ownerName;
    }

    setOwnerName(ownerName) {
        this.ownerName = ownerName;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(balance) {
        this.balance = balance;
    }

    // toString method
    toString() {
        return `Account { accountId: ${this.accountId}, ownerName: "${this.ownerName}", balance: ${this.balance.toFixed(2)} }`;
    }

    // Withdraw method
    withdraw(amount) {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance or invalid amount.");
        }
    }

    // Deposit method
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Invalid deposit amount.");
        }
    }
}

// 2. SavingsAccount class
class SavingsAccount extends Account {
    constructor(accountId = 0, ownerName = "", balance = 0.0, interestRate = 0.0) {
        super(accountId, ownerName, balance);
        this.interestRate = interestRate;
    }

    // Getter and setter for interestRate
    getInterestRate() {
        return this.interestRate;
    }

    setInterestRate(interestRate) {
        this.interestRate = interestRate;
    }

    // Apply interest method
    applyInterest() {
        const interest = this.balance * this.interestRate / 100;
        this.deposit(interest);
    }

    // Overridden withdraw method
    withdraw(amount) {
        if (this.balance - amount >= 100.0) {
            super.withdraw(amount);
        } else {
            console.log("Withdrawal denied. Minimum balance of 100.0 must be maintained.");
        }
    }

    // Overridden toString method
    toString() {
        return `${super.toString()}, interestRate: ${this.interestRate}%`;
    }
}

// 3. CheckingAccount class
class CheckingAccount extends Account {
    constructor(accountId = 0, ownerName = "", balance = 0.0, overdraftLimit = 0.0) {
        super(accountId, ownerName, balance);
        this.overdraftLimit = overdraftLimit;
    }

    // Getter and setter for overdraftLimit
    getOverdraftLimit() {
        return this.overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit) {
        this.overdraftLimit = overdraftLimit;
    }

    // Overridden withdraw method
    withdraw(amount) {
        if (this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
        } else {
            console.log("Withdrawal denied. Overdraft limit exceeded.");
        }
    }

    // Overridden toString method
    toString() {
        return `${super.toString()}, overdraftLimit: ${this.overdraftLimit}`;
    }
}

// 4. Bank class
class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.accounts = [];
    }

    // Add account method
    addAccount(account) {
        this.accounts.push(account);
    }

    // Get account by ID
    getAccountById(accountId) {
        return this.accounts.find(account => account.getAccountId() === accountId) || null;
    }

    // Calculate total balance
    calculateTotalBalance() {
        return this.accounts.reduce((total, account) => total + account.getBalance(), 0.0);
    }

    // toString method
    toString() {
        return `Bank: ${this.bankName}\nAccounts:\n${this.accounts.map(account => account.toString()).join("\n")}`;
    }
}

// 5. Main section
const sa1 = new SavingsAccount(1, "Alice", 1000.0, 2.5);
const sa2 = new SavingsAccount(2, "Bob", 500.0, 3.0);
const ca1 = new CheckingAccount(3, "Charlie", 200.0, 300.0);
const ca2 = new CheckingAccount(4, "Diana", 50.0, 100.0);

const bank = new Bank("MyBank");
bank.addAccount(sa1);
bank.addAccount(sa2);
bank.addAccount(ca1);
bank.addAccount(ca2);

// Test account operations
sa1.deposit(100);
sa1.applyInterest();
sa2.withdraw(400);
ca1.withdraw(450);
ca2.withdraw(200);

// Print bank details
console.log(bank.toString());
console.log(`Total balance: ${bank.calculateTotalBalance().toFixed(2)}`);

