import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Message from "./components/Message/Message.jsx";
import Users from "./components/Users/Users.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/message" component={Message} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
// Необходимо создать компонент диалоги. Внутри просто див с текстом. Создать комп с друзьями. Сделать переход как backend;
