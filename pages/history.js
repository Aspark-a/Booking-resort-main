import Footer from "../component/footer.js";
import Nav from "../component/nav.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { database } from "../firebase-app.js";

export default class BookingHistory {
  constructor() {
    this.nav = new Nav();
    this.footer = new Footer();

    // Add title to the page
    document.querySelector(
      "head"
    ).innerHTML += `<title>Booking History</title>`;
  }
  render(mainContainer) {
    // Add navigation
    this.nav.render(mainContainer);

    // Create the booking history container
    const historyContainer = document.createElement("div");
    historyContainer.className = "booking-history-container";

    // Create the header
    const header = document.createElement("h1");
    header.textContent = "Booking History";
    historyContainer.appendChild(header);

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
    searchButton: addEventListener("click", this.search_history.bind(this));
    searchButton.textContent = "Search";
    searchBar.appendChild(searchButton);

    historyContainer.appendChild(searchBar);

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

    thead.appendChild(headerRow);
    dataTable.appendChild(thead);

    // Create the table body
    const tbody = document.createElement("tbody");
    tbody.id = "dataBody";

    

    dataTable.appendChild(tbody);
    historyContainer.appendChild(dataTable);

    // Append the history container to the main container
    mainContainer.appendChild(historyContainer);

    // Add footer
    this.footer.render(mainContainer);

    // Optionally, add any JavaScript file specific to this page
    // const script = document.createElement("script");
    // script.src = "./js/booking-history.js";
    // mainContainer.appendChild(script);
  }
  async search_history() {
    const input = document.getElementById("searchInput");
    const table = document.getElementById("dataBody");
    if (input.value === "" || input.value.length < 10) {
      alert("Please enter a phone number");
    } else {
          // lay du lieu tu firestore 
    const querySnapshot = await getDocs(collection(database, "booking"));
    const _this = this; // trong arrow func khong co ngu canh => giu lai du lieu cua this
    querySnapshot.forEach((doc) => {
      if (doc.data().phone_num == input.value) {
      const row = _this.renderRowData(doc.data());
      table.appendChild(row);
      }
    });
    }

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
    return dataRow;
  }
}
