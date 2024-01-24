const express= require('express');


//express app
const app=express();

//register view engine
app.set('view engine','ejs');

//listening for request
app.listen(3000);

app.get('/',(req,res)=>{
    res.render('index');
});

