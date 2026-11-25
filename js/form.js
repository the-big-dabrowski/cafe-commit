const addForm = document.querySelector("#add-form");
const nameInput = document.querySelector("#new-name");
const categoryInput = document.querySelector("#new-category");
const priceInput = document.querySelector("#new-price");
const vegetarianInput = document.querySelector("#new-vegetarian");
const formError = document.querySelector("#form-error");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newItem = {
    id: menu.length + 1,
    name: nameInput.value,
    category: categoryInput.value,
    price: Number(priceInput.value),
    vegetarian: vegetarianInput.checked,
    rating: 0,
    allergens: [],
  };

  menu.push(newItem);
  updateMenu();
  addForm.reset();
});
