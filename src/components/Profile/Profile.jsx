import style from "./Profile.module.css";
import user from "../../img/User.jpg";
import Posts from "../Posts/Posts.jsx";

function Profile({posts}) {
  return (
  <div className={style.profile}>
    <div className={style.profileHeader}>
        
        <h1 className={style.name}>Валерий Иванов</h1>
      </div>
      <div className={style.profileInfo}>
        <p className={style.about}>О себе: Увлекаюсь
           программированием и путешествиями. Люблю читать книги и смотреть научно-популярные фильмы.</p>
        <ul className={style.details}>
          <li>Возраст: 28 лет</li>
          <li>Город: Москва</li>
          <li>Образование: МГУ, факультет ВМК</li>
          <li>Работа: Frontend-разработчик</li>
        </ul>
      </div>


      <Posts posts={posts}/>




      
    
  </div>)
}


// 1)Исправить ошибки 2) Залить на Github 3)Задеплоить на versal.com
export default Profile;