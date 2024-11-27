export default class Signin {
  constructor() {}
  render(mainContainer) {
    // Create the main div for the login page
    const loginPageDiv = document.createElement("div");
    loginPageDiv.className = "login-page";

    // Create the form container
    const formDiv = document.createElement("div");
    formDiv.className = "form";

    // Create the login form
    const loginForm = document.createElement("form");
    loginForm.className = "login-form";

    const loginUsernameInput = document.createElement("input");
    loginUsernameInput.type = "text";
    loginUsernameInput.placeholder = "username";

    const loginPasswordInput = document.createElement("input");
    loginPasswordInput.type = "password";
    loginPasswordInput.placeholder = "password";

    const loginButton = document.createElement("button");
    loginButton.textContent = "login";

    const loginMessage = document.createElement("p");
    loginMessage.className = "message";
    loginMessage.innerHTML =
      'Not registered? <a href="#" id="">Create an account</a>';

    loginForm.appendChild(loginUsernameInput);
    loginForm.appendChild(loginPasswordInput);
    loginForm.appendChild(loginButton);
    loginForm.appendChild(loginMessage);

    // Append forms to the form container
    formDiv.appendChild(loginForm);

    // Append the form container to the main div
    loginPageDiv.appendChild(formDiv);

    // Finally, append the loginPageDiv to the body or any other container
    mainContainer.appendChild(loginPageDiv);
  }
}
