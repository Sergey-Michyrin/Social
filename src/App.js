import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import Users from "./components/Users/Users.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App({
  dialog_data,
  dialog_messages,
  posts_posts,
  addPost,
  addMessages,
  PostsChange,
  posts_text,
  MessageChange,
  text_message,
}) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        {<Navbar friends={dialog_data} />}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Profile
                posts={posts_posts}
                addPost={addPost}
                PostsChange={PostsChange}
                posts_text={posts_text}
              />
            }
          />
          <Route
            path="/Profile"
            element={
              <Profile
                posts={posts_posts}
                addPost={addPost}
                PostsChange={PostsChange}
                posts_text={posts_text}
              />
            }
          />
          <Route
            path="/Message"
            element={
              <Dialogs
                data={dialog_data}
                messages={dialog_messages}
                addMessages={addMessages}
                MessageChange={MessageChange}
                text_message={text_message}
              />
            }
          />
          <Route path="/Users" element={<Users users={dialog_data} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
// Попытаться решить проблему с inputom и текстом;
