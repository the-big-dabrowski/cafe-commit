const menuList = document.querySelector("#menu-list");
const categoryFilter = document.querySelector("#category-filter");

// Skapar ett kort (ett li-element) för en rätt
function createMenuCard(item) {
  const li = document.createElement("li");
  li.classList.add("menu-card");

  const category = document.createElement("p");
  category.classList.add("menu-category");
  category.textContent = item.category;

  const name = document.createElement("h3");
  name.classList.add("menu-name");
  name.textContent = item.name;

  const price = document.createElement("p");
  price.classList.add("menu-price");
  price.textContent = item.price + " kr";

  const rating = document.createElement("p");
  rating.classList.add("menu-rating");
  rating.textContent = "Betyg: " + item.rating;

  li.append(category, name, price, rating);

  if (item.vegetarian === true) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "badge-veg");
    badge.textContent = "Vegetarisk";
    li.append(badge);
  }

  const button = document.createElement("button");
  button.classList.add("button", "button-small");
  button.textContent = "Lägg till";
  button.addEventListener("click", () => {
    addToOrder(item);
  });
  li.append(button);

  return li;
}

// Ritar upp alla rätter som finns i arrayen items
function renderMenu(items) {
  menuList.innerHTML = "";

  items.forEach((item) => {
    const card = createMenuCard(item);
    menuList.append(card);
  });
}

// Fyller dropdownen #category-filter med kategorierna från menyn
function populateCategories() {
  menu.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.category;
    option.textContent = item.category;
    categoryFilter.append(option);
  });
}
