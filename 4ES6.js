//严格JS
必须用var声明变量
不允许八进制
禁止自定义的函数中的this指向window
创建eval作用域
构造函数要new
对象不能有重名的属性
//js和json的转换
JSON.stringify(obj / arr)
JSON.parse(json)
//object
obj2 = Object.create(obj1);//创建一个新对象，使用现有对象来提供新创建的对象的__proto__
obj2 = Object.create(obj1, {
    sex: {//给obj2添加新的属性`sex`。注意，这一行的冒号不要漏掉
        value: '男',  //通过value关键字设置sex的属性值
        writable: false,
        configurable: true,//是否可以被删除
        enumerable: true//是否可以被for in枚举
    }
});
Object.defineProperties(obj2, {//直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
    fullName: {
        get: function () {
            return this.firstName + '-' + this.lastName
        },
        set: function (data) {  //监听扩展属性，当扩展属性发生变化的时候自动调用，自动调用后将变化的值作为实参注入到set函数
            var names = data.split('-');
            this.firstName = names[0];
            this.lastName = names[1];
        }
    }
});
//var 全局，可重复声明，不支持块级
let [a, b, c] = [1, 2, 3];//解构赋值
for (let value of arr1) {//for ... of`获取的是数组里的值；`for ... in`获取的是index索引值
    console.log(value);
}
console.log('name:' + name + ',age:' + age);   //传统写法
console.log(`name:${name},age:${age}`);  //ES6 写法  是反引号
var fn2 = (a, b = 5) => {//箭头函数,可设默认值 (...arg)扩展运算符  (first, second, ...arg)rest运算符
    console.log('haha');
    return a + b;
};
let arr2 = [...arr1];  //arr2 会重新开辟内存地址
export& import模块化

//promise
let promise = new Promise((resolve, reject) => {
    //进来之后，状态为pending
    console.log('111');  //这行代码是同步的
    //开始执行异步操作（这里开始，写异步的代码，比如ajax请求 or 开启定时器）
    if (异步的ajax请求成功) {
        console.log('333');
        resolve('haha');//如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fullfilled
    } else {
        reject('555');//如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected
    }
})
console.log('222');

//调用promise的then()
promise.then((successMsg) => {
    //如果promise的状态为fullfilled，则执行这里的代码
    console.log(successMsg, '成功了');
}
    , (errorMsg) => {
        //如果promise的状态为rejected，则执行这里的代码
        console.log(errorMsg, '失败了');

    }
)
//symbol
let mySymbol = Symbol('one');
obj[mySymbol]='holo';//添加属性用属性选择器
//for in、for of 遍历时不会遍历Symbol属性。
Symbol.iterator

async function foo() {//async返回的总是Promise对象，可以用then方法进行下一步操作
    await 异步操作;
    await 异步操作；
}
Object.assign(目标对象, 源对象1, 源对象2...)
//作用：将源对象的属性追加到目标对象上。如果对象里属性名相同，会被覆盖。