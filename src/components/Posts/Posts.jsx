import style from "./Posts.module.css";
import Post from "./Post/Post";



function Posts({posts}) {
  return (

 <div className={style.posts}>
 <p>Мои посты</p>
<input type="text" />
<button>Опубликовать пост</button>


{posts.map((i, idx) => {
            return <Post key={idx} text={i.text} img={i.img} likes={i.likes}/>
            
                          }
          )
          }
</div> 





)
}

export default Posts;

