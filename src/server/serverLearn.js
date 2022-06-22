const express = require('express')//use library
const app = express() //create application

//app.set('view engine', 'ejs')

//when login on page do something
app.get('/',(req, res) => {
    console.log('Here')
    res.render('src/views/index')
    //res.status(500).json({message: "Error"})
    //res.download('src/server/serverLearn.js')
    //can only send 1 response!
})
app.listen(3000)












