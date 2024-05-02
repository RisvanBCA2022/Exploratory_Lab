const express = require('express')
const cors = require('cors')
const uploadimage = require('./uploadimage')
require('dotenv').config()
const app=express()

const port=5000

app.use(cors())

app.use(express.json())

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})
app.post('/uploadimage',(req,res)=>{
    uploadimage(req.body.image)
    .then((url)=>res.send(url))
    .catch((err)=>{
        console.log(err.message)
        res.status(500).send(err.message)})
    
})
app.post("/uploadMultipleImages", (req, res) => {
    uploadimage
      .uploadMultipleImages(req.body.images)
      .then((urls) => res.send(urls))
      .catch((err) => res.status(500).send(err));
  });


app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`);
})