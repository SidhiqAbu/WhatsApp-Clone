

import '../Css/home.css'

function Header(props){
    const {handleLogout,user} = props;
    return(
        <div className='headerBox'>
            <p>{user[0].UserName}</p>
            <p>WhatsApp Clone</p>
            <p onClick={(e)=>handleLogout(e)}>X</p>
        </div>
    );
};


export default Header;