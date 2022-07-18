# oop-trening

Ищем продукт по названию:

const products = [
{ name: "orang", price: 28, count: 19 },
{ name: "apple", price: 19, count: 19 },
{ name: "orang", price: 28, count: 19 },
];

const findProductByName = function (allProducts, name) {
for (const product of allProducts) {
if (product.name === name) {
return console.log("FIND IT!");
}
}
return console.log("DO NOT FIND IT!");
};

findProductByName(products, "apple");
findProductByName(products, "juse");
