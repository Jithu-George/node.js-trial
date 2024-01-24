const http= require('http');
const fs=require('fs');
const l=require('lodash');

const server = http.createServer((req,res)=>{
   //lodash

   const num=l.random(0,20);
   console.log(num);

    const greet= l.once(()=>{
        console.log('hello');
    });

    

    res.setHeader('Content-Type','text/html');

    fs.readFile('./index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
        }
    });
});




server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000');
});