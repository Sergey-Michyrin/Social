import style from "./Posts.module.css";
import Post from "./Post/Post";
import s from "../../img/User.jpg";

let posts = [
  {text:"Привет", id:1, img:s},
  {text:"гол", id:2, img:s},
  {text:"рессентимент", id:3,img:s}, 
  {text:"Проверка", id:3, img:s}];


function Posts() {
  return (

 <div className={style.posts}>
 <p>Мои посты</p>
<input type="text" />
<button>Опубликовать пост</button>


{posts.map((i, idx) => {
            return <Post key={idx} text={i.text} img={i.img}/>
            
                          }
          )
          }
</div> 





)
}

export default Posts;

