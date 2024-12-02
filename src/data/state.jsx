import s from "../img/User.jpg";
import profileReduser from "./profileReduser";
import dialogReduser from "./dialogReduser";
// import ReRender from "../Render";
// let countPost = 3;
// let countMessages = 3;






let store = {
    
    _state: {
        // Первый комонент
        posts: {
            countPost:3,
            
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
            post_text: "Aboba"
        },

        // Второй комонент
        dialogs_data: {
            countMessages:3,
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
    },

    ReRender(state) {
        console.log("Заглушка");
    },
    Subscribe(observer) {
        this.ReRender = observer;
    },


    GetState() {
        return this._state;
    },

    dispatch(action) {
        this._state.posts = profileReduser(this._state.posts, action)
       
        console.log(this._state.posts);
        this._state.dialogs_data = dialogReduser(this._state.dialogs_data, action)
        this.ReRender(this._state);
                    },



};

export default store;


// if (action.type === "POST-ADD") {
//     this.countPost++;
//     console.log(this.countPost);
//     let dop_text;
//     if (action.seeing) {
//         dop_text = "Общий доступ";
//     } else {
//         dop_text = "Совершено секретно";
//     }

//     let newPost = {
//         text: action.text,
//         img: s,
//         id: this.countPost,
//         likes: 0,
//         seeing: action.seeing,
//         dop_text: dop_text
//     };
//     this._state.posts.posts_data.unshift(newPost);
//     this.ReRender(this._state);


// } else if (action.type === "POST-CHANGE") {
//     this._state.posts.post_text = action.text
//     this.ReRender(this._state);
// }