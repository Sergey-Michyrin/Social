import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./data/state.jsx";

// Dialog

// Posts
let ReRender = (store) => {
  console.log(store.MessageChange.bind(store));
  ReactDOM.render(
    <App
      state={store}
      // addPost={store.addPost.bind(store)}
      // addMessages={store.addMessages.bind(store)}
      // PostsChange={store.PostsChange.bind(store)}
      // MessageChange={store.MessageChange.bind(store)}
    />,
    document.getElementById("root")
  );
};
ReRender(store.GetState());
store.Subscribe(ReRender);
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
