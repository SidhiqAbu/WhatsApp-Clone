



{

          
    // IMPORTING MONGOOSE.........
    const mongoose=require('mongoose');
    const {Schema} = mongoose

    //  CREATION OF SCHEMA..........
    const newUser = new mongoose.Schema({
        UserName:{
            type:String,
            require:true
        },
        Number:{
            type:String,
            require:true
        },
        Password:{
            type:String,
            require:true
        },
        Image :{
            type:String,
            require:true
        },
        Friends:{
            type:Array,
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
    const user=mongoose.model('user',newUser);
    // EXPORTING OF MODEL...............
    module.exports=user;

}