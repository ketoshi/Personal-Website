const express = require('express')
const router = express.Router()
const users = [{name: "Kelly"}, {name: "Daru"}]

router.get("/", (req, res) => {
    console.log(req.query.name)
    res.send("User List")
})

router.post("/", (req, res) => {
    const isValid = true
    if (isValid) {
      users.push({ firstName: req.body.firstName })
      console.log(users)
      res.redirect(`/users/${users.length - 1}`)
    } else {
      console.log("Error")
      res.render("new", { firstName: req.body.firstName })
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