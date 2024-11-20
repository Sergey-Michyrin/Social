
import style from "./Post.module.css";
import like_png from "../../../img/like2.png";


function Post({text, img, likes, dop_text}) {
  // console.log(seeing)
    
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
              <div className={style.dop_text}>
              <p>{dop_text}</p>
              </div>
              <div className={style.under}></div>
             
            </div>
            
            
        
            </>
        
        
        
        )
    }
    
  
    
  
  

  export default Post;





