import app from "../app.js";
import Footer from "../component/footer.js";
import Nav from "../component/nav.js";
import Admin from "./admin.js";
import Home from "./home.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

export default class Signin {
  constructor() {
    this.nav = new Nav();
    this.footer = new Footer();

    // them title cho tag (ten trang web)
    document.title = "Home";
  }
  render(mainContainer) {
    // add nav
    this.nav.render(mainContainer);
    // Create the main div for the login page
    const loginPageDiv = document.createElement("div");
    loginPageDiv.className = "login-page";

    // Create the form container
    const formDiv = document.createElement("div");
    formDiv.className = "form";

    // Create the login form
    const loginForm = document.createElement("form");
    loginForm.className = "login-form";

    const loginEmailInput = document.createElement("input");
    loginEmailInput.type = "email";
    loginEmailInput.placeholder = "email";

    const loginPasswordInput = document.createElement("input");
    loginPasswordInput.type = "password";
    loginPasswordInput.placeholder = "password";

    const loginButton = document.createElement("button");
    loginButton.type = "submit";
    loginButton.textContent = "login";
    loginButton.addEventListener("click", this.check_login.bind(this));

    const loginMessage = document.createElement("p");
    loginMessage.className = "message";
    loginMessage.innerHTML =
      "If you had error, please contact with your manager";
    loginMessage.style.cursor = "pointer";

    loginForm.appendChild(loginEmailInput);
    loginForm.appendChild(loginPasswordInput);
    loginForm.appendChild(loginButton);
    loginForm.appendChild(loginMessage);

    // Append forms to the form container
    formDiv.appendChild(loginForm);

    // Append the form container to the main div
    loginPageDiv.appendChild(formDiv);

    // Finally, append the loginPageDiv to the body or any other container
    mainContainer.appendChild(loginPageDiv);

    // add footer
    this.footer.render(mainContainer);
  }

  check_login(event) {
    event.preventDefault();

    // Get form inputs
    const email = document.querySelector(
      ".login-form input[placeholder='email']"
    ).value;
    const password = document.querySelector(
      ".login-form input[placeholder='password']"
    ).value;

    // Validate input
    if (!email || !password) {
      alert("All fields are required.");
      return;
    }
    // login by firebase auth
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("login success");
        this.goto_admin();
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  goto_admin() {
    const home = new Admin();
    app.renderComponent(home);
  }
}
