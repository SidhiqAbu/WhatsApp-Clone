
import '../Css/home.css'
import ChatFooter from './ChatFooter';
import Chatheader from './chatheader';
import Chatmain from './chatMain';


function Chats(props){
    const {chat,handleSentMsg,message,val,inputVal} = props;

    if(Object.keys(chat).length !== 0){
        return(
            <div className='part3'>
              <Chatheader chat={chat}/>
              <Chatmain message={message} chat={chat}/>
              <ChatFooter handleSentMsg={handleSentMsg} val={val} inputVal={inputVal} chat={chat}/>
            </div>
        );  
    }else{
        return(
            <div className='part3'>
                <div className='emptyBox'>
                    <h4>Add Contact / Chat with Any One...!</h4>
                </div>
            </div>
        );
    }

}

export default Chats;