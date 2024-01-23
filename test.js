const http= require('http');
const fs=require('fs');
const path=require('path');


const filePath = path.join(__dirname,'..', 'new', 'amazon-homepage-clone', 'index.html');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    fs.readFile('../new/amazon-homepage-clone/index.html',(err,data)=>{
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
    console.log('lsitening for requests on port 3000');
});