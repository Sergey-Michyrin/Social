import style from './Messages.module.css';

function Messages({id, text}){
    return(<div className={style.cont}>
        

        <p>{text}</p>

    </div>)
}

export default Messages;