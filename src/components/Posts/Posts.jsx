import style from "./Posts.module.css";

import Post from "./Post/Post";

function Posts() {
  return (

 <div className={style.posts}>
 <p>Мои посты</p>
<input type="text" />
<button>Опубликовать пост</button>


<Post text="Привет, это Меладзе"/>


</div> 





)
}

export default Posts;

