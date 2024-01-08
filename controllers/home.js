
const User = require('../module/user.js');
const Chat = require('../module/messages.js');


//  home page to calling first api call..........
module.exports.home=function(req,res){

    console.log("home line successfully connected..");
    return res.status(200).json({user:"user"});

};


// Adding of new contact in whatsapp clone...........
module.exports.add = async function(req,res){
    console.log("Add controller connected",req.body);
    const user1 =await User.findOne({Number:req.body.Number});
    if(user1){
        user1.Password=req.body.Password;
        user1.save();
        return res.status(200).json({
            smbl:2,
            msg:"user already exist...Password updated to new One!"
        });
    }else{
        const user = await User.create({
            UserName :req.body.UserName,
            Number:req.body.Number,
            Password:req.body.Password,
            Image:'',
            Friends:[],
            Messages:[]
        });
        return res.status(200).json({
            smbl:2,
            msg:"User not fount new user created..!"
        });
    }
}


// loging in of user................
module.exports.login= async function(req,res){

    console.log('login controller connected..!',req.body);
    const user = await User.find({UserName:req.body.UserName,Password:req.body.Password});
    if(user.length!==0){
        console.log("username and password are matched currectly..!");
        return res.status(200).json({
            smbl:1,
            msg:"username and password are matched currectly..!",user:user});
    }else{
        console.log("username and password are not matched currectly  ..!");
        return res.status(200).json({
            smbl:2,
            msg:"username and password are not matched currectly  ..!"});
    }
}


// Contact adding function................
module.exports.addContact = async function(req,res){
    console.log(req.body);
    const user = await User.findOne({_id:req.body.friendId});
    console.log(user);
    const newUser = await User.findOne({Number:req.body.Number});
    console.log(newUser);

    if(newUser){
        if(newUser.Number === user.Number){
            user.UserName=req.body.UserName;
            user.Number=req.body.Number;
            user.Image=req.body.Image;
            user.save();
        }else{
            user.Friends.push(newUser._id);
            user.save();
            newUser.Friends.push(user._id);
            newUser.save();
        }
    }else{
        const newContact = await User.create({
            UserName :req.body.UserName,
            Number:req.body.Number,
            Password:req.body.Password,
            Image:'',
            Friends:[user._id],
            Messages:[]
        });
        user.Friends.push(newContact._id);
        user.save();
    }
   
    return res.status(200).json({});
}



module.exports.getContacts= async function(req,res){
    console.log("getContacts activated..!",req.query);
    const user = await User.findById({_id:req.query.userId});
    const value =[];
    for(let i=0;i<user.Friends.length;i++){
        const val1= await User.findById({_id:user.Friends[i]});
        value.push(val1);
    }
    return res.status(200).json({data:value});
}



module.exports.addMessage = async function(req,res){
    console.log(req.body);
    const user = await User.findById({_id:req.body.sender});
    // console.log("user : ",user,req.body.reciver);
    const chatBox = await user.Messages.find((elem)=>elem.userId === req.body.reciver);
    // console.log("chat id : ",chatBox);
    if(chatBox===undefined){
        console.log("no chat found");
        const newChat = await Chat.create({
            sender:req.body.sender,
            reciver:req.body.reciver,
            Messages:[req.body]
        });
        user.Messages.push({
            MessageId:newChat._id,
            userId:req.body.reciver
        });
        user.save();
        const user1 = await User.findById({_id:req.body.reciver});
        user1.Messages.push({
            MessageId:newChat._id,
            userId:req.body.sender
        });
        user1.save();
        return res.status(200).json({});
    }else{
        console.log("chat found");
        const chats = await Chat.findById({_id:chatBox.MessageId});
        chats.Messages.push({
            sender:req.body.sender,
            reciver:req.body.reciver,
            text:req.body.text
        });
        chats.save();
        return res.status(200).json({});
    }
}



module.exports.getMessages = async function(req,res){
    console.log(req.body);
    const user = await User.findById({_id:req.body.userId});
    console.log(user);
    const chatBox = await user.Messages.find((elem)=>elem.userId === req.body.chatId);
    console.log("chatBox",chatBox);
    if(chatBox){
        console.log("chat found");
        const messageBox = await Chat.findById({_id:chatBox.MessageId});
        console.log(messageBox);
        return res.status(200).json({data:messageBox.Messages});
    }else{
        console.log("chat not found");
        return res.status(200).json({data:[]});
    }
}


console.log("Controllers successfully connected..");


