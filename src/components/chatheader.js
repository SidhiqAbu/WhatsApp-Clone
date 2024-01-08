
import '../Css/home.css'
import img from '../Css/icon.png';
const Chatheader=(props)=>{
    const {chat} = props;
    return (
        <div className="Chatheader">
            <div className="Avtr">
                <img src={img} alt='' />
            </div>
            <div>{chat.UserName}</div>
        </div>
    );
};



export default Chatheader;