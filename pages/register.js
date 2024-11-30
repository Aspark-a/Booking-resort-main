import app from "../app.js";
import Footer from "../component/footer.js";
import Nav from "../component/nav.js";
import Home from "./home.js";
import Signin from "./signin.js";
import {firebaseApp} from "../firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

export default class Register {
  constructor() {
    this.nav = new Nav();
    this.footer = new Footer();

    // them title cho tag (ten trang web)
    document.querySelector("head").innerHTML += `<title>Signin</title>`;
  }

  render(mainContainer) {
    // add nav
    this.nav.render(mainContainer);
    // Create the main div for the register page
    const registerPageDiv = document.createElement("div");
    registerPageDiv.className = "register-page";

    // Create the form container
    const formDiv = document.createElement("div");
    formDiv.className = "form";

    // Create the register form
    const registerForm = document.createElement("form");
    registerForm.className = "register-form";

    // Username input
    const registerUsernameInput = document.createElement("input");
    registerUsernameInput.type = "text";
    registerUsernameInput.placeholder = "username";

    // Email input
    const registerEmailInput = document.createElement("input");
    registerEmailInput.type = "email";
    registerEmailInput.placeholder = "email";

    // Password input
    const registerPasswordInput = document.createElement("input");
    registerPasswordInput.type = "password";
    registerPasswordInput.placeholder = "password";

    // Confirm password input
    const registerConfirmPasswordInput = document.createElement("input");
    registerConfirmPasswordInput.type = "password";
    registerConfirmPasswordInput.placeholder = "confirm password";

    // Register button
    const registerButton = document.createElement("button");
    registerButton.type = "submit";
    registerButton.textContent = "register";
    registerButton.addEventListener("click", this.create_account.bind(this));

    // Message for switching back to Signin
    const registerMessage = document.createElement("p");
    registerMessage.className = "message";
    registerMessage.innerHTML = "Already registered? <a>Sign in</a>";
    registerMessage.style.cursor = "pointer";
    registerMessage.addEventListener("click", this.goto_signin.bind(this));

    // Append inputs and button to the form
    registerForm.appendChild(registerUsernameInput);
    registerForm.appendChild(registerEmailInput);
    registerForm.appendChild(registerPasswordInput);
    registerForm.appendChild(registerConfirmPasswordInput);
    registerForm.appendChild(registerButton);
    registerForm.appendChild(registerMessage);

    // Append the form container to the main div
    formDiv.appendChild(registerForm);
    registerPageDiv.appendChild(formDiv);

    // Finally, append the registerPageDiv to the main container
    mainContainer.appendChild(registerPageDiv);

    // add footer
    this.footer.render(mainContainer);
  }

  create_account(event) {
    event.preventDefault();

    // Get form inputs
    const username = document.querySelector(
      ".register-form input[placeholder='username']"
    ).value;
    const email = document.querySelector(
      ".register-form input[placeholder='email']"
    ).value;
    const password = document.querySelector(
      ".register-form input[placeholder='password']"
    ).value;
    const confirmPassword = document.querySelector(
      ".register-form input[placeholder='confirm password']"
    ).value;

    // Validate input
    if (!username || !email || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Process registration logic
    // create account by firebase auth
    const auth = getAuth(firebaseApp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // luu them username
        updateProfile(user, {
          displayName: username,
          photoURL:
            "https://i.pinimg.com/236x/a3/9b/7b/a39b7b7bd7012a4f6fd2030c50e91d0e.jpg",
        })
          .then(() => {
            console.log("User profile updated");
          })
          .catch((error) => {
            alert("Update profile error:", error);
          });
        console.log(user);
        alert("Account created successfully! Proceed to sign in.");
        this.goto_signin();
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

      


  

  goto_signin() {
    const signin = new Signin();
    app.renderComponent(signin);
  }

  goto_home() {
    const home = new Home();
    app.renderComponent(home);
  }
}
