// Simulador de tienda de ropa

// Lista de productos
const products = [
    {   
        name: "White shirt",
        price: 20,
        id: "1"
    },
    {
        name: "Light blue shirt",
        price: 23,
        id: "2"
    },
    {
        name: "Black Oxford Shoes",
        price: 25,
        id: "3"
    },
    {
        name: "Black coat",
        price: 22,
        id: "4"
    },
    {
        name: "Black trousers",
        price: 45,
        id: "5"
    },
    {
        name: "Blue trousers",
        price: 45,
        id: "6"
    },
    {
        name: "Black tie",
        price: 15,
        id: "7"
    },
    {
        name: "White trousers",
        price: 45,
        id: "8"
    },
    {
        name: "white tie",
        price: 16,
        id: "9"
    },
    {
        name: "Fedora hat",
        price: 36,
        id: "10"
    }
];

const cart = [];

// Función para mostrar los productos disponibles
function showProducts(){

    let message = "Welcome to Sakura Clothes, these are our available products:\n";
    products.forEach(product => {
        message += `${product.id}. ${product.name} - $${product.price}.\n`
    });

    alert(message);

}

// Función para agregar productos al carrito
function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} added to cart.`);
    } else {
        alert("Not founded.");
    }
}

// Calcular monto total
function calculateTotal(){
    let total = 0;
    cart.forEach(product => {
        total += product.price;
    })
    alert(`Total: $${total}`)
}

//Simular la compra
function timeToBuy(){

    showProducts();

    let productId = prompt("Write the ID (the number at the left) of what you want to buy");

    while (productId !== null) {
        if (products.some(product => product.id === productId)){
            addToCart(productId);
        } else {
            alert("Invalid ID. Try again, please.");
        }
        productId = prompt("Write the ID (the number at the left) of what you want to buy");
    }

    calculateTotal();
}

timeToBuy();