/*

getStockValue(product): ek product ki price × stock return kare.
getProductById(products, id): matching product object return kare, warna "Product not found".
getStatus(product): stock 0 ho to "Out of stock", 10 se kam ho to "Low stock", warna "Available".
getTopRated(products): sab se zyada rating wale product ka title return kare.
groupByCategory(products): aisa object return kare jisme key category ho aur value titles ka array, jaise { clothing: ["T-Shirt", "Shoes"] }.
getAveragePrice(products): tamam products ki average price return kare.
getTitlesByCategory(products, category): di gayi category ke products ke titles ka array return kare.
addTotalValue(products): har product object mein totalValue property add kare (price × stock).
countStock(products): aisa object return kare: { inStock: 4, outOfStock: 2 }.
applyDiscount(product, percent): discounted price ke sath naya object return kare, original object change na ho.

*/

let products = [
    { id: 101, title: "Laptop", category: "electronics", price: 150000, stock: 5, rating: 4.5 },
    { id: 102, title: "Headphones", category: "electronics", price: 8000, stock: 0, rating: 4.1 },
    { id: 103, title: "T-Shirt", category: "clothing", price: 1500, stock: 40, rating: 3.8 },
    { id: 104, title: "Shoes", category: "clothing", price: 6500, stock: 12, rating: 4.7 },
    { id: 105, title: "Backpack", category: "accessories", price: 3200, stock: 0, rating: 3.5 },
    { id: 106, title: "Watch", category: "accessories", price: 12000, stock: 7, rating: 4.3 }
];


function getStockValue(product) {
    return product.price * product.stock;
}


function getProductById(products, id) {
    const product = products.find(p => p.id === id);

    return product || "Product not found";
}


function getStatus(product) {

    if (product.stock === 0) {
        return "Out of stock";
    }
    else if (product.stock < 10) {
        return "Low stock";
    }
    else {
        return "Available";
    }
}


function getTopRated(products) {

    const topProduct = products.reduce((best, current) => {
        return current.rating > best.rating ? current : best;
    });

    return topProduct.title;
}


function groupByCategory(products) {

    const result = {};

    products.forEach(product => {

        const category = product.category;

        if (!result[category]) {
            result[category] = [];
        }

        result[category].push(product.title);

    });

    return result;
}


function getAveragePrice(products) {

    if (products.length === 0) return 0;

    const total = products.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    return total / products.length;
}


function getTitlesByCategory(products, category) {

    return products
        .filter(product => product.category === category)
        .map(product => product.title);

}


function addTotalValue(products) {

    return products.map(product => {

        return {
            ...product,
            totalValue: product.price * product.stock
        };

    });

}


function countStock(products) {

    return products.reduce((result, product) => {

        if (product.stock > 0) {
            result.inStock++;
        }
        else {
            result.outOfStock++;
        }

        return result;

    }, {
        inStock: 0,
        outOfStock: 0
    });

}


function applyDiscount(product, percent) {

    return {
        ...product,
        price: product.price - (product.price * percent / 100)
    };

}


console.log("1. Stock Value:", getStockValue(products[0]));
console.log("2. Product by ID:", getProductById(products, 103));
console.log("3. Product Status:", getStatus(products[0]));
console.log("4. Top Rated Product:", getTopRated(products));
console.log("5. Group by Category:", groupByCategory(products));
console.log("6. Average Price:", getAveragePrice(products));
console.log("7. Titles by Category:", getTitlesByCategory(products, "clothing"));
console.log("8. Products with Total Value:", addTotalValue(products));
console.log("9. Stock Count:", countStock(products));
console.log("10. Discounted Product:", applyDiscount(products[0], 10));

