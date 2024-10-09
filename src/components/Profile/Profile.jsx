import style from "./Profile.module.css";
import user from "../../img/User.jpg";

function Profile() {
  return (
  <div className={style.profile}>
    <div className={style.profileHeader}>
        
        <h1 className={style.name}>Валерий Иванов</h1>
      </div>
      <div className={style.profileInfo}>
        <p className={style.about}>О себе: Увлекаюсь программированием и путешествиями. Люблю читать книги и смотреть научно-популярные фильмы.</p>
        <ul className={style.details}>
          <li>Возраст: 28 лет</li>
          <li>Город: Москва</li>
          <li>Образование: МГУ, факультет ВМК</li>
          <li>Работа: Frontend-разработчик</li>
        </ul>
      </div>
      <div className={style.posts}>
       <p>Мои посты</p>
      <input type="text" />
      <button>Опубликовать пост</button>


      <div className={style.post}>
        <div className={style.img_cont}>
        <img src={user} className={style.userImg} alt="" />
        <span>Меладзе</span>
        </div>
        <p className={style.textMessage}>СообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещение</p>
        <div className={style.under}></div>
      </div>


      <div className={style.post}>
        <div className={style.img_cont}>
        <img src={user} className={style.userImg} alt="" />
        <span>Меладзе</span>
        </div>
        <p className={style.textMessage}>СообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещение</p>
        <div className={style.under}></div>
      </div>



      <div className={style.post}>
        <div className={style.img_cont}>
        <img src={user} className={style.userImg} alt="" />
        <span>Меладзе</span>
        </div>
        <p className={style.textMessage}>СообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещениеСообщениеСооениещение</p>
        <div className={style.under}></div>
      </div>

      
    
      </div>




      
    
  </div>)
}


// 1)Исправить ошибки 2) Залить на Github 3)Задеплоить на versal.com
export default Profile;