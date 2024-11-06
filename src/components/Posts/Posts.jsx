import style from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react"
import {createRef}  from "react"
let text = React.createRef();


function Posts({posts, addPost, PostsChange, posts_text}) {
  
  let add_post = ()=>{
    if(text.current.value.length >=50){

      addPost(text.current.value);
}
  };
  let posts_change = ()=>{
    PostsChange("wdwdwwd");
}
  ;
  
  return (

 <div className={style.posts}>
 <p>Мои посты</p>
<input onChange={posts_change} type="text" ref = {text} placeholder="Введите текст поста (не менее 50 символов)" value={posts_text}/>
<button onClick={add_post} >Опубликовать пост</button>


{posts.posts_data.map((i, idx) => {

            return <Post key={idx} text={i.text} img={i.img} likes={i.likes}/>
            
                          }
          )
          }
</div> 





)
}

export default Posts;

