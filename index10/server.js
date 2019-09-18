var net = require("net");

var server = net.createServer(); // 启动服务
server.listen(12306, "127.0.0.1"); // 监听端口

server.on("listening", function() {
    console.log("服务已启动");
})

server.on("connection", function(socket) {
    console.log('有新的连接');
    socket.on("data", function(data) {
        console.log(data.toString()); // HTTP请求头
        // socket.write("hello broswer"); // 为啥浏览器不接收  因为我们这个HTTP请求和响应都得遵从HTTP协议
        socket.write("HTTP 200OK\r\nContent-type:text/html\r\nServer:DWS/1.1\r\n\r\n<html><body>hello broswer</body></html>");
    })
})
