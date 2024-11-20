// import ReRender from "./Render";
// import data from "../src/data/state.jsx";

// ReRender(data);
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost } from "../src/data/state.jsx";
import { addMessages } from "../src/data/state.jsx";
import { PostsChange } from "../src/data/state.jsx";
import { MessageChange } from "../src/data/state.jsx";
import state from "./data/state.jsx";
import { Subscribe } from "../src/data/state.jsx";

// Dialog

// Posts
let ReRender = (data) => {
  ReactDOM.render(
    <App
      dialog_data={data.dialogs_data.data}
      dialog_messages={data.dialogs_data.messages}
      posts_posts={data.posts}
      addPost={addPost}
      addMessages={addMessages}
      PostsChange={PostsChange}
      MessageChange={MessageChange}
      posts_text={data.posts.posts_text}
      text_message={data.dialogs_data.text_message}
    />,
    document.getElementById("root")
  );
};
ReRender(state);
Subscribe(ReRender);

export default ReRender;
