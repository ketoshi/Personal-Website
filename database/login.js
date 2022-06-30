//Route for adding cookie
app.get('/setuser', (req, res)=>{
    res.cookie("userData", users);
    res.send('user data added to cookie');
    });