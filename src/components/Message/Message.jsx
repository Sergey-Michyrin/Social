import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Header from "../Header/Header";
import style from './Message.module.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Message() {
  return (
    <div className={style.main}>
      <div>

        <h1>Страница сообщений</h1>
    
        <div className={style.friends}>
          <DialogItem name={"Валерий"} id={1}/>
          <DialogItem name={"Денис"} id={2}/>
          <DialogItem name={"Богдан"} id={3}/>
        </div>

      </div>


    <div className={style.message}>

      <div className={style.letters}>
        <p>Как дела?</p>
        <p>Го на марс</p>
        <p>Где мой чип?</p>
        <p>Где мой чип?</p>
        <p>Где мой чип?</p>
        <p>Где мой чип?</p>
        <p>Где мой чип?</p>
        <p>Где мой чип?</p>
        <p>Где мой чип?</p>
      </div>

      

      

      <div className={style.send}>
        <input type="text" placeholder='Напишите текст сообщения' />
        <button>Отправить</button>
      </div>

    </div>



  </div>
    

  );
}

export default Message;