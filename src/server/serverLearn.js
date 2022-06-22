const express = require('express')//use library
const app = express() //create application

app.set('views','src/views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))//akkis access to body/forms

//app.use(logger) == use middleware on all BELOW functions
//app.use(express.static("public"))

app.get('/',(req, res) => {
    console.log('Here')
    res.render('index', {text: "World", text2: "cats!"})
        //res.status(500).json({message: "Error"})
        //res.download('src/server/serverLearn.js')
        //can only send 1 response!
})

const userRouter = require("../routes/users")// "../" in beginning since based of serverlearn file path
app.use("/users",logger,userRouter)

function logger(req, res, next){//middleware function, includes next!
    console.log(req.originalUrl)
    next()
}

app.listen(3000)












