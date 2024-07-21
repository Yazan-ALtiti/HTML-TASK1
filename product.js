const form = document.getElementById("form");
const table = document.getElementById("table");
const tbody = document.createElement("tbody");
table.appendChild(tbody);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let car = e.target.car.value;
  let price = e.target.price.value;

  let tr = document.createElement("tr");

  let tdName = document.createElement("td");
  tdName.textContent = name;
  tr.appendChild(tdName);

  let tdEmail = document.createElement("td");
  tdEmail.textContent = email;
  tr.appendChild(tdEmail);

  let tdCar = document.createElement("td");
  tdCar.textContent = car;
  tr.appendChild(tdCar);

  let tdPrice = document.createElement("td");
  tdPrice.textContent = price;
  tr.appendChild(tdPrice);

  tbody.appendChild(tr);

  form.reset();
});
