// function xyz(exports, require, module, __filename, __dirname) { // 文件名 路径名
//     // ---
//     // 中间的内容是我们写的nodejs的代码
//     // ---
//     // NodeJs的模块是运行在一个函数当中的


//     // var a = 1;
//     // var b = 2;
//     // module.exports.a = a;
//     // module.exports.b = b;

//     return module.exports;
// }




// console.log(arguments);  // 就是我们的代码会运行在这样的函数里 最后return的是module.exports 我们在中间填内容 NodeJS模块是运行在函数当中的
//                          //     它最后把我们文件内容读出来拼在它这个文件里面执行
// console.log(arguments[0] === exports);
// console.log(arguments[1] === require);
// console.log(arguments[2] === module);         
// console.log(arguments[3] === __filename);
// console.log(arguments[4] === __dirname);                




// module.exports.a = 1;
// console.log(arguments);



var a = 123;
var b = 'abc';
exports = a;
module.exports = b;
console.log(arguments);
// paths: 父类
// children: 子模块
// paths: 它所依赖的模块的包