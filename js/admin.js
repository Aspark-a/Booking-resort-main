// // JSON ----------------------
// // la dinh dang du lieu (string)
// // giup hien thi du lieu trong JS: string, number, object, array, boolean, null

// const mainURL = "http://localhost:3000/";

// // fetch API
// function getOrders() {
//   fetch(mainURL + "orders", { method: "GET" })
//     .then((json) => json.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// function createOrder(order) {
//   fetch(mainURL + `orders`, { method: "POST", body: JSON.stringify(order) })
//     .then((data) => console.log("post", data))
//     .catch((err) => console.log(err));
// }

// function updateOrderById(order) {
//   fetch(mainURL + `orders/${order.id}`, {
//     method: "PUT",
//     body: JSON.stringify(order),
//   })
//     .then((data) => console.log("update", data))
//     .catch((err) => console.log(err));
// }

// updateOrderById({
//   id: "2",
//   arrival_date: "2024-12-12",
//   adults: "12",
//   children: "12",
//   phone_num: "123456789",
//   type: "5dem",
//   status: "da huy",
//   updated_date: "2024-13-12",
//   updated_admin_id: 2,
// });

let currentEditRow = null;

// Function to open the edit form
function openEditForm(button) {
  currentEditRow = button.closest("tr");
  const cells = currentEditRow.children;

  document.getElementById("arrivalDate").value = cells[0].innerText;
  document.getElementById("adults").value = cells[1].innerText;
  document.getElementById("children").value = cells[2].innerText;
  document.getElementById("phoneNumber").value = cells[3].innerText;
  document.getElementById("type").value = cells[4].innerText;
  document.getElementById("status").value = cells[5].innerText.toLowerCase();

  document.getElementById("editForm").style.display = "block";
}

// Function to close the edit form
function closeEditForm() {
  document.getElementById("editForm").style.display = "none";
}

// Function to handle form submission
document
  .getElementById("editEntryForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const arrivalDate = document.getElementById("arrivalDate").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const type = document.getElementById("type").value;
    const status = document.getElementById("status").value;

    // Update the row with new values
    currentEditRow.children[0].innerText = arrivalDate;
    currentEditRow.children[1].innerText = adults;
    currentEditRow.children[2].innerText = children;
    currentEditRow.children[3].innerText = phoneNumber;
    currentEditRow.children[4].innerText = type;
    currentEditRow.children[5].innerHTML = `<span class="status ${status}">${
      status.charAt(0).toUpperCase() + status.slice(1)
    }</span>`;

    closeEditForm(); // Close the form
  });

// Function to remove a row
function removeRow(button) {
  const row = button.closest("tr");
  row.parentNode.removeChild(row);
}

// Function to open the add row form (you can implement this as needed)
function openAddForm() {
  // For simplicity, let's just add a new row with dummy data
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>2023-10-01</td>
        <td>2</td>
        <td>1</td>
        <td>9876543210</td>
        <td>Hotel</td>
        <td><span class="status available">Available</span></td>
        <td>
            <button onclick="openEditForm(this)">Edit</button>
            <button onclick="removeRow(this)">Remove</button>
        </td>
    `;
  document.getElementById("dataBody").appendChild(newRow);
}

// Function to filter the table based on phone number
document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll("#dataBody tr");

  rows.forEach((row) => {
    const phoneNumber = row.children[3].innerText.toLowerCase();
    if (phoneNumber.includes(filter)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
