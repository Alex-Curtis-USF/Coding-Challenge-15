// Task 4
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Display initial portfolio 
console.log('\n=== Initial Portfolio Status ===');
console.log(`Total Portfolio Value: $${calculatePortfolioValue().toFixed(2)}`);

console.log('\n=== Initial Asset Allocation ===');
getPortfolioAllocation().forEach(asset => {
    console.log(`${asset.name} (${asset.type}): ${asset.allocation}%`);
});

// Example Transactions
try {
    const buyApple = new Transaction(1, 'buy', 50);
    console.log('\n=== Transaction Details ===');
    console.log('Buy Apple:', buyApple.getTransactionDetails());

    const sellMicrosoft = new Transaction(3, 'sell', 25);
    console.log('Sell Microsoft:', sellMicrosoft.getTransactionDetails());

    // THIS TESTS IF THERE SHOULD BE AN ERROR
    // THIS ERROR IN MY CODE IS MEANT TO BE THERE IT IS ON PURPOSE!!!
    const sellBonds = new Transaction(4, 'sell', 100);
} catch (error) {
    console.error('\nError:', error.message);
}

// Display updated portfolio status
console.log('\n=== Updated Portfolio Status ===');
console.log(`Total Portfolio Value: $${calculatePortfolioValue().toFixed(2)}`);

console.log('\n=== Updated Asset Allocation ===');
getPortfolioAllocation().forEach(asset => {
    console.log(`${asset.name} (${asset.type}): ${asset.allocation}%`);
});