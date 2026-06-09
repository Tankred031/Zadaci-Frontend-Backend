const input = require("@mimo-org/input");

const items = [];

function displayList(items) {
  console.log("\nHere is the list of items:");
  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

function addItem(items, itemToAdd) {
  items.push(itemToAdd);
  console.log(`"${itemToAdd}" has been added to the list.`);
}

let running = true;

while (running) {
  console.log("\nChoose an option:");
  console.log("1. View the list");
  console.log("2. Add an item to the list");
  console.log("3. Exit");

  const choice = input("Enter your choice (1-3): ");
  
  if (choice == 1) {
    displayList(items);
  } else if (choice == 2) {
    const newItem = input("Enter a new item to add to the list: ");
    addItem(items, newItem);
  } else if (choice == 3) {
    running = false;
  } else {
    console.log("Invalid choice, please select a valid option.");
  }
}