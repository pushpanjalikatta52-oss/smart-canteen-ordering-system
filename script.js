let cart = [];

function addToCart(name, price) {
cart.push({
name: name,
price: price
});

```
displayCart();
alert(name + " added to cart!");
```

}

function removeFromCart(index) {
cart.splice(index, 1);
displayCart();
}

function displayCart() {
const cartItems = document.getElementById("cartItems");
const totalElement = document.getElementById("total");

```
cartItems.innerHTML = "";

if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty">Your cart is empty.</p>';
    totalElement.textContent = "0";
    return;
}

let total = 0;

cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeFromCart(${index})">Remove</button>
    `;

    cartItems.appendChild(div);
});

totalElement.textContent = total;
```

}

function placeOrder() {
if (cart.length === 0) {
alert("Please add items to your cart first.");
return;
}

```
alert("Order placed successfully! Thank you for ordering.");

cart = [];
displayCart();
```

}
