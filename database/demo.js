var mysql = require('mysql');
var moment = require('moment');  
const express = require('express');
const { application } = require('express');
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ketoshi_db"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Connected!");
});


const app = express()
//create database
app.get('/my_db',(req, res)=> { 
    let sql = 'CREATE DATABASE ketoshi_db'
    db.query(sql, err => {
        if(err){
            throw err
        }
        res.send('Database Created')
    })
})
// create table
app.get('/my_table',(req, res)=> { 
    let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, err => {
        if(err){
            throw err
        }
        res.send('Database Created')
    })
})

//insert user
app.get('/user',(req, res)=> { 
    var timestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    let post = {username: 'Isac nordin2', password: 'my_password',timestamp: timestamp}
    let sql = 'INSERT INTO user SET ?'
    let query = db.query(sql, post, err => {
        if(err){
            throw err
        }
        res.send('user Created')
    })
})


app.listen('3000', () => {
    console.log('Server started on port 3000')
})







