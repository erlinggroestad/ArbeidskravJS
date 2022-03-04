const listOne = document.getElementById("List-1");
const listOneAddedItems = document.getElementById("List_1_addedItems");
const listOneSum = document.getElementById("List-1_sum");
const listTwo = document.getElementById("List-2");
const listTwoAddedItems = document.getElementById("List_2_addedItems");
const listThree = document.getElementById("List-3");
const listThreeAddedItems = document.getElementById("List_3_addedItems");

alert(
  "Velkommen til din helt egne handleliste. \n Denne bruker du på følgende måte: \n\n 1.       Skriv inn varer du må kjøpe mer av. \n 2.       Få oversikt over varer du har lagt inn\n 3.       Ønsker du å slette varer, kan du enkelt gjøre dette"
);

listOneArray = [];

function addItem() {
  let listOneItemInput = document.getElementById("List_1_item").value;

  listOneArray.push({
    item: listOneItemInput,
  });

  console.log("Liste 1 Nytt produkt:", listOneArray);
  listOneItems();
}

function listOneItems() {
  listOneAddedItems.innerHTML = "";
  for (let i = 0; i < listOneArray.length; i++) {
    listOneAddedItems.innerHTML += `<li><h2>Vare:</h2><h3> ${listOneArray[i].item}</h3>
    <button id="delete-btn" onclick="deleteItem(${i})">Fjern vare</button></li>`;
  }
}

function deleteItem(i) {
  let confirmDelete = confirm("Er du sikker på at du vil slette?");
  if (confirmDelete) {
    listOneArray.splice(i, 1);
    listOneItems();
  }
}

listTwoArray = [];

function addListTwoItem() {
  let listTwoItemInput = document.getElementById("List_2_item").value;

  listTwoArray.push({
    item: listTwoItemInput,
  });

  console.log("List2_Ny Vare:", listTwoArray);
  listTwoItems();
}

function listTwoItems() {
  listTwoAddedItems.innerHTML = "";
  for (let i = 0; i < listTwoArray.length; i++) {
    listTwoAddedItems.innerHTML += `<li><h2>Vare:</h2><h3> ${listTwoArray[i].item}</h3>
    <button id="delete-btn-2" onclick="deleteItemTwo(${i})">Fjern vare</button></li>`;
  }
}

function deleteItemTwo(i) {
  let confirmDeleteTwo = confirm("Er du sikker på at du vil slette?");
  if (confirmDeleteTwo) {
    listTwoArray.splice(i, 1);
    listTwoItems();
  }
}

listThreeArray = [];

function addListThreeItem() {
  let listThreeItemInput = document.getElementById("List_3_item").value;
  let listThreePriceInput = parseInt(
    document.getElementById("List_3_price").value
  );

  listThreeArray.push({
    item: listThreeItemInput,
    price: listThreePriceInput,
  });

  console.log("Ny Vare:", listThreeArray);
  listThreeItems();

  if (listThreePriceInput > 0) {
  } else {
    alert("Pris kan ikke være 0,- kr");
  }
}

function listThreeItems() {
  listThreeAddedItems.innerHTML = "";
  for (let i = 0; i < listThreeArray.length; i++) {
    listThreeAddedItems.innerHTML += `<li><h2>Vare:</h2><h3> ${listThreeArray[i].item}</h3>
    <h4>Pris: ${listThreeArray[i].price} kr</h4>
    <button id="delete-btn-2" onclick="deleteItemThree(${i})">Fjern vare</button></li>`;
  }

  sum3items();
}
const totaledSum = document.getElementById("totalSum");

let sumTotal = 0;

function sum3items() {
  let sumTotal = 0;
  for (let i = 0; i < listThreeArray.length; i++) {
    sumTotal += listThreeArray[i].price;
    totaledSum.innerHTML = sumTotal;
  }
}

function deleteItemThree(i) {
  let confirmDeleteThree = confirm("Er du sikker på at du vil slette?");
  if (confirmDeleteThree) {
    listThreeArray.splice(i, 1);
    listThreeItems();
  }
}
