import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
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
          <Route path="/Message" component={Dialogs} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
// Залить на гитхаб; Компонент с постами сделать также с помощью data вывести циклом 3 поста; в данных img, name, text. + читать 4 и 3 главы про пропсы
