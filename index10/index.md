系统进程的了解

一个系统服务没关 又去创建新的服务

node server.js // 启动服务



怎么关闭进程？
window
任务管理器 =》 进程 =》 node.exc 找到node然后把node关闭
mac/无班图系统
ps aux |grep "node"
kill + 进程号



现实中浏览器可以充当客户端  
从浏览器发出的请求是什么样的 0101010 GET /test?param=吃了吗 HTTP/1.1 0101011(最外层裹的是tcp/ip协议 tcp协议解析完之后里面是HTTP协议)
我们net所属的是tcp协议的一层 如果我们用tcp层来接收浏览器的服务 按照理论来说 解析完最外层的tcp协议就能看到完整的HTTP请求了


浏览器输入 http://127.0.0.1:12306/
为啥会有两个 因为有个他发不通的话他会发第二个
如果不是根目录下加个asd http://127.0.0.1:12306/asd
就是原原本本根目录下的HTTP请求头
为什么我们拿下来是整整的字符串 就是因为我们是在tcp 对HTTP协议进行降维打击了 本来你是最上层第五层应用层 
    我现在在第四层运输层上拦截你 拿到的就是完整的HTTP请求 浏览器HTTP请求我们拿到的都是对象
    因为它在tcp运输层之后又交给了运用层 运用层就会对这个协议进行解析 解析之后把它封装成一个对象
    把这个对象给你 因为他封装解析之后又解析封装 现在是我们原原本本收到的没解析 这个是原本的HTTP协议
    // HTTP请求头||||
    // 请求类型 url HTTP协议版本号
    // Host请求的ip和端口
    // Connection 保持链接  看浏览器一直在转圈
    // User-Agent: 客户端
    // Accept 接受的格式
    // Accept-Encoding 接受的编码
    // Accept-Language 接受的语言


HTTP响应头    浏览器netword中的Name没红色就不报错
响应头Content-type得写 就是内容类型得写 
我们传的数据在响应体里 响应头和响应体之间  响应头之间每一行是每一个换行/r/n
响应头和数据之间是两个换行