import Home from "./pages/home.js";
class App {
  constructor() {
    this.mainContainer = document.getElementById("app");
  }

  renderComponent(component) {
    // xoa du lieu cu -> add component moi
    this.mainContainer.innerHTML = "";
    component.render(this.mainContainer);
  }
}

// 1 project = 1 app
const app = new App();
const home = new Home();
app.renderComponent(home);

export default app;
