import express from 'express'

const app= express();

app.get("/",(req,res)=>{
    res.send("Hello From Server 1")
})

app.listen(3000);