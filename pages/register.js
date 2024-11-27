export default class Register {
    constructor() {}
    render(mainContainer) {
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
      registerButton.textContent = "register";
  
      // Message for switching to login
      const registerMessage = document.createElement("p");
      registerMessage.className = "message";
      registerMessage.innerHTML =
        'Already registered? <a href="#" id="to-login">Sign in</a>';
  
      // Append inputs and button to the form
      registerForm.appendChild(registerUsernameInput);
      registerForm.appendChild(registerEmailInput);
      registerForm.appendChild(registerPasswordInput);
      registerForm.appendChild(registerConfirmPasswordInput);
      registerForm.appendChild(registerButton);
      registerForm.appendChild(registerMessage);
  
      // Append form to the form container
      formDiv.appendChild(registerForm);
  
      // Append the form container to the main div
      registerPageDiv.appendChild(formDiv);
  
      // Finally, append the registerPageDiv to the body or any other container
      mainContainer.appendChild(registerPageDiv);
    }
  }
  