import style from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react"
import {createRef}  from "react"
let text = React.createRef();


function Posts({posts, addPost}) {
  let add_post = ()=>{
    if(text.current.value.length >=50){

      addPost(text.current.value);
}
  };
  
  return (

 <div className={style.posts}>
 <p>Мои посты</p>
<input type="text" ref = {text} placeholder="Введите текст поста"/>
<button onClick={add_post} >Опубликовать пост</button>


{posts.map((i, idx) => {

            return <Post key={idx} text={i.text} img={i.img} likes={i.likes}/>
            
                          }
          )
          }
</div> 





)
}

export default Posts;

