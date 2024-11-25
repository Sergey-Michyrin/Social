import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store_master from "./data/state.jsx";

// Dialog

// Posts
let ReRender = (store) => {
  ReactDOM.render(
    <App
      state={store}
      addPost={store_master.addPost.bind(store_master)}
      addMessages={store_master.addMessages.bind(store_master)}
      PostsChange={store_master.PostsChange.bind(store_master)}
      MessageChange={store_master.MessageChange.bind(store_master)}
    />,
    document.getElementById("root")
  );
};
ReRender(store_master.GetState());
store_master.Subscribe(ReRender);
// Sdelat tak ch
//                    to-by vse zarabotalo; + GitHub +
// Zakommentirovat knopki(TOLKO DANNIYE)
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// /+-/ Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
// Sdelat tak chto-by vse zarabotalo;
export default ReRender;
