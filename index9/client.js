var net = require("net");

var socket = net.connect(12306, "127.0.0.1");  // 客户端创建了链接 链接到12306端口
// createConnection和connect没什么不同 createConnection底层调用的是connect

socket.on("connect", function() {  // 不是在接收里面 是在发送里面
    console.log("已连接到服务器");

    console.log(socket.remoteAddress); // 服务器的地址
    console.log(socket.remotePort); // 服务器的端口
    console.log(socket.localAddress); // 本地的地址
    console.log(socket.localPort); // 本地的端口
})

socket.on("data", function(data) {
    console.log(data.toString());
    socket.end();
})

socket.write("hello server"); // 发送字符串

socket.on("close", function() {
    console.log('连接已关闭');
})




// 有的时候服务端反应很慢 老是发请求你不回我 每个连接是消耗系统资源的 是消耗CPU的运算率和内存的 我得给他分配内存的
//     这个时候有个超时 超时就断开连接
socket.setTimeout(20);
socket.on("timeout", function() {
    console.log("超时了");
    socket.end();
})
// 超时了也不关闭 怎么办 