class BankAccount {
    #balance = 0; // Private variable| Access modifier - Explanation: The # symbol indicates that the balance variable is private and cannot be accessed directly from outside the class.

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; // Accessing the private variable using this keyword
            console.log(`Deposited: $${amount}. Current Balance: $${this.#balance}`);
        } else {
            console.log("Deposited amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount; // Accessing the private variable using this keyword
            console.log(`Withdrew: $${amount}. Current Balance: $${this.#balance}`);
        } else {
            console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
        }
    }

    getBalance() {
        return this.#balance; // Accessing the private variable using this keyword
    }
}

const myAccount = new BankAccount();
myAccount.deposit(1000);
myAccount.withdraw(200);
myAccount.balance = 10000; // This will not change the balance because it's a private variable
console.log(`Final Balance: $${myAccount.getBalance()}`); // Accessing the balance using a public method

const anotherAccount = new BankAccount();
anotherAccount.deposit(500);
anotherAccount.withdraw(200);
console.log(`Final Balance: $${anotherAccount.getBalance()}`);