// console.log(require); // 函数
// console.log(module); // 对象
// console.log(exports); // 空对象
// console.log(__dirname); // 当前路径
// console.log(__filename); // 全称 = 路径 + 文件名 + 后缀

// 它们不是系统变量 
// 我们nodeJs的一个模块是运行在一个函数当中 这个函数长这样
// sys.js是模拟NodeJs源码




require('./test.js');
console.log(arguments[2]); // children就是他引入的模块就是他的子模块 外面的loaded:false 还没加载完 里面的loaded:true 因为require是上一行的 
                           //     到这为止他已经加载过了 所以在这它的loaded是true parent是谁引入的我 children是引入哪几个子模块 
                           //     上一行执行完才会执行我这一行 所以children里面的loaded是true
                           // paths 有时候我们用的模块既不是我们自己写的也不是Node自带的 是别人写好的框架 我们用npm引入 
                           //     npm引入之后会在你这个路径下创建node_modules文件夹 这个文件夹叫node_modules

// pwd 当前路径             
// npm init   出现pakage.json
// npm install express  出现node_modules 说明你下载的模块都是在这个文件下 所以你去哪里找呢 你要去引入一个node的时候他要去哪里找呢
//     他就会去这个node_modules里面去找 所以会出现这个paths: [...] 当前找不到就找他上一级 依次向上找 一直找到根目录下 当前文件的id是.
//     其他的id都是文件名                       
// 假如你写了一个项目 里面用了很多东西 你给别人的时候 别人怎么知道你引入了什么 把package.json发给别人就好了 dependencies就是依赖的意思
// npm install math
// 把这个package.json文件给他 然后npm installs就行了