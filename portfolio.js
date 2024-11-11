// Task 2
import { assets } from './asset.js';

// Calculates value of assets in portfolio
const calculatePortfolioValue = () => {
    return assets.reduce((total, asset) => {
        return total + (asset.price * asset.quantity);
    }, 0);
};

// Returns objects with asset details and percentages
const getPortfolioAllocation = () => {
    const totalValue = calculatePortfolioValue();
    
    return assets.map(asset => {
        const assetValue = asset.price * asset.quantity;
        const allocation = (assetValue / totalValue) * 100;
        
        return {
            id: asset.id,
            name: asset.name,
            type: asset.type,
            allocation: Number(allocation.toFixed(2))
        };
    });
};

export { calculatePortfolioValue, getPortfolioAllocation };