export default class Footer {
  constructor() {}
  render(mainContainer) {
    // Create the footer element
    const footer = document.createElement("footer");
    footer.className = "footer";

    // Create the footer container div
    const footerContainer = document.createElement("div");
    footerContainer.className = "footer-container";

    // Create the footer logo div
    const footerLogo = document.createElement("div");
    footerLogo.className = "footer-logo";

    const logoTitle = document.createElement("h1");
    logoTitle.textContent = "Phu My Vila"; // Can be styled to look like a logo
    footerLogo.appendChild(logoTitle);

    // Append the footer logo to the footer container
    footerContainer.appendChild(footerLogo);

    // Create the footer links list
    const footerLinks = document.createElement("ul");
    footerLinks.className = "footer-links";

    // Add each link as a list item manually
    const link1 = document.createElement("li");
    const anchor1 = document.createElement("a");
    anchor1.href = "index.html";
    anchor1.textContent = "Home";
    link1.appendChild(anchor1);
    footerLinks.appendChild(link1);

    const link2 = document.createElement("li");
    const anchor2 = document.createElement("a");
    anchor2.href = "book.html";
    anchor2.textContent = "Book";
    link2.appendChild(anchor2);
    footerLinks.appendChild(link2);

    const link3 = document.createElement("li");
    const anchor3 = document.createElement("a");
    anchor3.href = "about.html";
    anchor3.textContent = "About";
    link3.appendChild(anchor3);
    footerLinks.appendChild(link3);

    const link4 = document.createElement("li");
    const anchor4 = document.createElement("a");
    anchor4.href = "history.html";
    anchor4.textContent = "History";
    link4.appendChild(anchor4);
    footerLinks.appendChild(link4);

    const link5 = document.createElement("li");
    const anchor5 = document.createElement("a");
    anchor5.href = "contact.html";
    anchor5.textContent = "Contact";
    link5.appendChild(anchor5);
    footerLinks.appendChild(link5);

    const link6 = document.createElement("li");
    const anchor6 = document.createElement("a");
    anchor6.href = "location.html";
    anchor6.textContent = "Location";
    link6.appendChild(anchor6);
    footerLinks.appendChild(link6);

    const link7 = document.createElement("li");
    const anchor7 = document.createElement("a");
    anchor7.href = "signup.html";
    anchor7.textContent = "Sign Up";
    link7.appendChild(anchor7);
    footerLinks.appendChild(link7);

    const link8 = document.createElement("li");
    const anchor8 = document.createElement("a");
    anchor8.href = "signin.html";
    anchor8.textContent = "Sign In";
    link8.appendChild(anchor8);
    footerLinks.appendChild(link8);

    // Append the footer links to the footer container
    footerContainer.appendChild(footerLinks);

    // Append the footer container to the footer
    footer.appendChild(footerContainer);

    // Finally, append the footer to the body or another container
    mainContainer.appendChild(footer);
  }
}
