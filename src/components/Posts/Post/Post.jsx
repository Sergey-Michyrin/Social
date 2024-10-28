
import style from "./Post.module.css";
import like_png from "../../../img/like2.png";


function Post({text, img, likes}) {
    return (
  <>
        <div className={style.post}>
        <div className={style.img_cont}>
        <img src={img} className={style.userImg} alt="" />
        <span>Меладзе</span>
        </div>
        <p className={style.textMessage}>{text}</p>
        <div className={style.likes}>
        <p>Число лайков: {likes}</p>
        <img src={like_png} alt="" />
        </div>
        <div className={style.under}></div>
      </div>
      
      
  
      </>
  
  
  
  )
  }
  

  export default Post;





      {/* <div className={style.post}>
        <div className={style.img_cont}>
        <img src={user} className={style.userImg} alt="" />
        <span>Меладзе</span>
        </div>
        <p className={style.textMessage}>okcdkocki</p>
        <div className={style.under}></div>
      </div>
      
      
      
      <div className={style.post}>
        <div className={style.img_cont}>
        <img src={user} className={style.userImg} alt="" />
        <span>Меладзе</span>
        </div>
        <p className={style.textMessage}>okcdkokcdko okcdkockiokcdkockiokcdkock iokcdkoc kiokcdkockiokcdkockiokcdko ckiokcdkockiokcdko ckiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkockiokcdkocki</p>
        <div className={style.under}></div>
      </div>
       */}