const express = require('express')
const cors = require('cors')
const app=express()

const port=5000

app.use(cors())

app.use(express.json({limit:"25mb"}))


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`);
})