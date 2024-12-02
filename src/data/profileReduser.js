import s from "../img/User.jpg";
const ADD_POST = "POST-ADD";
const POST_CHANGE = "POST-CHANGE";

export let addPostAC = (text, seeing) => {
  return {
    type: "POST-ADD",
    text: text,
    seeing: seeing,
    id: 1,
  };
};

export let postChangeAC = (text) => {
  return {
    type: "POST-CHANGE",
    text: text,
    id: 2,
  };
};

let profileReduser = (state, action) => {
  // console.log(state);
  if (action.type === "POST-ADD") {
    state.countPost++;
    let dop_text;
    if (action.seeing) {
      dop_text = "Общий доступ";
    } else {
      dop_text = "Совершено секретно";
    }

    let newPost = {
      text: action.text,
      img: s,
      id: state.countPost,
      likes: 0,
      seeing: action.seeing,
      dop_text: dop_text,
    };
    state.posts_data.unshift(newPost);
  } else if (action.type === "POST-CHANGE") {
    // console.log(state);
    state.post_text = action.text;
    // this.ReRender(this._state);
    // console.log(state);
  }
  return state; // reducer должен возвращать новое состояние state
};
export default profileReduser;
