console.log('我是test');
var a = 123;
var b = 'abc'
// console.log(a);


var x = {};
var y = {};
var z = x;
console.log(x == y);
console.log(exports);
console.log(module.exports);
console.log(exports === module.exports); // true 指示最开始的时候exports和modules.exports最开始是指向的是同一个空间
console.log(x == z);




// 设计模式 开闭原则 对修改关闭 对拓展开放
// 导出
// console.log(module.exports); // {} 我们想导出啥 就给他赋值啥
// module.exports.a = a; // 导出
// module.exports.b = b;

// module.exports简写
// exports.a = a;
// exports.b = b;

// 混着用 为什么能导出???  因为exports和modules.exports最开始是指向的是同一个空间
// module.exports.a = a;
// exports.b = b;

// exports = a;
// module.exports = b;

// module.exports.a = a;
// module.exports.b = b;



// modules.exports和exports有什么区别??
//  都是导出功能
// 为什么modules.exportsh和exports是一样的？？
// 当我modules.exports和exports是指向不同空间的时候 实际导出的是module.exports 所以导出的永远是对象module.exports 
//    刚开始的时候module.exports和exports是同一个对象
// 要有个规范 用module.exports

// 快捷键 Atr+Alt+N




// 问题？ require是在哪里声明的呢 为什么我们拿来就行用呢 modules.exports是在哪里声明 exports是系统的吗 
// console.log是系统的
