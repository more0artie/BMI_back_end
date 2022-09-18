var express = require('express');
var mysql = require('mysql2');
const cors = require('cors');
const { brotliDecompress } = require('zlib');


const app = express()
app.use(cors())
const Port= 3001


const db = mysql.createConnection({
    user:'sanjana',
    host:'127.0.0.1',
    password:'Poland1@',
    database: 'BMI'
})


app.post('/create_user',(req,res)=>{
    db.query("INSERT INTO user(email,name,password) VALUES (?,?,?)",
    [req.query.email,req.query.name,req.query.password],(err,result)=>{
        if(err)
        {
            res.send({message:"ERROR:("})
        }
        else{
            res.send({message:"USER CREATED SUCCESSFULLY"})
        }
    })
})

app.post('/login',(req,res)=>{
    db.query("SELECT name,email FROM user WHERE email=? AND password=?",
    [req.query.email,req.query.password],(err,result)=>{
        if(err){
            res.send({message:"ERROR:("})
        }
        else if(result.length>0){
            res.send(result)
        }
        else{
            res.send({message:"User not registered"})
        }
    })
})

app.get('/getData',(req,res)=>{
    db.query("SELECT * FROM bmiData WHERE email=?",
    [req.query.email],(err,result)=>{
        if(err){
            res.send({message:"ERROR:("})
        }
        else{
            res.send(result)
        }
    })
})

app.get('/sendData',(req,res)=>{
    db.query("INSERT INTO bmiData (email,height,weight,age,gender)VALUES WHERE email =?",
    [req.query.email],(err,result)=>{
        if(err){
            res.send({message:"ERROR:("})
        }
        else{
            res.send(result)
        }
    })
})






app.listen(Port,()=>{
    console.log("Server running...")
})