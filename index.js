//Required External Modules 
const express = require("express");
const path = require("path");
const userRouter = require("./routes/users");

//App Variables
const app = express();
const port = process.env.PORT || "8000";

//App Configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use("/users",userRouter);


//Specific Routes Definitions
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});
app.get("/login", (req, res) => {
    res.render("login");
});

//Server Activation
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});








