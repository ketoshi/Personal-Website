//Required External Modules 
const express = require("express");
const path = require("path");
const userRouter = require("./routes/user");
var cookieParser = require('cookie-parser');

//App Variables
const app = express();
const port = process.env.PORT || "8000";

//App Configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use("/user",userRouter);

//Specific Routes Definitions
app.get("/", (req, res) => {
    res.render("index", { title: "Isac's Webapp" });
});
app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/register", (req, res) => {
    res.render("register");
});

//TODO: make into own route
app.get("/programs", (req, res) => {
    res.render("programs");
});

//Server Activation
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});








