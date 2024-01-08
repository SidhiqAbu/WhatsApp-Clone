
import '../Css/home.css'
import Contacts from './Contscts';

function Aside(props){
    const {handleContactForm,contacts,handleContact,handleSearch} = props;
    // console.log(contacts);
    return (
        <div className='part2'>
            <div className="Aside">
                <div>
                    <h4>Chats</h4>
                    <h2 onClick={(e)=>handleContactForm(e)}>+</h2>
                </div>
                <div>
                    <input className='inputAside' onChange={(e)=>handleSearch(e)} placeholder='Search contacts..!'/>
                </div>
            </div>
            <div className='asideBody'>
               {contacts.map(user=>
                    <Contacts key={user.Number} user={user} handleContact={handleContact}/>
               )}
            </div>
        </div>
    );
};



export default Aside;