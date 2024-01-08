

const express=require('express');
const route=express.Router();
const multer = require("multer");
const app=express();
route.use(express.urlencoded());

const homeController=require('../controllers/home');

route.post('/',homeController.home);

route.post('/add',multer().none(),homeController.add);
route.post('/login',multer().none(),homeController.login);

route.post('/addContact',multer().none(),homeController.addContact);
route.get('/getContacts',multer().none(),homeController.getContacts);

route.post('/addMessage',multer().none(),homeController.addMessage);
route.post('/getMessages',multer().none(),homeController.getMessages);

console.log("Router successfully connected..");
module.exports=route;