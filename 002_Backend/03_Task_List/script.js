const items = [];

function displayList(items) {
  const output = document.getElementById("output");

  output.innerHTML = "<p>Here is the list of items:</p>";

  if (items.length === 0) {
    output.innerHTML += "<p>The list is empty.</p>";
    return;
  }

  items.forEach((item, index) => {
    output.innerHTML += `<p>${index + 1}. ${item}</p>`;
  });
}

function addItem(items, itemToAdd) {
  items.push(itemToAdd);
  displayList(items);
}

function removeItem(items, itemIndex) {
  displayList(items);

  if (itemIndex > 0 && itemIndex <= items.length) {
    const removedItem = items.splice(itemIndex - 1, 1)[0];
    displayList(items);
    return removedItem;
  } else {
    const output = document.getElementById("output");
    output.innerHTML += "<p>Invalid number. Please try again.</p>";
  }
}

function handleDisplayList() {
  displayList(items);
}

function handleAddItem() {
  const inputElement = document.getElementById("itemInput");
  const newItem = inputElement.value;

  if (newItem === "") {
    const output = document.getElementById("output");
    output.innerHTML = "<p>Please enter an item.</p>";
    return;
  }

  addItem(items, newItem);

  inputElement.value = "";
}

function handleRemoveItem() {
  const removeInput = document.getElementById("removeInput");
  const itemIndex = parseInt(removeInput.value, 10);

  const removedItem = removeItem(items, itemIndex);

  if (removedItem) {
    const output = document.getElementById("output");
    output.innerHTML += `<p>"${removedItem}" has been removed from the list.</p>`;
  }

  removeInput.value = "";
}