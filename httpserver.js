const http=require('http');
const port=process.env.PORT || 5000;
const  server=http.createServer((req,res)=>{
    console.log(req)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end("<h1>hello i am khushi patel</h1> <p>HEy this is the way to rock the world!</p>");
})
server.listen(port,()=>{
    console.log('server is listenning on port ${port}');
});