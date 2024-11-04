import React from 'react';
import style from "./BestFriends.module.css";
import {NavLink} from "react-router-dom"
import avatar from "../../../img/User.jpg"

function BestFriends({friends}) {
 

  return (
    <div className={style.cont}>
        <div className={style.friend}>
            <p>{friends[0].name}</p>
            <img src={avatar} alt="" />
        </div>
        <div className={style.friend}>
        <p>{friends[1].name}</p>
        <img src={avatar} alt="" />
        </div>
        <div className={style.friend}>
        <p>{friends[2].name}</p>
        <img src={avatar} alt="" />
        </div>
    </div>
  )
}

export default BestFriends;