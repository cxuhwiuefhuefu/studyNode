var net = require("net"); // 网络层和运输层 TCP/IP协议
var fs = require("fs"); // file system 文件系统
var globalConf = require("./conf");
// console.log(globalConf.path);

// // 加载配置文件
// var globalConf = {}; // 全局的配置对象
// var conf = fs.readFileSync(__dirname + "/server.conf");
// var confs = conf.toString().split("\n");
// // console.log(confs);
// for(var i = 0; i < confs.length; i++) {
//     var tempConf = confs[i].split("=");
//     // console.log(tempConf);
//     if(tempConf.length < 2) {
//         continue;
//     }else {
//         // 否则给他一个key value
//         console.log(tempConf[0])
//         console.log(tempConf[1]);
//         globalConf[tempConf[0]] = tempConf[1];
//     }
// }
// console.log(globalConf);


// 读文件 1. 同步读取(就是你读完才往下走) 2. 异步读取(就是你先去读 正常往下走 什么时候用他才往下走)
// try { // 万一读取错误
//     var data = fs.readFileSync(__dirname + "/index.html") // 同步读取文件
//     console.log(data.toString());
// }catch(e) {
//     console.log("找不到文件");
// }


var server = net.createServer();
server.listen(globalConf.port, "127.0.0.1");

server.on("listening", function() {
    console.log("服务已启动");
})
server.on("connection", function(socket) { // 我收到了一个socket
    socket.on("data", function(data) {
        console.log(data.toString());
        var url = data.toString().split("\r\n")[0].split(" ")[1];
        // console.log(url);

        // console.log('#####', __dirname + globalConf.path + url);
        // 读文件 1. 同步读取(就是你读完才往下走) 2. 异步读取(就是你先去读 正常往下走 什么时候用他才往下走)
        try { // 万一读取错误
            
            // var dataFile = fs.readFileSync(__dirname + globalConf.path + url) // 同步读取文件
            var dataFile = fs.readFileSync(globalConf["basePath"] + url);
            
            // console.log(data.toString());
            // socket.write("HTTP/1.1 200OK\r\n\r\n" + data.toString()); // 图片不能转换为字符串

            // 这种方式读取CSS文件也行
            socket.write("HTTP/1.1 200OK\r\n\r\n");
            socket.write(dataFile);
        }catch(e) {
            console.log("找不到文件");
            socket.write("HTTP/1.1 404NotFound\r\n\r\n<html><body><h1>404 Not Found</h1></body></html>");
        }
        socket.end();
    })
})




// 占用哪个端口 可以自己配置
// 写一个简易的服务器
// 封装了微型的服务器 在本地以服务器的形态运行我的html代码 我们可以自己写一个服务器来运行我们前端的代码