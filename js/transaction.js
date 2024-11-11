// Task 3
import { assets, getAssetById } from './asset.js';

class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type.toLowerCase();
        this.quantity = quantity;
        this.timestamp = new Date();
        this.executeTransaction();
    }

    // For buy/sell transaction and updates asset quantity
    executeTransaction() {
        const asset = getAssetById(this.assetId);
        if (!asset) {
            throw new Error(`Asset with ID ${this.assetId} not found`);
        }

        if (this.type === 'sell' && asset.quantity < this.quantity) {
            throw new Error(`Insufficient quantity for sale of ${asset.name}`);
        }

        const index = assets.findIndex(a => a.id === this.assetId);
        if (this.type === 'buy') {
            assets[index].quantity += this.quantity;
        } else if (this.type === 'sell') {
            assets[index].quantity -= this.quantity;
        }

        this.transactionValue = asset.price * this.quantity;
    }

    // Returns object with details about the transaction
    getTransactionDetails() {
        const asset = getAssetById(this.assetId);
        return {
            assetName: asset.name,
            type: this.type,
            quantity: this.quantity,
            price: asset.price,
            value: this.transactionValue,
            timestamp: this.timestamp
        };
    }
}

export { Transaction };