

import '../Css/home.css';
import AddContact from './AddContact';
import Chats from './Chat';

function Body(props){
   const {flag,handleAdd,handleContactForm,val,inputVal,chat,handleSentMsg,message,handleSubmit} = props;

    if(!flag){
        return(
            <div className='part3'>
                <AddContact handleAdd={handleAdd} handleSubmit={handleSubmit} handleContactForm={handleContactForm} />
            </div>
        );
    }else{
        return (
              <Chats chat={chat} message={message} val={val} inputVal={inputVal} handleSentMsg={handleSentMsg}/>
        );
    }
}

export default Body;