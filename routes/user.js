const express = require('express')
var moment = require('moment');  
var db = require('../db');
//var cookieParser = require('cookie-parser');
const router = express.Router()

router.get("/", (req, res) => {
    console.log(req.query.name)
    res.send("User List")
})


function createCookie(){
    console.log('si')
    return 3
}
function checkCookie(){
    return 5
}

router.post("/", (req, res) => {
    var user = req.body.username
    var password = req.body.password
    if ('login' in req.body){
        var sql = 'SELECT * FROM user WHERE username = ? AND password = ?';
        db.query(sql, [user,password], function (err, result) {
            if(err){
                //fix same as below
                //if (err) throw err; //GREAT DEBUG TOOL
                res.send('Username already exists')
            }
            createCookie()
            res.send('Logged in')
        });
    } else {
        //cookie + mysql
        var timestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        let post = {username: user, password: password, timestamp: timestamp}
        let sql = 'INSERT INTO user SET ?'
        let query = db.query(sql, post, err => {
            if(err){
                //send to register, with message notification!
                res.send('Username already exists')
            }
            res.redirect(`/user/${user}`)
            //res.render("new", { firstName: req.body.firstName })
        })
    }
  })

router 
    .route("/:id")
    .get((req, res) => {
        res.send(`Get user with ID: ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update user with ID: ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with ID: ${req.params.id}`)
    })

router.param("id", (req, res, next, id)=>{ //activate for all three methods: get,put,delete
    req.user = users[id]
    next() 
})

module.exports = router