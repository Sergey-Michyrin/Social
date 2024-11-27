import s from "../img/User.jpg"
// import ReRender from "../Render";
let countPost = 3;
let countMessages = 3;

let store = {
    _state: {
        // Первый комонент
        posts: {
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

    // addPost(text, seeing) {

    // },

    // addMessages(text) {
        
    // },

    // PostsChange(text) {
        
    // },

    // MessageChange(text) {
        
    // },

    GetState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === "POST-ADD") {
            countPost++;
            let dop_text;
            if (action.seeing) {
                dop_text = "Общий доступ";
            } else {
                dop_text = "Совершено секретно";
            }

            let newPost = {
                text: action.text,
                img: s,
                id: countPost,
                likes: 0,
                seeing: action.seeing,
                dop_text: dop_text
            };
            this._state.posts.posts_data.unshift(newPost);
            this.ReRender(this._state);

           
        }
        else if(action.type==="POST-CHANGE") {
            this._state.posts.post_text = action.text
            this.ReRender(this._state);
        }

        else if(action.type==="ADD-MESSAGE") {
            countMessages++;
        let newMessages = {
            message: action.text,
            id: countMessages
        };
        this._state.dialogs_data.messages.push(newMessages);
        console.log(this._state.dialogs_data.messages);
        this.ReRender(this._state);
        }

        else if(action.type==="MESSAGE_CHANGES") {
            this._state.dialogs_data.text_message = action.text
        this.ReRender(this._state);
        }

        

    }

};

export default store;