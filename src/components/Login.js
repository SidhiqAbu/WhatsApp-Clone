
import '../Css/login.css';



const Login=(props)=>{
    const {handleclick,handleSubmit} = props;
    return(
        <div className="outerbox">
            <h1>Log-in</h1><hr/>
            <div className="innerbox">
                <form onSubmit={(e)=>handleSubmit(e)}>
                <p>User Name : </p>
                <input name='UserName'required={true}/><br/>
                <p>Password : </p>
                <input name='Password' required={true}/><br/>
                <button className="buttonbox" type='submit'>Submit</button>
                </form>
                <button className="buttonbox1" onClick={(e)=>handleclick(e)}>SignUp</button>
            </div><hr/>    
        </div>
    )
};

export default Login;