import Footer from "../component/footer.js";
import app from "../app.js";
import Nav from "../component/nav.js";
import { database, firebaseApp } from "../firebase-app.js";
import {
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

export default class Home {
  constructor() {
    this.nav = new Nav();
    this.footer = new Footer();

    // them title cho tag (ten trang web)
    document.title = "Home";
  }
  render(mainContainer) {
    // add nav
    this.nav.render(mainContainer);
    // Carousel ----------------------------------------------------------
    // Create the carousel container
    const carousel = document.createElement("div");
    carousel.className = "carousel";
    carousel.id = "carousel";

    // Create the carousel slides container
    const carouselSlides = document.createElement("div");
    carouselSlides.className = "carousel-slides";

    // Create the first slide (active)
    const slide1 = document.createElement("div");
    slide1.className = "carousel-slide active";
    const img1 = document.createElement("img");
    img1.src = "./asset/1.jpg";
    img1.alt = "Slide 1";
    slide1.appendChild(img1);
    carouselSlides.appendChild(slide1);

    // Create the second slide
    const slide2 = document.createElement("div");
    slide2.className = "carousel-slide";
    const img2 = document.createElement("img");
    img2.src = "./asset/2.jpg";
    img2.alt = "Slide 2";
    slide2.appendChild(img2);
    carouselSlides.appendChild(slide2);

    // Create the third slide
    const slide3 = document.createElement("div");
    slide3.className = "carousel-slide";
    const img3 = document.createElement("img");
    img3.src = "./asset/4.jpg";
    img3.alt = "Slide 3";
    slide3.appendChild(img3);
    carouselSlides.appendChild(slide3);

    // Append the slides container to the carousel
    carousel.appendChild(carouselSlides);

    // Create the previous button
    const prevButton = document.createElement("button");
    prevButton.className = "carousel-button prev";
    prevButton.setAttribute("onclick", "changeSlide(-1)");
    prevButton.innerHTML = "&#10094;"; // Left arrow character
    carousel.appendChild(prevButton);

    // Create the next button
    const nextButton = document.createElement("button");
    nextButton.className = "carousel-button next";
    nextButton.setAttribute("onclick", "changeSlide(1)");
    nextButton.innerHTML = "&#10095;"; // Right arrow character
    carousel.appendChild(nextButton);

    // Append the carousel to the document body
    mainContainer.appendChild(carousel);
    // create script to control carousel
    const script_carousel = document.createElement("script");
    script_carousel.src = "./js/carousel.js";
    mainContainer.appendChild(script_carousel);
    // Create the first section (Book) ------------------------------------
    const sectionBook = document.createElement("section");
    sectionBook.id = "book";

    const containerBook = document.createElement("div");
    containerBook.className = "container flex-space";

    const textDiv = document.createElement("div");
    textDiv.className = "text";
    textDiv.style.width = "100%";

    const h1Book = document.createElement("h1");
    const spanBook = document.createElement("span");
    spanBook.textContent = "Book";
    h1Book.appendChild(spanBook);
    h1Book.appendChild(document.createTextNode(" Your Rooms"));
    textDiv.appendChild(h1Book);

    const formDiv = document.createElement("div");
    formDiv.className = "form";

    const form = document.createElement("form");
    form.className = "grid";

    const arrivalDateInput = document.createElement("input");
    arrivalDateInput.id = "Araival-Date";
    arrivalDateInput.type = "date";
    arrivalDateInput.placeholder = "Araival Date";
    form.appendChild(arrivalDateInput);

    const adultsInput = document.createElement("input");
    adultsInput.id = "Adults";
    adultsInput.type = "number";
    adultsInput.placeholder = "Adults";
    form.appendChild(adultsInput);

    const childrenInput = document.createElement("input");
    childrenInput.id = "Children";
    childrenInput.type = "number";
    childrenInput.placeholder = "Children";
    form.appendChild(childrenInput);

    const phoneInput = document.createElement("input");
    phoneInput.id = "Phone-number";
    phoneInput.type = "text";
    phoneInput.placeholder = "Phone number";
    form.appendChild(phoneInput);

    const select = document.createElement("select");
    select.name = "type";
    select.id = "type";

    const option1 = document.createElement("option");
    option1.value = "3dem";
    option1.textContent = "3 days";
    select.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = "4dem";
    option2.textContent = "4 days";
    select.appendChild(option2);

    const option3 = document.createElement("option");
    option3.value = "5dem";
    option3.textContent = "5 days";
    select.appendChild(option3);

    const option4 = document.createElement("option");
    option4.value = "6dem";
    option4.textContent = "6 days";
    select.appendChild(option4);

    form.appendChild(select);

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "BOOK";
    submitButton.addEventListener("click", this.createBooking.bind(this));
    submitButton.id = "submit_form";
    form.appendChild(submitButton);

    formDiv.appendChild(form);
    containerBook.appendChild(textDiv);
    containerBook.appendChild(formDiv);
    sectionBook.appendChild(containerBook);

    // Create the second section (About)
    const sectionAbout = document.createElement("section");
    sectionAbout.id = "welcome";

    const containerAbout = document.createElement("div");
    containerAbout.className = "container flex";

    const leftDiv = document.createElement("div");
    leftDiv.className = "left w-80";

    const headingDiv = document.createElement("div");
    headingDiv.className = "heading";

    const h1About = document.createElement("h1");
    h1About.textContent = "WELCOME";
    headingDiv.appendChild(h1About);

    const h2About = document.createElement("h2");
    h2About.textContent = "Phu My Villa";
    headingDiv.appendChild(h2About);

    leftDiv.appendChild(headingDiv);

    const paragraph = document.createElement("p");
    paragraph.textContent =
      "Welcome to Phu My Vila, a serene and luxurious retreat located in the heart of [Location]. Our villa is designed to provide you with an unforgettable experience, combining comfort, elegance, and the beauty of nature. Whether you are looking for a romantic getaway, a family vacation, or a place to host special events, our villa offers the perfect setting.";
    leftDiv.appendChild(paragraph);

    const aboutButton = document.createElement("button");
    aboutButton.className = "primary-btn";
    aboutButton.textContent = "ABOUT US";
    aboutButton.addEventListener("click", this.scrollToAbout.bind(this));
    leftDiv.appendChild(aboutButton);

    const rightDiv = document.createElement("div");
    rightDiv.className = "right";
    rightDiv.style.marginLeft = "40px";

    const img = document.createElement("img");
    img.src = "./asset/3.jpg";
    img.alt = "";
    rightDiv.appendChild(img);

    containerAbout.appendChild(leftDiv);
    containerAbout.appendChild(rightDiv);
    sectionAbout.appendChild(containerAbout);

    // Create the third section (Counter)
    const sectionCounter = document.createElement("section");
    sectionCounter.className = "counter";

    const containerCounter = document.createElement("div");
    containerCounter.className = "container grid-4";

    const box1 = document.createElement("div");
    box1.className = "box";
    const h1Box1 = document.createElement("h1");
    h1Box1.textContent = "140$";
    const hrBox1 = document.createElement("hr");
    const spanBox1 = document.createElement("span");
    spanBox1.textContent = " 3 đêm";
    box1.appendChild(h1Box1);
    box1.appendChild(hrBox1);
    box1.appendChild(spanBox1);

    const box2 = document.createElement("div");
    box2.className = "box";
    const h1Box2 = document.createElement("h1");
    h1Box2.textContent = "145$";
    const hrBox2 = document.createElement("hr");
    const spanBox2 = document.createElement("span");
    spanBox2.textContent = "4 đêm";
    box2.appendChild(h1Box2);
    box2.appendChild(hrBox2);
    box2.appendChild(spanBox2);

    const box3 = document.createElement("div");
    box3.className = "box";
    const h1Box3 = document.createElement("h1");
    h1Box3.textContent = "175$";
    const hrBox3 = document.createElement("hr");
    const spanBox3 = document.createElement("span");
    spanBox3.textContent = "5 đêm";
    box3.appendChild(h1Box3);
    box3.appendChild(hrBox3);
    box3.appendChild(spanBox3);

    const box4 = document.createElement("div");
    box4.className = "box";
    const h1Box4 = document.createElement("h1");
    h1Box4.textContent = "215$";
    const hrBox4 = document.createElement("hr");
    const spanBox4 = document.createElement("span");
    spanBox4.textContent = "6 đêm";
    box4.appendChild(h1Box4);
    box4.appendChild(hrBox4);
    box4.appendChild(spanBox4);

    containerCounter.appendChild(box1);
    containerCounter.appendChild(box2);
    containerCounter.appendChild(box3);
    containerCounter.appendChild(box4);

    const bookingDiv = document.createElement("div");
    bookingDiv.className = "booking-div";

    const bookingButton = document.createElement("button");
    const bookingLink = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = "./index.html#book";
    anchor.textContent = "Book now!";
    bookingLink.appendChild(anchor);
    bookingButton.appendChild(bookingLink);
    bookingDiv.appendChild(bookingButton);

    sectionCounter.appendChild(containerCounter);
    sectionCounter.appendChild(bookingDiv);

    // Create "About Us" section
    const aboutSection = document.createElement("section");
    aboutSection.className = "about-section";
    aboutSection.id = "about";

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About Us";
    aboutSection.appendChild(aboutTitle);

    const aboutParagraph1 = document.createElement("p");
    aboutParagraph1.textContent =
      "Welcome to Phu My Vila, a serene and luxurious retreat located in the heart of [Location]. Our villa is designed to provide you with an unforgettable experience, combining comfort, elegance, and the beauty of nature. Whether you are looking for a romantic getaway, a family vacation, or a place to host special events, our villa offers the perfect setting.";
    aboutSection.appendChild(aboutParagraph1);

    const aboutParagraph2 = document.createElement("p");
    aboutParagraph2.textContent =
      "At Phu My Vila, we pride ourselves on our attention to detail and exceptional service. Our dedicated team is here to ensure that your stay is as enjoyable and relaxing as possible. Explore the stunning surroundings, unwind by the pool, or indulge in local cuisine prepared by our talented chefs.";
    aboutSection.appendChild(aboutParagraph2);

    const aboutParagraph3 = document.createElement("p");
    aboutParagraph3.textContent =
      "Book your stay with us today and discover the magic of Phu My Vila!";
    aboutSection.appendChild(aboutParagraph3);

    // Create "Contact Us" section
    const contactSection = document.createElement("section");
    contactSection.className = "contact-section";
    contactSection.id = "contact";

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact Us";
    contactSection.appendChild(contactTitle);

    const contactForm = document.createElement("form");
    contactForm.action = "your-server-endpoint";
    contactForm.method = "post";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.placeholder = "Your Name";
    nameInput.required = true;
    contactForm.appendChild(nameInput);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.placeholder = "Your Email";
    emailInput.required = true;
    contactForm.appendChild(emailInput);

    const messageTextarea = document.createElement("textarea");
    messageTextarea.name = "message";
    messageTextarea.rows = 5;
    messageTextarea.placeholder = "Your Message";
    messageTextarea.required = true;
    contactForm.appendChild(messageTextarea);

    const submitButton_contact = document.createElement("button");
    submitButton_contact.type = "submit";
    submitButton_contact.textContent = "Send Message";
    contactForm.appendChild(submitButton_contact);

    contactSection.appendChild(contactForm);

    // Create "Find Us" section
    const mapSection = document.createElement("section");
    mapSection.className = "map-section";
    mapSection.id = "location";

    const mapTitle = document.createElement("h2");
    mapTitle.textContent = "Find Us";
    mapSection.appendChild(mapTitle);

    const mapIframe = document.createElement("iframe");
    mapIframe.className = "map";
    mapIframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.9654331999386!2d107.06570477570179!3d10.581875562750794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175123ae227e8a1%3A0x3266cc7ff1daf036!2zxJDGsOG7nW5nIHPhu5EgMywgUGjDuiBN4bu5LCBUw6JuIFRow6BuaCwgQsOgIFLhu4thIC0gVsWpbmcgVMOgdSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1734160819580!5m2!1sen!2s";
    mapIframe.allowFullscreen = true;
    mapIframe.loading = "lazy";
    mapSection.appendChild(mapIframe);

    // Append all sections to the body or another container
    mainContainer.appendChild(sectionBook);
    mainContainer.appendChild(sectionAbout);
    mainContainer.appendChild(sectionCounter);
    mainContainer.appendChild(aboutSection);
    mainContainer.appendChild(contactSection);
    mainContainer.appendChild(mapSection);

    // add footer
    this.footer.render(mainContainer);
  }

  async createBooking(event) {
    event.preventDefault();
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
      const bk_obj = {
        arrival_date: arrival_date,
        adults: adults,
        children: children,
        phone_num: phone_num,
        type: type,
        status: "available",
      };
      try {
        const docRef = await addDoc(collection(database, "booking"), bk_obj);
        console.log("Document written with ID: ", docRef.id);
        alert("Create post successfully");
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      // hien thong bao thanh cong
      alert("Book successful, you can check the History page");
    }
  }
  scrollToAbout() {
    const target_section = document.getElementById("about");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  scrollToBook() {
    const target_section = document.getElementById("book");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  scrollToHome() {
    const target_section = document.getElementById("home");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  scrollToContact() {
    const target_section = document.getElementById("contact");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  scrollToAbout() {
    const target_section = document.getElementById("about");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  scrollToLocation() {
    const target_section = document.getElementById("location");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
