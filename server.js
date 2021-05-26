const http=require("http");

// for request and respose
const server=http.createServer((req,res)=>{
    res.end("Hello from the other sides apeksha");      //response from server
});

server.listen(8000,"127.0.0.1",()=>{                    // resuest listen by port,localhost
console.log('listening to the port no 8000');
}); 

