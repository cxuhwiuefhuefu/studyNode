var fs = require("fs");

// 加载配置文件
var globalConf = {}; // 全局的配置对象
var conf = fs.readFileSync(__dirname + "/server.conf");
var confs = conf.toString().split("\r\n");
console.log(confs);
for(var i = 0; i < confs.length; i++) {
    var tempConf = confs[i].split("=");
    // console.log('tempConf' + tempConf);
    if(tempConf.length < 2) {
        continue;
    }else {
        // 否则给他一个key value
        console.log(tempConf[0])
        console.log(tempConf[1]);
        globalConf[tempConf[0]] = tempConf[1];
    }
}
console.log(globalConf);


if(globalConf["path_position"] === "relative") {
    globalConf.basePath = __dirname + globalConf.path;
}else {
    globalConf.basePath = globalConf.path;
}



module.exports = globalConf;