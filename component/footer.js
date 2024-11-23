class Footer {
  constructor() {}
  render(mainContainer) {
    // Create the footer element
    const footer = document.createElement("footer");
    footer.className = "site-footer";

    // Create the container div
    const container = document.createElement("div");
    container.className = "container";

    // Create the row div
    const row = document.createElement("div");
    row.className = "row";

    // Create the first column for "About"
    const col1 = document.createElement("div");
    col1.className = "col-sm-12 col-md-6";
    const h6About = document.createElement("h6");
    h6About.textContent = "About";
    const pAbout = document.createElement("p");
    pAbout.className = "text-justify";
    pAbout.innerHTML = `Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
help the upcoming programmers with the code. Scanfcode focuses on
providing the most efficient code or snippets as the code wants to
be simple. We will help programmers build up concepts in different
programming languages that include C, C++, Java, HTML, CSS,
Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.`;
    col1.appendChild(h6About);
    col1.appendChild(pAbout);

    // Create the second column for "Categories"
    const col2 = document.createElement("div");
    col2.className = "col-xs-6 col-md-3";
    const h6Categories = document.createElement("h6");
    h6Categories.textContent = "Categories";
    const ulCategories = document.createElement("ul");
    ulCategories.className = "footer-links";

    const liCat1 = document.createElement("li");
    const linkCat1 = document.createElement("a");
    linkCat1.href = "http://scanfcode.com/category/c-language/";
    linkCat1.textContent = "C";
    liCat1.appendChild(linkCat1);
    ulCategories.appendChild(liCat1);

    const liCat2 = document.createElement("li");
    const linkCat2 = document.createElement("a");
    linkCat2.href = "http://scanfcode.com/category/front-end-development/";
    linkCat2.textContent = "UI Design";
    liCat2.appendChild(linkCat2);
    ulCategories.appendChild(liCat2);

    const liCat3 = document.createElement("li");
    const linkCat3 = document.createElement("a");
    linkCat3.href = "http://scanfcode.com/category/back-end-development/";
    linkCat3.textContent = "PHP";
    liCat3.appendChild(linkCat3);
    ulCategories.appendChild(liCat3);

    const liCat4 = document.createElement("li");
    const linkCat4 = document.createElement("a");
    linkCat4.href = "http://scanfcode.com/category/java-programming-language/";
    linkCat4.textContent = "Java";
    liCat4.appendChild(linkCat4);
    ulCategories.appendChild(liCat4);

    const liCat5 = document.createElement("li");
    const linkCat5 = document.createElement("a");
    linkCat5.href = "http://scanfcode.com/category/android/";
    linkCat5.textContent = "Android";
    liCat5.appendChild(linkCat5);
    ulCategories.appendChild(liCat5);

    const liCat6 = document.createElement("li");
    const linkCat6 = document.createElement("a");
    linkCat6.href = "http://scanfcode.com/category/templates/";
    linkCat6.textContent = "Templates";
    liCat6.appendChild(linkCat6);
    ulCategories.appendChild(liCat6);

    col2.appendChild(h6Categories);
    col2.appendChild(ulCategories);

    // Create the third column for "Quick Links"
    const col3 = document.createElement("div");
    col3.className = "col-xs-6 col-md-3";
    const h6QuickLinks = document.createElement("h6");
    h6QuickLinks.textContent = "Quick Links";
    const ulQuickLinks = document.createElement("ul");
    ulQuickLinks.className = "footer-links";

    const liLink1 = document.createElement("li");
    const linkLink1 = document.createElement("a");
    linkLink1.href = "http://scanfcode.com/about/";
    linkLink1.textContent = "About Us";
    liLink1.appendChild(linkLink1);
    ulQuickLinks.appendChild(liLink1);

    const liLink2 = document.createElement("li");
    const linkLink2 = document.createElement("a");
    linkLink2.href = "http://scanfcode.com/contact/";
    linkLink2.textContent = "Contact Us";
    liLink2.appendChild(linkLink2);
    ulQuickLinks.appendChild(liLink2);

    const liLink3 = document.createElement("li");
    const linkLink3 = document.createElement("a");
    linkLink3.href = "http://scanfcode.com/contribute-at-scanfcode/";
    linkLink3.textContent = "Contribute";
    liLink3.appendChild(linkLink3);
    ulQuickLinks.appendChild(liLink3);

    const liLink4 = document.createElement("li");
    const linkLink4 = document.createElement("a");
    linkLink4.href = "http://scanfcode.com/privacy-policy/";
    linkLink4.textContent = "Privacy Policy";
    liLink4.appendChild(linkLink4);
    ulQuickLinks.appendChild(liLink4);

    const liLink5 = document.createElement("li");
    const linkLink5 = document.createElement("a");
    linkLink5.href = "http://scanfcode.com/sitemap/";
    linkLink5.textContent = "Sitemap";
    liLink5.appendChild(linkLink5);
    ulQuickLinks.appendChild(liLink5);

    col3.appendChild(h6QuickLinks);
    col3.appendChild(ulQuickLinks);

    // Append all columns to the row
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    // Append the row to the container
    container.appendChild(row);

    // Create the horizontal rule
    const hr = document.createElement("hr");
    container.appendChild(hr);

    // Append the container to the footer
    footer.appendChild(container);

    // Finally, append the footer to the body or another container
    mainContainer.appendChild(footer);
  }
}
