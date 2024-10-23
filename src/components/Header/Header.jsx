
import logo from "../../img/Logo.png";
import style from "./Header.module.css";
import user from "../../img/User.jpg";


function Header() {
  return (
  <div className={style.header}>
    
    <img src={logo} alt="" />
    <div className={style.inf}>
      <img src={user} className={style.userImg} alt="" />
      <p   className={style.nick}>Валерий</p>
    </div>
  </div>)
}



export default Header;
