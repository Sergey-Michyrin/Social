import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "../src/data/state.jsx";
import { addMessages } from "../src/data/state.jsx";
import { PostsChange } from "../src/data/state.jsx";

// Dialog

// Posts
let ReRender = (data) => {
  console.log(data);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <App
      dialog_data={data.dialogs_data.data}
      dialog_messages={data.dialogs_data.messages}
      posts_posts={data.posts}
      posts_text={data.posts.posts_text}
      addPost={addPost}
      addMessages={addMessages}
      PostsChange={PostsChange}
    />
  );
};

export default ReRender;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
