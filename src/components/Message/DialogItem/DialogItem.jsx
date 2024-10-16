import {NavLink} from "react-router-dom"

function DialogItem({id, name}){
    return(<div>
        <NavLink  to={`/Message/${id}`}>{name}</NavLink>




    </div>)
}

export default DialogItem;