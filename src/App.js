import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import Users from "./components/Users/Users.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App({ dialog_data, dialog_messages, posts_posts }) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Profile posts={posts_posts} />} />
          <Route path="/Profile" element={<Profile posts={posts_posts} />} />
          <Route
            path="/Message"
            element={<Dialogs data={dialog_data} messages={dialog_messages} />}
          />
          <Route path="/Users" element={<Users users={dialog_data} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
// Друзья отдельным компонентом;
