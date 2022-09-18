var mysql = require('mysql2');

const db = mysql.createConnection({
    user:'sanjana',
    host:'127.0.0.1',
    password:'Poland1@',
    database: 'BMI'
})


function init(){
    db.query("CREATE TABLE user(name varchar(100),email varchar(100) UNIQUE,password varchar(100),id int not null auto_increment primary key)",(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("TABLE USER CREATED!")
        }
    })


    db.query("CREATE TABLE bmiData(email varchar(100),height varchar(100),weight varchar(100),age varchar(100),gender varchar(100),id int not null auto_increment primary key,foreign key(email) references user(email))",
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("TABLE bmiData CREATED!")
        }
    })
}

setImmediate(()=>{
    init()
})
