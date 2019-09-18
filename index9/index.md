// net 网络层

// net和HTTP什么关系？
// TCP的运输层和网络层
// HTTP是五层网络模型的应用层

// 五层网络模型
// 应用层: http协议
// 运输层丶传输层: tcp协议  (运输层和网络层统称为TCP/IP协议)
// 网络层: ip协议

// 数据链路层
// 物理层


// 信息: 吃了吗
// GET /test?param=吃了吗 HTTP/1.1

// tcp和http是什么关系 我们信息包括在http协议里面 
// tcp的格式包在http协议之外   0101010 GET /test?param=吃了吗 HTTP/1.1 0101011




//            Net————————————
//              |            |
//              |            |
// Client     Socket       Server
// (虚拟)
// ip+port                 ip+port
//
// net既能创建出Socket也能创建出Server



// 应该让它们怎么用呢 才能让它们发消息
// 一般我们先启用Server 没有Server你这个Client连接不了
// 一般服务器开的时候我们一般会以杀线程的方式关闭服务器 一般不会调用close

// 关闭的消息客户端能收的到 我服务端也能收的到

// 这是最基本的客户端向服务端发送消息的请求

// 正常的链接都是TCP连接 浏览器往外连接虽然外层是HTTP协议 但他的底层还是TCP/IP协议 如果我用TCP/IP来接收请求能看到完整的HTTP协议

