



{
       
    // IMPORTING MONGOOSE.........
    const mongoose=require('mongoose');
    const {Schema} = mongoose

    //  CREATION OF SCHEMA..........
    const newMessageShema= new mongoose.Schema({
        sender:{
            type:String,
            require:true
        },
        reciver:{
            type:String,
            require:true 
        },
        Messages:{
            type:Array,
            require:true    
        }
    },{
        timestamps:true
    });



    // CREATION OF MODEL..........
    const chat = mongoose.model('chat',newMessageShema);
    // EXPORTING OF MODEL...............
    module.exports = chat;

}


