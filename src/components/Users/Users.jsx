import React from 'react';
import style from './Users.module.css';
import img_1 from "../../img/User.jpg"
function Users({users}) {
  console.log({users});
  return (
    <div>
      <h1>Страница пользователей</h1>

      <div className={style.friends}>
        <div className={style.friend}>
          <p>{users[0].name}</p>
          <img src={img_1} alt="" />
        </div>
        <div className={style.friend}>
          <p>{users[1].name}</p>
        <img src={img_1} alt="" />
        </div>
        <div className={style.friend}>
          <p>{users[2].name}</p>
        <img src={img_1} alt="" />
        </div>
      </div>
      {/* Добавьте здесь содержимое страницы пользователей */}
    </div>
  );
}

export default Users;