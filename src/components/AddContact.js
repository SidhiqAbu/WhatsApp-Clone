

function AddContact(props){
    const {handleContactForm,handleSubmit} =props;
    return (
        <div className="outerbox">
            <h1>New Contact</h1><hr/>
            <div className="innerbox">
                <form onSubmit={(e)=>handleSubmit(e)}>
                <p>Name : </p>
                <input name='UserName' required={true}/><br/>
                <p>Mobile Number : </p>
                <input name='Number' required={true}/><br/>
                <p>Avatar : </p>
                <input name='Image' type="file" accept="image/*" /><br/>
                <button className="buttonbox" type='submit'>Add</button>
                </form>
                <button className="buttonbox1" onClick={(e)=>handleContactForm(e)} style={{marginLeft:'12%'}}>Back</button>
            </div><hr/>    
        </div>
    );
}

export default AddContact;