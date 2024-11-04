import style from './User.module.css';
import img_1 from '../../../img/User.jpg';

function User({name}) {
    console.log({name});
    return(
        <div className={style.friend}>
        <p>{name}</p>
        <img src={img_1} alt="" />
      </div>
    );
  }
  
  export default User;