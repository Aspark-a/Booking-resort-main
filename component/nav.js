import Home from "../pages/home.js";
import app from "../app.js";
import Register from "../pages/register.js";
import Signin from "../pages/signin.js";
import BookingHistory from "../pages/history.js";

export default class Nav {
  constructor() {}
  render(mainContainer) {
    // Create the navbar element
    const navbar = document.createElement("nav");
    navbar.className = "navbar";

    // Create the navbar container div
    const navbarContainer = document.createElement("div");
    navbarContainer.className = "navbar-container";

    // Create the navbar logo
    const navbarLogo = document.createElement("h1");
    navbarLogo.className = "navbar-logo";
    navbarLogo.textContent = "Phu My Vila"; // Logo text
    navbarContainer.appendChild(navbarLogo);

    // Create the navbar links list
    const navbarLinks = document.createElement("ul");
    navbarLinks.className = "navbar-links";

    // Add each link as a list item manually
    const navLink1 = document.createElement("li");
    const navAnchor1 = document.createElement("a");
    navAnchor1.addEventListener("click", this.scrollToHome.bind(this));
    navAnchor1.textContent = "Home";
    navLink1.appendChild(navAnchor1);
    navbarLinks.appendChild(navLink1);

    const navLink2 = document.createElement("li");
    const navAnchor2 = document.createElement("a");
    navAnchor2.addEventListener("click", this.scrollToBook.bind(this));
    navAnchor2.textContent = "Book";
    navLink2.appendChild(navAnchor2);
    navbarLinks.appendChild(navLink2);

    const navLink3 = document.createElement("li");
    const navAnchor3 = document.createElement("a");
    navAnchor3.addEventListener("click", this.scrollToAbout.bind(this));
    navAnchor3.textContent = "About";
    navLink3.appendChild(navAnchor3);
    navbarLinks.appendChild(navLink3);

    const navLink4 = document.createElement("li");
    const navAnchor4 = document.createElement("a");
    navAnchor4.addEventListener("click", this.goToHistory.bind(this));
    navAnchor4.textContent = "History";
    navLink4.appendChild(navAnchor4);
    navbarLinks.appendChild(navLink4);

    const navLink5 = document.createElement("li");
    const navAnchor5 = document.createElement("a");
    navAnchor5.addEventListener("click", this.scrollToContact.bind(this));
    navAnchor5.textContent = "Contact";
    navLink5.appendChild(navAnchor5);
    navbarLinks.appendChild(navLink5);

    const navLink6 = document.createElement("li");
    const navAnchor6 = document.createElement("a");
    navAnchor6.addEventListener("click", this.scrollToLocation.bind(this));
    navAnchor6.textContent = "Location";
    navLink6.appendChild(navAnchor6);
    navbarLinks.appendChild(navLink6);

    const navLink7 = document.createElement("li");
    const navAnchor7 = document.createElement("a");
    navAnchor7.addEventListener("click", this.goToSignUp.bind(this));
    navAnchor7.textContent = "Sign Up";
    navLink7.appendChild(navAnchor7);
    navbarLinks.appendChild(navLink7);

    const navLink8 = document.createElement("li");
    const navAnchor8 = document.createElement("a");
    navAnchor8.addEventListener("click", this.goToSignIn.bind(this));
    navAnchor8.textContent = "Sign In";
    navLink8.appendChild(navAnchor8);
    navbarLinks.appendChild(navLink8);

    const navLink9 = document.createElement("li");
    const navAnchor9 = document.createElement("a");
    navAnchor9.textContent = "Sign Out";
    navLink9.appendChild(navAnchor9);
    navbarLinks.appendChild(navLink9);

    // Append the navbar links to the navbar container
    navbarContainer.appendChild(navbarLinks);

    // Append the navbar container to the navbar
    navbar.appendChild(navbarContainer);

    // Append the navbar to the document body
    document.body.appendChild(navbar);

    // Finally, append the navbar to the body or another container
    mainContainer.appendChild(navbar);
  }
  scrollToAbout() {
    const home = new Home();
    app.renderComponent(home);
    Home.scrollToAbout();
  }

  goToHistory() {
    const history = new BookingHistory();
    app.renderComponent(history);
  }

  scrollToBook() {
    const home = new Home();
    app.renderComponent(home);
    home.scrollToBook();
  }

  scrollToHome() {
    const home = new Home();
    app.renderComponent(home);
  }

  scrollToContact() {
    const home = new Home();
    app.renderComponent(home);
    home.scrollToContact();
  }

  scrollToLocation() {
    const home = new Home();
    app.renderComponent(home);
    home.scrollToLocation();
  }

  goToSignUp() {
    const register = new Register();
    app.renderComponent(register);
  }

  goToSignIn() {
    const login = new Signin();
    app.renderComponent(login);
  }
}
