import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import Users from "./components/Users/Users.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App({
  state,

  dispatch,
}) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        {<Navbar friends={state.dialogs_data.data} />}
        <Routes>
          <Route
            exact
            path="/"
            element={<Profile posts={state.posts} dispatch={dispatch} />}
          />
          <Route
            path="/Profile"
            element={<Profile posts={state.posts} dispatch={dispatch} />}
          />
          <Route
            path="/Message"
            element={
              <Dialogs
                data={state.dialogs_data.data}
                messages={state.dialogs_data.messages}
                text_message={state.dialogs_data.text_message}
                dispatch={dispatch}
              />
            }
          />
          <Route
            path="/Users"
            element={<Users users={state.dialogs_data.data} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
// Попытаться решить проблему с inputom и текстом;
