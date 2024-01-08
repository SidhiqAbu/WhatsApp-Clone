
import { useRef,useEffect } from "react";

function Chatmain(props){
    const bottomRef = useRef(null);
    const {message,chat}=props;

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [message]);

    return (
        <div className="Chatmain">
            {message.map((msg)=>{
                 if(chat._id !== msg.reciver){
                    return(
                        <div className="msgBox">
                            <div className="textBox">
                                {msg.text}
                            </div>
                       </div>
                    );
                }else{
                    return(
                        <div className="msgBox1">
                            <div className="textBox">
                                {msg.text}
                            </div>
                       </div>
                    );
                }
            })}
             <div ref={bottomRef} />
        </div>
    );
};


export default Chatmain;