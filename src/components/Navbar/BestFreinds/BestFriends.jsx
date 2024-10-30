import React from 'react';
import style from "./BestFriends.module.css";
import {NavLink} from "react-router-dom"
import avatar from "../../../img/User.jpg"

function BestFriends() {
 

  return (
    <div className={style.cont}>
        <div className={style.friend}>
            <p>Valera</p>
            <img src={avatar} alt="" />
        </div>
        <div className={style.friend}>
        <p>Denis</p>
        <img src={avatar} alt="" />
        </div>
        <div className={style.friend}>
        <p>Bogdan</p>
        <img src={avatar} alt="" />
        </div>
    </div>
  )
}

export default BestFriends;