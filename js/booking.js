const mainURL = "http://localhost:3000/";

// create data
const booking_list = [
  {
    arrival_date: "2024-04-17",
    adults: 2,
    children: 4,
    phone_num: "0199999999",
    type: "3dem",
  },
];

// check du lieu
if (!JSON.parse(localStorage.getItem("booking_list"))) {
  // luu du lieu mau
  localStorage.setItem("booking_list", JSON.stringify(booking_list));
}

// get data from input form
function booking() {
  const arrival_date = document.getElementById("Araival-Date").value;
  const adults = document.getElementById("Adults").value;
  const children = document.getElementById("Children").value;
  const phone_num = document.getElementById("Phone-number").value;
  const type = document.getElementById("type").value;

  // validate form
  if (!arrival_date || !adults || !children || !phone_num || !type) {
    alert("Fill the form");
    return;
  } else if (
    isNaN(parseInt(phone_num)) ||
    isNaN(parseInt(adults)) ||
    isNaN(parseInt(children))
  ) {
    alert("Please type number in field");
    return;
  } else if (Date.now() > Date.parse(arrival_date)) {
    // kiem tra ngay den
    alert("Please choose date again");
    return;
  } else {
    // add du lieu vao bang
    const bk_list = JSON.parse(localStorage.getItem("booking_list"));
    const bk_obj = {
      id: "2",
      arrival_date: arrival_date,
      adults: adults,
      children: children,
      phone_num: phone_num,
      type: type,
      status: "dang xu ly",
      updated_date: "2024-04-17",
      updated_admin_id: "1",
    };
    bk_list.push(bk_obj);
    // hien thong bao thanh cong
    alert("Book successful, you can check the History page");
    // cap nhat len local storage
    localStorage.setItem("booking_list", JSON.stringify(bk_list));
    // add du lieu len API
    fetch(mainURL + `orders`, { method: "POST", body: JSON.stringify(bk_obj) })
      .then((data) => console.log("post", data))
      .catch((err) => console.log(err));
    return;
  }
}

// bat su kien cho button book
document.getElementById("submit_form").addEventListener("click", (e) => {
  e.preventDefault(); // chan su kien mac dinh
  booking();
});
