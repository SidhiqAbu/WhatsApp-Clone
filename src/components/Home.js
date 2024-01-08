
import Main from './Main';
import Header from './header';
import {useState,useEffect} from 'react';


function Home(props){
  
  const [flag,setFlag] = useState('false');
  const [contacts,setContacts] = useState([]);
  const [chat,setChat] = useState({});
  const [message, setMessage] = useState([]);
  const [val,setVal] = useState("");
  const {handleLogout,user}=props;


  useEffect(()=>{
      const url = `http://localhost:8889/getContacts?userId=${user[0]._id}`;
      async function getUser(url){
        const responce = await fetch(url,{method:"GET"});
        const data = await responce.json();
        console.log("sidhiq",data);
        setContacts(data.data);
      }
      getUser(url);
    },[user]);



// Adding new contact and verification of login credentails..............
  const handleAdd= async(e)=>{
    e.preventDefault();
    console.log("adding contact..!");
    const newContact = {};
    const data = new FormData();
    for(let i=0;i<e.target.length-1;i++){
      newContact[e.target[i].name]=e.target[i].value;
      data.append(e.target[i].name,e.target[i].value);
    }
    data.append("friendId",user[0]._id);
    const responce = await fetch('http://localhost:8889/addContact',{method:"POST",body:data});
    const resp = await responce.json();
    console.log(resp);
    if(user[0].Number!==newContact.number){
      setContacts([
        ...contacts,
        newContact
      ]);
    }
    // console.log("new contact created",newContact,data);
    setFlag(!flag);
    // console.log("newContact added");
  }


  

//  Adding and removing new Contact form on body component.......
  const handleContactForm=(e)=>{
    e.preventDefault();
    setFlag(!flag);
  }



// handle the click on friends of user in aside................  
  const handleContact= async (e)=>{
    console.log(e);
    const data = new FormData();
    data.append('userId',user[0]._id);
    data.append("chatId",e._id);
    const responce = await fetch('http://localhost:8889/getMessages',{method:"POST",body:data});
    const resp = await responce.json();
    console.log(resp);
    setMessage(resp.data);
    setChat(e);
  }



//  Searching of Contact by name...
  const handleSearch=(name)=>{
    console.log(name.target.value);
  }



//  onInput in chatFooter input form...........
  const inputVal=(e)=>{
    setVal(e.target.value);
  }



  //  sending Message to chat..and Backend server...........
  const messageController= async(e)=>{
    e.preventDefault();
    const data = new FormData();
    data.append('sender',user[0]._id);
    data.append('reciver',chat._id);
    data.append('text',val);
    const responce = await fetch('http://localhost:8889/addMessage',{method:"POST",body:data});
    const resp = await responce.json();
    console.log(resp);
    setMessage([
      ...message,{
        sender:user[0]._id,
        reciver:chat._id,
        text:val
      }
    ]);
    setVal("");
  }



  return(
    <div>
      <Header handleLogout={handleLogout} user={user}/>
      <Main flag={flag} user={user} val={val} inputVal={inputVal} message={message} handleSentMsg={messageController} handleSubmit={handleAdd}  chat={chat} handleSearch={handleSearch} handleAdd={handleAdd} contacts={contacts} handleContactForm={handleContactForm}  handleContact={handleContact}/>
    </div>
  )
  
}


export default Home;