const { Console }=require('console');
const http=require('http');
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
})
server.listen(port,()=>{
    console.log('Server is liostening on port ${port}');
});