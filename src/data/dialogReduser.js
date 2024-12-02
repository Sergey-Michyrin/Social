const SEND_MESSAGE = "ADD-MESSAGE";
const MESSAGE_CHANGE = "MESSAGE_CHANGES";

export let addMeassageAC = (text) => {
  return {
    type: "ADD-MESSAGE",
    text: text,
    id: 3,
  };
};

export let messageChangesAC = () => {
  return {
    type: "MESSAGE_CHANGES",
    id: 4,
  };
};
let dialogReduser = (state, action) => {
  if (action.type === "ADD-MESSAGE") {
    state.countMessages++;
    let newMessages = {
      message: action.text,
      id: state.countMessages,
    };
    state.messages.push(newMessages);
  } else if (action.type === "MESSAGE_CHANGES") {
    state.text_message = action.text;
  }
  return state; // reducer должен возвращать новое состояние state
};
export default dialogReduser;
