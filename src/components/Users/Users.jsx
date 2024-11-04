import React from 'react';
import style from './Users.module.css';
import img_1 from "../../img/User.jpg"
import User from './User/User';
function Users({users}) {
  console.log({users});
  return (
    <div >
      <h1>Страница пользователей</h1>

      <div className={style.friends}>
      {users.map((i, qw) => {
            return <User name={i.name} key={qw}/>
            
                          }
          )
          }
      </div>
      
    </div>
  );
}

export default Users;