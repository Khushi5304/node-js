const express=require('express')
const app=express()
const port=5000
app.get('/',(req,res)=>{
    res.send("Hello I am KHushi PAtel")
})
app.listen(port,()=>{
    console.log('This app listening at http://localhoste:${port}')
})