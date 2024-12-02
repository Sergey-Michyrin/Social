import style from "./Posts.module.css";

import {addPostAC} from "../../data/profileReduser";
import {postChangeAC} from "../../data/profileReduser";

import Post from "./Post/Post";
import React, { useState } from "react"
import {createRef}  from "react"

let text = React.createRef();
let seeing = React.createRef();



function Posts({posts, dispatch, posts_text}) {
const [view_mode, setPosts]  = useState("Общий доступ");
const [test, testFunction] = useState(true);



{/*ФУНКЦИЯ ДОБАВЛЕНИЕ ПОСТА */}
let add_post = ()=>{
    if(text.current.value.length >=1){
      // dispatch({type:"POST-ADD", text:text.current.value, seeing:!seeing.current.checked});
      dispatch(addPostAC(text.current.value, !seeing.current.checked));
      text.current.value = "";
    }
};
{/*КОНЕЦ */}
           


{/*РАБОТА С ВВЕДЁНЫМ ТЕКСТОМ */}
let posts_change = ()=>{
  // dispatch({type:"POST-CHANGE", text:text.current.value});
  dispatch(postChangeAC(text.current.value));
}
{/*КОНЕЦ */}
// console.log(posts);
return (
    
  <div className={style.posts}>
  {/* ПОЛЕ ВВОДА И ОТПРАВКИ ПОСТОВ */}
    
      <p>Мои посты</p>
      <textarea  onChange={posts_change} type="text" ref = {text} placeholder="Введите текст поста (не менее 50 символов)" value={posts_text}/>
      <button onClick={add_post} >Опубликовать пост</button>
   
  {/* КОНЕЦ */}




  {/* Радио-боксы выбранной фильтрации постов */}

  <div className={style.radio_box}>

    <div>
      <input onChange={(k)=>setPosts(k.target.value)} type="radio" name="vis" value={"Общий доступ"} id="first_rad"/>
      <label htmlFor="first_rad">Для обычных пользователей</label>
    </div>

    <div>
      <input onChange={(k)=>setPosts(k.target.value)} type="radio" name="vis" value={"Совершено секретно"}  id="second_rad"/>
      <label htmlFor="second_rad">Только для друзей</label></div>
    </div>

  {/* КОНЕЦ */}


  {/*РЕЖИМ ВИДИМОСТИ ПОСТА */}

  <div className={style.checkbox_cont}>
      <input  ref={seeing} type="checkbox" id="qwerty"/>
      <label  htmlFor="qwerty"   >Видны только друзьям</label>
     
  </div>

  {/* КОНЕЦ */}



  {view_mode==="Общий доступ" ? (posts.posts_data
  .filter((i) => i.seeing===true)
  .map((i, idx) => {
              
              return <Post key={idx} text={i.text} img={i.img} likes={i.likes}  dop_text={i.dop_text}  />
              
                            }
            )):(posts.posts_data
              
              
              .map((i, idx) => {
                          
                          return <Post key={idx} text={i.text} img={i.img} likes={i.likes}  dop_text={i.dop_text} />
                          
                                        }
                        ))

            }
</div> 





)
}

export default Posts;

