const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
    console.log(req.query.name)///to see effect write :users/?name=kyle 
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.render("new", {firstName: "test"})
})

router.post("/", (req, res) => {
    const isValid = true
    if (isValid) {
      users.push({ firstName: req.body.firstName })
      res.redirect(`/users/${users.length - 1}`)
    } else {
      console.log("Error")
      res.render("new", { firstName: req.body.firstName })
    }
  })

//usually have get, put ,delete after each other, to simplify code use:
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


const users = [{name: "Kelly"}, {name: "Daru"}]
router.param("id", (req, res, next, id)=>{ //activate for all three methods: get,put,delete
    req.user = users[id]
    next() //usually for middleware
})

module.exports = router