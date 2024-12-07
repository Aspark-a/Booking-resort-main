import Admin from "./pages/admin.js";
import BookingHistory from "./pages/history.js";
import Home from "./pages/home.js";
import Register from "./pages/register.js";
import Signin from "./pages/signin.js";
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
const login = new Signin();
const register = new Register();
const admin = new Admin();
const history = new BookingHistory();
app.renderComponent(admin);

export default app;
