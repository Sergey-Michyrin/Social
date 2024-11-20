import s from "../img/User.jpg"
import ReRender from "../Render";
let countPost = 3;
let countMessages = 3;
let state = {
    // Первый комонент
    posts:{
        posts_data: [{ 
            text: "Привет",
            id: 0,
            img: s,
            likes: 1861,
            seeing: true,
            dop_text: "Общий доступ"
        },
        {
            text: "гол",
            id: 1,
            img: s,
            likes: 33,
            seeing: true,
            dop_text: "Общий доступ"
        },
        {
            text: "рессентимент",
            id: 2,
            img: s,
            likes: 1612,
            seeing: true,
            dop_text: "Общий доступ"
        },
        {
            text: "Проверка",
            id: 3,
            img: s,
            likes: 1917,
            seeing: true,
            dop_text: "Общий доступ"
        }
    ],

    post_text:"Hello"

    },



    // Второй комонент
    dialogs_data:{
        
        data: [{
            name: "Валерssssssssss",
            id: 1
        },
        {
            name: "Денис",
            id: 2
        },
        {
            name: "Богдан",
            id: 3
        }
        ],

        messages: [{
            message: "Го",
            id: 1
        },
        {
            message: "й",
            id: 2
        },
        {
            message: " просто",
            id: 3
        }
    ],

        text_message: ""

    }

};

export let addPost = (text, seeing)=>{
    countPost++;
    let dop_text;
    if (seeing){
        dop_text= "Общий доступ";
    }
    else{
        dop_text= "Совершено секретно";
    }
    // console.log(state.posts);
    let newPost = {text:text, img:s, id:countPost, likes:0, seeing:seeing, dop_text:dop_text};
    state.posts.posts_data.unshift(newPost);
    // console.log(state.posts.posts_data[0]);
    ReRender(state);
    



}

export let addMessages = (text)=>{
    countMessages++;
    
    let newMessages = {message:text,  id:countMessages};
    state.dialogs_data.messages.push(newMessages);
    ReRender(state);
    



}


export let PostsChange = (text)=>{
    state.posts.post_text = text
 

    ReRender(state);


}

export let MessageChange = (text)=>{
    state.dialogs_data.text_message = text
 
 
    ReRender(state);


}

export default state;

// текст для инпута