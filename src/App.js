import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import Users from "./components/Users/Users.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route path="/profile" celement={<Profile />} />
          <Route path="/Message" element={<Dialogs />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
// Залить на гитхаб; Компонент с постами сделать также с помощью data вывести циклом 3 поста; в данных img, name, text. + читать 4 и 3 главы про пропсы
