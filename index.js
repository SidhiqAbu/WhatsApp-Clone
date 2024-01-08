


{

    

    // Calling of the all required Pakages...........
    const express = require('express');
    const path = require('path');
    const port=8889;
    const cors = require("cors");
    const app = express();

    // connecting to mongoose..
    const db=require('./config/mongoose');

    app.use(cors());
    // Configuration for body-Parser.............
    app.use(express.urlencoded());
    

    // linking routes with app to get request and responces......
    app.use('/',require('./routes/home'));


    // Listening of port and call back for Error handling..........
    app.listen(port,function(error){
        if(error){
            console.log(error);
            return;
        }
        console.log('Server running on port',port);
    });



}