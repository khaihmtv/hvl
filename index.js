const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bodyParser=require('body-parser')
const path=require('path')
require('dotenv').config()
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;
const SECRET = 'shhh';


mongoose.connect(`mongodb://localhost/hvl`, {useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected')
});
const User=require('./User')

//app.use(express.json()) // for parsing application/json
app.use(cookieParser()) //cookie-parser dùng để đọc cookies của request:
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/auth/login', (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;

    if(!email || !pass){
        res.status(200).send({status:'Wrong Email or Password Empty'})
    }
    User.findOne({email:req.body.email},(e,usr)=>{
        if(e){console.log(e)}
        if(usr){
            let token = jwt.sign({email: usr.email}, SECRET);
            res.cookie('token', token, {
                maxAge:50000,
                httpOnly: true,
                // secure: true;
            })
            res.status(200).send({status:'Login success'})
        }else{
            res.status(200).send({status:'Wrong Email or Password'})
        }
    }) 
})
app.post('/auth/register', (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    const repass = req.body.repass;

    if(!email || !pass || !repass || pass!=repass){
        res.status(200).send({status:'Wrong Email or Password'})
    }else{
        User.findOne({email:req.body.email},(e,usr)=>{
            if(e){console.log(e)}
            if(usr){
                res.status(200).send({status:'Email has been register'})
            }
            if(!usr){
                User.create({email:req.body.email,pass:req.body.pass},(e,newuser)=>{
                    res.status(200).send({status:'Register success.'})
                })
            }
        })
    }   
})


app.use('/api/users', (req, res) => {
    const token = req.cookies.access_token;

    console.log('token \n', token);
    try{
        let a=Object.create(null)
        decoded = jwt.verify(token, SECRET);
        res.status(200).json(decoded);
        console.log(decoded)
    }catch(err){
        res.status(400)
        throw err;
    }
    
})
app.use("/build", express.static('./build/'));
app.use(express.static(path.join(__dirname, 'build')));
app.use((err, req, res, next)=> {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
    console.info(`listening on port ${port}`);
})
User.find({},(e,r)=>console.log(r))