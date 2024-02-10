// Data dummy produk
const products = [
  { id: 1, name: "Pakaian Perempuan", price: 10 },
  { id: 2, name: "Pakain Pria", price: 20 },
  { id: 3, name: "Pakain Anak-Anak", price: 30 },
];

// Data keranjang belanja
let cart = [];

// Fungsi untuk menampilkan status login
function displayLoginStatus(status) {
  const loginStatus = document.getElementById("loginStatus");
  loginStatus.textContent = `Status: ${status ? "Logged In" : "Not Logged In"}`;
}

// Fungsi untuk menampilkan daftar produk
function displayProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.innerHTML = `
            <img src="product-image-${product.id}.jpg" alt="${product.name}">
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productList.appendChild(productItem);
  });
}

// Fungsi untuk menampilkan keranjang belanja
function displayCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";
  cart.forEach((item) => {
    const cartProduct = document.createElement("div");
    cartProduct.textContent = `${products[item.productId - 1].name} - $${
      products[item.productId - 1].price
    }`;
    cartDiv.appendChild(cartProduct);
  });
}

// Fungsi untuk menambahkan produk ke keranjang belanja
function addToCart(productId) {
  cart.push({ productId });
  displayCart();
  document.getElementById("checkoutBtn").classList.remove("hidden");
}

// Event listener untuk checkout
document.getElementById("checkoutBtn").addEventListener("click", function () {
  alert("Checkout completed!");
  cart = [];
  displayCart();
  this.classList.add("hidden");
});

// Menampilkan status login
displayLoginStatus(false); // default status: not logged in
// Menampilkan daftar produk
displayProducts();
