class Nav {
  constructor() {}
  render(mainContainer) {
    // Create the navbar element
    const navbar = document.createElement("nav");
    navbar.className = "navbar";

    // Create the navdiv element
    const navdiv = document.createElement("div");
    navdiv.className = "navdiv";

    // Create the logo element
    const logo = document.createElement("div");
    logo.className = "logo";
    const logoLink = document.createElement("a");
    logoLink.href = "./index.html";
    logoLink.textContent = "Phu My Villa";
    logo.appendChild(logoLink);

    // Create the unordered list
    const ul = document.createElement("ul");

    // Manually create each list item and append them to the unordered list
    const item1 = document.createElement("li");
    const link1 = document.createElement("a");
    link1.href = "./index.html#home";
    link1.textContent = "home";
    item1.appendChild(link1);
    ul.appendChild(item1);

    const item2 = document.createElement("li");
    const link2 = document.createElement("a");
    link2.href = "./index.html#book";
    link2.textContent = "book";
    item2.appendChild(link2);
    ul.appendChild(item2);

    const item3 = document.createElement("li");
    const link3 = document.createElement("a");
    link3.href = "./index.html#about";
    link3.textContent = "about";
    item3.appendChild(link3);
    ul.appendChild(item3);

    const item4 = document.createElement("li");
    const link4 = document.createElement("a");
    link4.href = "./html/history.html";
    link4.textContent = "history";
    item4.appendChild(link4);
    ul.appendChild(item4);

    const item5 = document.createElement("li");
    const link5 = document.createElement("a");
    link5.href = "./index.html#contact";
    link5.textContent = "contact";
    item5.appendChild(link5);
    ul.appendChild(item5);

    const item6 = document.createElement("li");
    const link6 = document.createElement("a");
    link6.href = "./index.html#location";
    link6.textContent = "location";
    item6.appendChild(link6);
    ul.appendChild(item6);

    const item7 = document.createElement("li");
    const link7 = document.createElement("a");
    link7.href = "./html/sign-up.html";
    link7.textContent = "sign up";
    item7.appendChild(link7);
    ul.appendChild(item7);

    const item8 = document.createElement("li");
    const link8 = document.createElement("a");
    link8.href = "./html/sign-in.html";
    link8.textContent = "sign in";
    item8.appendChild(link8);
    ul.appendChild(item8);

    // Append the logo and the unordered list to the navdiv
    navdiv.appendChild(logo);
    navdiv.appendChild(ul);

    // Append the navdiv to the navbar
    navbar.appendChild(navdiv);

    // Finally, append the navbar to the body or another container
    mainContainer.appendChild(navbar);
  }
}
