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
    navAnchor1.href = "index.html";
    navAnchor1.textContent = "Home";
    navLink1.appendChild(navAnchor1);
    navbarLinks.appendChild(navLink1);

    const navLink2 = document.createElement("li");
    const navAnchor2 = document.createElement("a");
    navAnchor2.href = "book.html";
    navAnchor2.textContent = "Book";
    navLink2.appendChild(navAnchor2);
    navbarLinks.appendChild(navLink2);

    const navLink3 = document.createElement("li");
    const navAnchor3 = document.createElement("a");
    navAnchor3.href = "about.html";
    navAnchor3.textContent = "About";
    navLink3.appendChild(navAnchor3);
    navbarLinks.appendChild(navLink3);

    const navLink4 = document.createElement("li");
    const navAnchor4 = document.createElement("a");
    navAnchor4.href = "history.html";
    navAnchor4.textContent = "History";
    navLink4.appendChild(navAnchor4);
    navbarLinks.appendChild(navLink4);

    const navLink5 = document.createElement("li");
    const navAnchor5 = document.createElement("a");
    navAnchor5.href = "contact.html";
    navAnchor5.textContent = "Contact";
    navLink5.appendChild(navAnchor5);
    navbarLinks.appendChild(navLink5);

    const navLink6 = document.createElement("li");
    const navAnchor6 = document.createElement("a");
    navAnchor6.href = "location.html";
    navAnchor6.textContent = "Location";
    navLink6.appendChild(navAnchor6);
    navbarLinks.appendChild(navLink6);

    const navLink7 = document.createElement("li");
    const navAnchor7 = document.createElement("a");
    navAnchor7.href = "signup.html";
    navAnchor7.textContent = "Sign Up";
    navLink7.appendChild(navAnchor7);
    navbarLinks.appendChild(navLink7);

    const navLink8 = document.createElement("li");
    const navAnchor8 = document.createElement("a");
    navAnchor8.href = "signin.html";
    navAnchor8.textContent = "Sign In";
    navLink8.appendChild(navAnchor8);
    navbarLinks.appendChild(navLink8);

    // Append the navbar links to the navbar container
    navbarContainer.appendChild(navbarLinks);

    // Append the navbar container to the navbar
    navbar.appendChild(navbarContainer);

    // Append the navbar to the document body
    document.body.appendChild(navbar);

    // Finally, append the navbar to the body or another container
    mainContainer.appendChild(navbar);
  }
}
