
import '../Css/home.css'

const ChatFooter=(props)=>{
    const {handleSentMsg,inputVal,val} = props;
    return (
        <div className="ChatFooter">
                <form onSubmit={(e)=>{handleSentMsg(e)}}>
                    <input type='text'  className="input1" name='text' id='footInput2' onInput={(e)=>inputVal(e)}  value={val} placeholder='Type your message..!'/>
                    <button className="input3" type='submit' >Sent</button>
                </form>
        </div>
    );
};


export default ChatFooter;