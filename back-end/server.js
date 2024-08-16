const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose')   
mongoose.connect("mongodb://localhost:27017/login_auth")

// const route = require('./route')
// app.use('/',route)

app.use(express.json());

app.get(('/'),(req,res) =>
res.send("Connected"))

// const PORT = 8000
app.listen(8000, ()=>{
    console.log(`app listening on port 8000`)
})
