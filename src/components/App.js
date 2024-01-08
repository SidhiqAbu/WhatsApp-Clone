

  import '../Css/App.css';
  import Home from './Home'
  import Login from './Login';
  import SignUp from './SignUp';
  import { useState} from 'react';

  function App() {
    const [flag,setFlag] = useState('false');
    const [user,setUser] = useState(undefined);

    // useEffect(()=>{
    //   const url = 'http://localhost:8889/';
    //   async function getUser(url){
    //     const responce = await fetch(url,{method:"POST"});
    //     const data = await responce.json();
    //     console.log("sidhiq",data.user[0]);
    //     setUser(data.user[0]);
    //   }
    //   getUser(url);
    // },[]);

    const handleclick=(e)=>{
      e.preventDefault();
      setFlag(!flag);
      console.log('click handled..!');
    }

//  handling log-out of user...........
    const handleLogout=(e)=>{
      e.preventDefault();
      setUser(undefined);
    }


    //  verification of loging in credentails........
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const obj = new FormData();
      for(let i=0;i<e.target.length-1;i++){
        obj.append(e.target[i].name,e.target[i].value);
      }
      const newUrl = (e.target.length===3)?"http://localhost:8889/login":"http://localhost:8889/add";
      try {
        const responce = await fetch(newUrl,{method:"POST",body:obj});
        const data = await responce.json();
        console.log(data);
        if(data.smbl===1){
          console.log(data.msg);
          setUser(data.user);
        }else{
          console.log("shifting");
          setFlag(!flag);
        }
      } catch (error) {
        console.log(error);
      }
    }


    if (user===undefined) {
      console.log("user logout");
      if(flag){
        return(
          <div className="App">
            <Login handleclick={handleclick} handleSubmit={handleSubmit}  />
          </div>
        )
      }else{
        return(
          <div className="App">
            <SignUp handleclick={handleclick} handleSubmit={handleSubmit}/>
          </div>
        )
      }
      
    } else {
      console.log("user login",user);
      return(
        <div className="App">
          <Home handleLogout={handleLogout} user={user}  />
        </div>
      )
    } 

  }

export default App;

