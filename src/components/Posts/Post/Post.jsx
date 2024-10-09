import user from "../../../img/User.jpg"
import style from "./Post.module.css";


function Post({text}) {
    return (
  <>
        <div className={style.post}>
        <div className={style.img_cont}>
        <img src={user} className={style.userImg} alt="" />
        <span>Меладзе</span>
        </div>
        <p className={style.textMessage}>{text}</p>
        <div className={style.under}></div>
      </div>
      
      
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
      </>
  
  
  
  )
  }
  

  export default Post;