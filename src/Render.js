import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "../src/data/state.jsx";

// Dialog

// Posts
let ReRender = (data) => {
  console.log(data);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App
        dialog_data={data.dialogs_data.data}
        dialog_messages={data.dialogs_data.messages}
        posts_posts={data.posts}
        addPost={addPost}
      />
    </React.StrictMode>
  );
};

export default ReRender;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
