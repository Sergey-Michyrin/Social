import React, { useState } from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Header from "../Header/Header";
import style from './Dialogs.module.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Messages from "./Messages/Messages";
import {createRef}  from "react"


let text = React.createRef();



function Dialogs({data, messages, addMessages, MessageChange, text_message}) {
  const [text_mess, setText_mess] = useState("");
      let add_messages = ()=>{
            if(text.current.value.length >=2){
                  addMessages(text.current.value);
                
                  // MessageChange(text.current.value = "");
                  setText_mess(text.current.value="");
            }
  
           
           
          };

          let message_change = ()=>{
            // MessageChange(text.current.value);
            setText_mess(text.current.value);
          };
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
            
        <textarea onChange={message_change} type="text" ref = {text} placeholder="Напишите текст" value={text_mess} />
        <button onClick={add_messages}>Отправить</button>
      </div>

    </div>



  </div>
    

  );
}

export default Dialogs;