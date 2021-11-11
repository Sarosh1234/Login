const express = require('express') //import express module
const app = new express() //create instance of express web server

//serves web files for GET on /(root)
app.use(express.static("public"))

//handle GET request on /login
app.get("/login",(req,res) => {
    res.json({
        message: "Hello!"
    })
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