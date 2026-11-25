const orderList = document.querySelector("#order-list");
const orderTotal = document.querySelector("#order-total");
const orderCount = document.querySelector("#order-count");
const placeOrderButton = document.querySelector("#place-order");
const orderMessage = document.querySelector("#order-message");

// Allt som ligger i beställningen just nu
let order = [];

function addToOrder(item) {
  order.push(item);
  renderOrder();
}

function removeFromOrder(index) {
  order.splice(index);
  renderOrder();
}

// Ritar upp beställningen och räknar ut totalen
function renderOrder() {
  orderList.innerHTML = "";
  let total = 0;
  if (order.length === 0) {
    orderTotal.textContent = "Din beställning är tom - lägg till något från menyn!";
    return;
  }

  order.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("order-row");

    const text = document.createElement("span");
    text.textContent = item.name + " – " + item.price + " kr";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Ta bort";
    removeButton.addEventListener("click", () => {
      removeFromOrder(index);
    });

    li.append(text, removeButton);
    orderList.append(li);

    total = total + item.price;
  });
  orderCount.textContent = order.length;
  orderTotal.textContent = "Totalt: " + total + " kr";
}

placeOrderButton.addEventListener("click", () => {
  orderMessage.textContent = "Tack för din beställning!";
});
