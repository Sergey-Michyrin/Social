import React from 'react';
import style from "./Navbar.module.css";

function Navbar() {
 

  return (
    <nav className={style.navbar}>
      <ul className={style.friendList}>
        <li className={style.friendItem}><a  href="" className={style.friendLink}>Message</a></li>
        <li className={style.friendItem}><a  href="" className={style.friendLink}>Users</a></li>
        <li className={style.friendItem}><a  href="" className={style.friendLink}>Profile</a></li>
       
      </ul>
    </nav>
  )
}

export default Navbar;


{/* <h2 className={style.title}>Друзья</h2>
<ul className={style.friendList}>
  {friends.map(friend => (
    <li key={friend.id} className={style.friendItem}>
      <a href={`#friend-${friend.id}`} className={style.friendLink}>
        {friend.name}
      </a>
    </li>
  ))}
</ul> */}

// const friends = [
//   { id: 1, name: "Алексей" },
//   { id: 2, name: "Мария" },
//   { id: 3, name: "Дмитрий" },
//   { id: 4, name: "Елена" },
//   { id: 5, name: "Сергей" },
// ];
