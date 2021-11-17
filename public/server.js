const express = require('express') //import express module
const app = new express() //create instance of express web server
const db = require('better-sqlite3')('login.db')

//serves web files for GET on /(root)
app.use(express.static("public"))

//handle GET request on /login
app.get("/login",(req,res) => {
    const user = db.prepare("SELECT * FROM users WHERE username = ? AND password = ?")
        .get(req.body.username, req.body.password)
    if (user) { //if user is defined, truthy
        //res.status(200) //this is default
        res.json({
            message: "Hello!",
            userId: user.id
        })
    }
    else {
        res.status(401);
        res.json({
            message: "No user found.",
        })
    }
})

app.post("/register",(req,res)=>{
    res.json({
        message: "You are now registered.",
        userId: 1
    })
})

app.listen(3000,() => { //listen to http requests
    console.log("server started")
})