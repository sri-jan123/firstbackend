const express=require('express')

const app=express()

const port=3000

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/instagram',(req,res)=>{
    res.send('vertical_charlie122')
})

app.get('/twitter',(req,res)=>{
        res.send("<h1>srijandotcom</h1>")
})


app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})