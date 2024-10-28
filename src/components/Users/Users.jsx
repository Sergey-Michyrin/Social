import React from 'react';
import style from './Users.module.css';
import img_1 from "../../img/User.jpg"
function Users({users}) {
  return (
    <div>
      <h1>Страница пользователей</h1>

      <div className={style.friends}>
        <div className={style.friend}>
          <p>Валерий</p>
          <img src={img_1} alt="" />
        </div>
        <div className={style.friend}>
        <p>Денис</p>
        <img src={img_1} alt="" />
        </div>
        <div className={style.friend}>
        <p>Богдан</p>
        <img src={img_1} alt="" />
        </div>
      </div>
      {/* Добавьте здесь содержимое страницы пользователей */}
    </div>
  );
}

export default Users;