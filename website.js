const { Console }=require('console');
const http=require('http');
const fs=require('fs');
const port=process.env.port || 5000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    console.log(req.url)
    if(req.url=='/'){
        res.end('<h1>I am khushi PAtel')
    }
    else if(req.url=='/about'){
        res.end('<h1>About Khushi PAtel')
    }
    else if(req.url=='/hello'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        // res.end('<h1>Good Morning!</h1>')
        res.end(data.toString());
    }
})
server.listen(port,()=>{
    console.log('Server is liostening on port ${port}');
});