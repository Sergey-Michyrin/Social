import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store_master from "./data/state.jsx";

// Dialog

// Posts
let ReRender = (store) => {
  ReactDOM.render(
    <App state={store} dispatch={store_master.dispatch.bind(store_master)} />,
    document.getElementById("root")
  );
};
ReRender(store_master.GetState());
store_master.Subscribe(ReRender);
// Разобраться с bind, решить задачи; disputch в шпаргалке
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
