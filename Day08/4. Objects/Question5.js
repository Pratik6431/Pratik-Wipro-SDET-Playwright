// 5. Create a shopping cart object and calculate total bill amount.

const shoppingCart = {
    items: [
        { productName: "iPhone", price: 180000 },
        { productName: "iPad", price: 50000 },
        { productName: "MacBook", price: 100000 }
    ],
    
    calculateTotal: function() {
        
        return this.items.reduce((total, currentItem) => {
            return total + currentItem.price;
        }, 0);
    }
};

console.log(`Total Bill: $${shoppingCart.calculateTotal()}`);