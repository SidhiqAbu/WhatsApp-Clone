

import '../Css/login.css'

function SignUp(props){
    const {handleclick,handleSubmit} =props;
    return (
        <div className="outerbox">
            <h1>Sign-Up</h1><hr/>
            <div className="innerbox">
                <form onSubmit={(e)=>handleSubmit(e)}  >
                <p>User Name : </p>
                <input name='UserName' required={true}/><br/>
                <p>Mobile Number : </p>
                <input name='Number' required={true}/><br/>
                <p>Password : </p>
                <input name='Password' required={true} /><br/>
                <button className="buttonbox" type='submit'>Submit</button>
                </form>
                <button className="buttonbox1" onClick={(e)=>handleclick(e)}>LogIn</button>
            </div><hr/>    
        </div>
    );
};

export default SignUp;