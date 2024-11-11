const assets = [
    {
        id: 1,
        name: "Apple Inc.",
        type: "stock",
        price: 175.50,
        quantity: 100
    },
    {
        id: 2,
        name: "US Treasury Bond 10Y",
        type: "bond",
        price: 98.75,
        quantity: 50
    },
    {
        id: 3,
        name: "Microsoft Corporation",
        type: "stock",
        price: 385.20,
        quantity: 75
    },
    {
        id: 4,
        name: "Corporate Bond AAA",
        type: "bond",
        price: 102.30,
        quantity: 25
    }
];

// Returns asset object if found, undefined otherwise
const getAssetById = (id) => {
    return assets.find(asset => asset.id === id);
};

export { assets, getAssetById };