
import img from '../Css/icon.png';

function Contacts(props){
    const {user,handleContact} = props;
    // const Img = (user.img==='')?img:user.img;
    // console.log('abu',user);
        return (
            <div className="innerContacts" onClick={()=>{handleContact(user)}} itemID={user.Number}>
                <div className="img">
                    <img src={img} alt='' />
                </div>
                <div className="namesBox">
                    <p>{user.UserName}</p>
                    <p>{user.Number}</p>
                </div>
            </div>
        );
}

export default Contacts;