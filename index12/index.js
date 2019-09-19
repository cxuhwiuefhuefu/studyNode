var http = require("http");

http.createServer(function(request, response) { // 解析好之后的request, 留给你用的response
    console.log(request);
}).listen(12306) // 它里面就调用了net.createServer(); 因为http的底层是net 只不过他吧tcp/ip这个打出来的内容 它又给自己解析了一遍