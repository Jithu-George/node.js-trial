const express= require('express');

//express app
const app=express();

//listening for request
app.listen(3000);

app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname});
});

