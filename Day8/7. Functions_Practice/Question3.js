// 3. Create a reusable function for currency conversion.

function convertCurrency(amount, exchangeRate) {
    return amount / exchangeRate;
}

const amountInINR = 100;
const exchangeRateToUSD = 94.44; // 1 USD = 94.44 INR
const amountInUSD = convertCurrency(amountInINR, exchangeRateToUSD);

console.log(`${amountInINR} INR is equal to ${amountInUSD.toFixed(2)} USD.`);