import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Header from "../Header/Header";
import style from './Dialogs.module.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Messages from "./Messages/Messages"
let data = [{name:"Валерий", id:1},{name:"Денис", id:2},{name:"Богдан", id:3}];
let messages = [{message:"Привет", id:1},{message:"гол", id:2},{message:"рессентимент", id:3}];

function Dialogs() {
  return (
    <div className={style.main}>
      <div>

        <h1>Страница сообщений</h1>
    
        <div className={style.friends}>
          
          {data.map((i, idx) => {
            return <DialogItem key={idx}  name={i.name} id={i.id}/>
            
                          }
          )
          }
        </div>

      </div>


    <div className={style.message}>

      <div className={style.letters}>
      {   messages.map((i, idx) => {
            return <Messages key={idx} text={i.message} id={i.id}/>})
      }
      </div>

      

      

      <div className={style.send}>
        <input type="text" placeholder='Напишите текст сообщения' />
        <button>Отправить</button>
      </div>

    </div>



  </div>
    

  );
}

export default Dialogs;