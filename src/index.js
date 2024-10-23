import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import s from "./img/User.jpg";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Dialog
let data = [
  { name: "Валерий", id: 1 },
  { name: "Денис", id: 2 },
  { name: "Богдан", id: 3 },
];
let messages = [
  { message: "Привет", id: 1 },
  { message: "гол", id: 2 },
  { message: "рессентимент", id: 3 },
];

// Posts

let posts = [
  { text: "Привет", id: 1, img: s, likes: 1861 },
  { text: "гол", id: 2, img: s, likes: 33 },
  { text: "рессентимент", id: 3, img: s, likes: 1612 },
  { text: "Проверка", id: 3, img: s, likes: 1917 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App dialog_data={data} dialog_messages={messages} posts_posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
