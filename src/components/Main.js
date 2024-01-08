
import '../Css/home.css'
import Aside from './Aside';
import Body from './Body';
import img from '../Css/icon.png';

function Main(props){

   const {handleContactForm,handleAdd,message,val,inputVal,flag,contacts,handleContact,handleSubmit,handleSearch,chat,handleSentMsg} = props;
//    const Img = (user.img !=='')?img:user.img;
   
    return(
        <div className="Main">
            <div className='part1'>
                <div>
                    <img src={img} alt=''/>
                </div>
            </div>
            <Aside handleContactForm={handleContactForm} contacts={contacts} handleContact={handleContact} handleSearch={handleSearch} />
            <Body flag={flag} message={message} val={val} inputVal={inputVal}  handleAdd={handleAdd} handleSubmit={handleSubmit}  handleSentMsg={handleSentMsg} chat={chat} handleContactForm={handleContactForm}/>
        </div>
    );
};


export default Main;