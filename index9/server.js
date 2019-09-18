var net = require("net");

var server = net.createServer(); // 服务端创建了服务
server.listen(12306, "127.0.0.1"); // 监听这个端口 如何监听了本机的12306端口
console.log(server.address()); // null 是因为你不在一个回调函数里面的话 你是调不了这个的 

server.on("listening", function() {
    console.log(server.address()); // 其实这个没什么用 因为主机IP和地址都是你定义的 
    console.log("服务已启动");
})
server.on("connection", function(socket) { // 一般客户端发出去的是socket 收到的也是socket
    console.log('有新的连接');

    socket.on("data", function(data) { // 检测是否有数据
        console.log(data.toString());
        socket.write("hello client");
    });

    socket.on("close", function() {
        console.log("客户端已关闭");
        server.close();
    });
});

server.on("close", function() {
    console.log("服务已关闭");
})

