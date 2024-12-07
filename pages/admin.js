import Footer from "../component/footer.js";
import Nav from "../component/nav.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { database } from "../firebase-app.js";

export default class Admin {
  constructor() {
    this.nav = new Nav();
    this.footer = new Footer();

    // them title cho tag (ten trang web)
    document.querySelector("head").innerHTML += `<title>Admin</title>`;
  }
  async render(mainContainer) {
    // add nav
    this.nav.render(mainContainer);
    // Create the admin container
    const adminContainer = document.createElement("div");
    adminContainer.className = "admin-container";

    // Create the header
    const header = document.createElement("h1");
    header.textContent = "Admin Page";
    adminContainer.appendChild(header);

    // Create the search bar
    const searchBar = document.createElement("div");
    searchBar.className = "search-bar";

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "searchInput";
    searchInput.placeholder = "Search by phone number...";
    searchBar.appendChild(searchInput);

    const searchButton = document.createElement("button");
    searchButton.id = "search_btn";
    searchButton.textContent = "Search";
    searchBar.appendChild(searchButton);

    adminContainer.appendChild(searchBar);

    // Create the add row button
    const addRowButton = document.createElement("button");
    addRowButton.className = "add-row-button";
    addRowButton.setAttribute("onclick", "openAddForm()");
    addRowButton.textContent = "Add Row";
    adminContainer.appendChild(addRowButton);

    // Create the data table
    const dataTable = document.createElement("table");
    dataTable.className = "data-table";

    // Create the table head
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    // Create table headers
    const th1 = document.createElement("th");
    th1.textContent = "Arrival Date";
    headerRow.appendChild(th1);

    const th2 = document.createElement("th");
    th2.textContent = "Adults";
    headerRow.appendChild(th2);

    const th3 = document.createElement("th");
    th3.textContent = "Children";
    headerRow.appendChild(th3);

    const th4 = document.createElement("th");
    th4.textContent = "Phone Number";
    headerRow.appendChild(th4);

    const th5 = document.createElement("th");
    th5.textContent = "Type";
    headerRow.appendChild(th5);

    const th6 = document.createElement("th");
    th6.textContent = "Status";
    headerRow.appendChild(th6);

    const th7 = document.createElement("th");
    th7.textContent = "Actions";
    headerRow.appendChild(th7);

    thead.appendChild(headerRow);
    dataTable.appendChild(thead);

    // Create the table body
    const tbody = document.createElement("tbody");
    tbody.id = "dataBody";



    dataTable.appendChild(tbody);
    adminContainer.appendChild(dataTable);

    // Append the admin container to the document body
    mainContainer.appendChild(adminContainer);
    // Create the popup form container
    const popupForm = document.createElement("div");
    popupForm.className = "popup-form";
    popupForm.id = "editForm";

    // Create the form content container
    const formContent = document.createElement("div");
    formContent.className = "form-content";

    // Create the close button
    const closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.setAttribute("onclick", "closeEditForm()");
    closeButton.innerHTML = "&times;"; // Close symbol
    formContent.appendChild(closeButton);

    // Create the form header
    const formHeader = document.createElement("h2");
    formHeader.textContent = "Edit Entry";
    formContent.appendChild(formHeader);

    // Create the form element
    const editEntryForm = document.createElement("form");
    editEntryForm.id = "editEntryForm";

    // Create label and input for Arrival Date
    const labelArrivalDate = document.createElement("label");
    labelArrivalDate.setAttribute("for", "arrivalDate");
    labelArrivalDate.textContent = "Arrival Date:";
    editEntryForm.appendChild(labelArrivalDate);

    const inputArrivalDate = document.createElement("input");
    inputArrivalDate.type = "date";
    inputArrivalDate.id = "arrivalDate";
    inputArrivalDate.required = true;
    editEntryForm.appendChild(inputArrivalDate);

    // Create label and input for Adults
    const labelAdults = document.createElement("label");
    labelAdults.setAttribute("for", "adults");
    labelAdults.textContent = "Adults:";
    editEntryForm.appendChild(labelAdults);

    const inputAdults = document.createElement("input");
    inputAdults.type = "number";
    inputAdults.id = "adults";
    inputAdults.required = true;
    editEntryForm.appendChild(inputAdults);

    // Create label and input for Children
    const labelChildren = document.createElement("label");
    labelChildren.setAttribute("for", "children");
    labelChildren.textContent = "Children:";
    editEntryForm.appendChild(labelChildren);

    const inputChildren = document.createElement("input");
    inputChildren.type = "number";
    inputChildren.id = "children";
    inputChildren.required = true;
    editEntryForm.appendChild(inputChildren);

    // Create label and input for Phone Number
    const labelPhoneNumber = document.createElement("label");
    labelPhoneNumber.setAttribute("for", "phoneNumber");
    labelPhoneNumber.textContent = "Phone Number:";
    editEntryForm.appendChild(labelPhoneNumber);

    const inputPhoneNumber = document.createElement("input");
    inputPhoneNumber.type = "text";
    inputPhoneNumber.id = "phoneNumber";
    inputPhoneNumber.required = true;
    editEntryForm.appendChild(inputPhoneNumber);

    // Create label and input for Type
    const labelType = document.createElement("label");
    labelType.setAttribute("for", "type");
    labelType.textContent = "Type:";
    editEntryForm.appendChild(labelType);

    const inputType = document.createElement("input");
    inputType.type = "text";
    inputType.id = "type";
    inputType.required = true;
    editEntryForm.appendChild(inputType);

    // Create label and select for Status
    const labelStatus = document.createElement("label");
    labelStatus.setAttribute("for", "status");
    labelStatus.textContent = "Status:";
    editEntryForm.appendChild(labelStatus);

    const selectStatus = document.createElement("select");
    selectStatus.id = "status";

    const optionAvailable = document.createElement("option");
    optionAvailable.value = "available";
    optionAvailable.textContent = "Available";
    selectStatus.appendChild(optionAvailable);

    const optionBooked = document.createElement("option");
    optionBooked.value = "booked";
    optionBooked.textContent = "Booked";
    selectStatus.appendChild(optionBooked);

    const optionCanceled = document.createElement("option");
    optionCanceled.value = "canceled";
    optionCanceled.textContent = "Canceled";
    selectStatus.appendChild(optionCanceled);

    editEntryForm.appendChild(selectStatus);

    // Create the Save button
    const saveButton = document.createElement("button");
    saveButton.type = "submit";
    saveButton.textContent = "Save";
    editEntryForm.appendChild(saveButton);

    // Append the form to the form content container
    formContent.appendChild(editEntryForm);

    // Append the form content to the popup form
    popupForm.appendChild(formContent);

    // Append the popup form to the document body
    mainContainer.appendChild(popupForm);

    // add footer
    this.footer.render(mainContainer);

    // add js file
    // const script = document.createElement("script");
    // script.src = "./js/admin.js";
    // mainContainer.appendChild(script);
        // Add the table body to the data table
        await this.show_booking();
  }
  async show_booking() {
    const table = document.getElementById("dataBody");
          // lay du lieu tu firestore 
    const querySnapshot = await getDocs(collection(database, "booking"));
    const _this = this; // trong arrow func khong co ngu canh => giu lai du lieu cua this
    querySnapshot.forEach((doc) => {
      const row = _this.renderRowData(doc.data());
      table.appendChild(row);
    });
    

  }
  renderRowData(rowdata) {
    // Create a sample data row
    const dataRow = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = rowdata.arrival_date;
    dataRow.appendChild(td1);

    const td2 = document.createElement("td");
    td2.textContent = rowdata.adults;
    dataRow.appendChild(td2);

    const td3 = document.createElement("td");
    td3.textContent = rowdata.children;
    dataRow.appendChild(td3);

    const td4 = document.createElement("td");
    td4.textContent = rowdata.phone_num;
    dataRow.appendChild(td4);

    const td5 = document.createElement("td");
    td5.textContent = rowdata.type;
    dataRow.appendChild(td5);

    const td6 = document.createElement("td");
    const statusSpan = document.createElement("span");
    if (rowdata.status == "booked") {
      statusSpan.className = "status booked";
      statusSpan.textContent = "Booked";
    } else if (rowdata.status == "canceled") {
      statusSpan.className = "status canceled";
      statusSpan.textContent = "Canceled";
    } else if (rowdata.status == "available") {
      statusSpan.className = "status available";
      statusSpan.textContent = "Available";
    }
    td6.appendChild(statusSpan);
    dataRow.appendChild(td6);
    const td7 = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.setAttribute("onclick", "openEditForm(this)");
    editButton.textContent = "Edit";
    td7.appendChild(editButton);

    const removeButton = document.createElement("button");
    removeButton.setAttribute("onclick", "removeRow(this)");
    removeButton.textContent = "Remove";
    td7.appendChild(removeButton);

    dataRow.appendChild(td7);
    return dataRow;

  }
}
