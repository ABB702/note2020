/**
*  ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。
*  DOM：Document Object Model（文档对象模型），操作页面上的元素的API。比如让盒子移动、变色、改变大小、轮播图等等。
*  BOM：Browser Object Model（浏览器对象模型），操作浏览器部分功能的API。通过BOM可以操作浏览器窗口，比如弹框、控制浏览器跳转、获取浏览器分辨率等等。
 */
alert(666 + '千古壹号');//不需要必有变量，两个一组，字符串最最强,但其他四则会隐式转换
alert(666 / 0);//Infinity √  NaN X
//任何数据类型和undefined运算都是NaN; 任何值和null运算，null可看做0运算。他们==但不===
var a = prompt('请随便输入点什么东西吧');
console.log(a);
var a = 'hello word';//注意js里字符串是单/双引号均可   允许连续赋值
str1.length;
a = a.toString(2);//针对number a可以转换为2进制

parseInt(true); parseFloat(true);//先转为字符串，再提取出[最前面]的数字部分；没提取出来，那就返回 NaN。
var num = parseInt(a, 16); // 【重要】将 a 当成 十六进制 来看待，转换成 十进制 的 num
Number("123abc");//只看整体


//创建
var obj = new Object();
var obj2 = {
    name: "猪八戒",
    fn: function () { }//匿名函数
};
var obj3 = {//json,很少放function,一般放常量、数组、对象等
    "name": "zs",
    "sayHi": function () { }
};
//访问
obj.name = '王二';//还能对象包对象 
obj['name'] = '王二';
//删除
delete obj.name;
//查询
alert('name' in obj);
//遍历
console.log(JSON.stringify(obj));
for (var key in obj2) {
    console.log("属性名:" + key);
    console.log("属性值:" + obj2[key]); // 注意，因为这里的属性名 key 是变量，所以，如果想获取属性值，不能写成 obj.key，而是要写成 obj[key]
}
//方法创建
function fun1(a, b) {
    return a + b;
}
var fun2 = function () {//将匿名函数赋值给一个变量。
    console.log("我");
};
//调用
fun1();
fun1.call();
obj.fun1();
(function () { alert(); })();//立即执行函数
//内置了一个arguments[]伪数组
//arguments.callee对应一个函数对象，就是当前正在指向的函数对象。

window.a;//强行访问全局变量
//没有var声明的变量都是全局变量，而且并不会提前声明(变量提升)

//使用工厂方法创建对象
function createPerson(name, age, gender) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.gender = gender;
    obj.sayName = function () {
        alert(this.name);
    };
    return obj;
}
var obj2 = createPerson("猪八戒", 28, "男");

//利用构造函数自定义对象
var stu1 = new Student("smyh");
console.log(stu1);
// 创建一个构造函数
function Student(name) {
    this.name = name;    //this指的是当前对象实例【重要】
    this.sayHi = function () {
        console.log(this.name);
    }
}//注意构造函数单列出来，原型才相当于类
per1.__proto__ == Person.prototype
Person.prototype.toString = function () { return ...; }//[object Object]的输出是Object的toString干的
//GC判断依据是是否有引用指向

//--------组合继承-------
//Super中定义属性name
function Super(name){
    this.name = name;
    this.color = ['red','green'];
}
//Super的原型中定义方法
Super.prototype.sayname = function(){
    console.log(this.name);
}
function Sub(name, age){
    //通过构造函数的方式继承Super的属性
    Super.call(this, name);//防止指向同一
    //定义自己的属性
    this.age = age;
}
//通过原型链的方式继承方法
Sub.prototype = new Super();//这里重写了原型，丢失了constructor，后面要重新赋一次所以多了一次构造函数的调用
Sub.prototype.constructor = Sub;
var ins1 = new Sub('ins1',18);
//-----------------------------------
//---------寄生组合继承---------
function copyProto(sup,sub){//注意不是实例
    var copy = Object.create(sup.prototype);//作拷贝
    copy.constructor = sub;
    sub.prototype = copy;
}
function Super (name){
    this.name = name;
    this.color = ['red','green'];
}
function Sub (name, age){
    Super.call(this,name);
    this.age = age;
}
copyProto(Super, Sub);

var arr1 = ['王二', 35, '男', '180'];
var arr2 = new Array(); // 参数为0-n个
JSON.stringify(arr1);
arr.slice(2, 4);//[2,4)截取，splice(firstIndex,nums)删除原数组的截取
arr2.concat(arr1, arr3);//连接
arr.join();//["a", "b", "c"]到a,b,c的字符串
reverse() ；sort();
var result = arr3.sort(//注意这里俩参数，不是重写
    function (a, b) {
        return a - b; // 升序排列
    }
);
arr1.map(function (item, index) {
        return item + 10;  //让arr1中的每个元素加1
    }
)
const arr2 = arr1.map(item => item.name);
const arr3 = arr1.map(item => ({
    myName: item.name,
    myAge: item.age,
}));
const arr2 = arr1.filter(item=> item > 4);//将arr1中大于4的元素返回
const arr2 = arr1.filter(item => item.type == '一线');
arr.indexOf("c");//没找到返回-1
Array.from(btrArray).forEach(function(item,index){console.log(item);});//数组转化
//伪数组的原型链中没有 Array.prototype
//清空数组
array.splice(0);      //方式1：删除数组中所有项目
array.length = 0;     //方式2：length属性可以赋值，在其它语言中length是只读
array = [];           //方式3：推荐

//内置对象
Math.abs(-2);Math.random();/**[0,1) */Math.pow(a, b);Math.sqrt(a);
myDate.getTime();/**时间戳*/date.getMonth();/*特殊，0-11*/
var str = "abcdEFG";
str.charAt(i);str.substring(开始索引, 结束索引);str.substr(开始索引, 截取的长度);str.split(","); // 将字符串 str 拆分成数组，通过逗号来拆分
str.trim();str.toUpperCase();str.replace();

//正则表达式
var reg = new RegExp('A', 'i');// 定义一个正则表达式：检查一个字符串中是否含有 a i:忽略大小写 g:全局匹配模式
var reg = /A/i;
var str1 = "qianguyihao";
// 通过 test()方法，判断字符串是否符合 上面定义的 reg 规则
console.log(reg.test(str1)); // 打印结果：true
/**
*  /[ab]/ 等价于 /a|b/：检查一个字符串中是否包含 **a或b**
*  /[a-z]/：检查一个字符串那种是否包含**任意小写字母**
*  /[A-Z]/：任意大写字母
*  /[A-z]/：任意字母
*  /[0-9]/：任意数字
*  /a[bde]c/：检查一个字符串中是否包含 abc 或 adc 或 aec
*  [^ ] 表示：除了
*/
var array = str.split(reg);var index = str.search(reg);var array = str.match(reg);var strNew = str.replace(reg,"");
var phoneReg = /^1[3-9][0-9]{9}$/;
str = str.replace(/^\s*|\s*$/g,"");
var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;

objA.methodA.call(objB,methodP1,methodP2);//现在用着objB
objA.methodA.apply(objB,[methodP1,methodP2]);
objA.methodA.bind(objB,methodP1,methodP2)();
//立即执行函数，且可以改变this的指向

//上下文: 变量定义、函数声明、this、arguments
//闭包产生条件：函数嵌套+外部被调用，内部被提前声明(即排除匿名)
//闭包让内部变量活到对象死亡(obj=null)
//向外暴露方法： 
// return {
//         doSomething1: doSomething,
//         doOtherthing2: doOtherthing
// }

//js闭包：只实现了代码封装，如同面向对象里面的单例类，不需要实例化，不会存在多个副本。
//构造函数：实现了封装和继承，每次实例化都会形成一个新的对象。

document.querySelector('#btnAjax').onclick = function () {
    // 发送ajax 请求 需要 五步
    // （1）创建异步对象
    var ajaxObj = new XMLHttpRequest();

    // （2）设置请求的参数。包括：请求的方法、请求的url。
    ajaxObj.open('get', '02-ajax.php');

    // （3）发送请求
    ajaxObj.send();

    //（4）注册事件。 onreadystatechange事件，状态改变时就会调用。
    //如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。
    ajaxObj.onreadystatechange = function () {
        // 为了保证 数据 完整返回，我们一般会判断 两个值
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // 5.在注册的事件中 获取 返回的 内容 并修改页面的显示
            console.log('数据返回成功');

            // 数据是保存在 异步对象的 属性中
            console.log(ajaxObj.responseText);//responseXML：获得 XML 形式的响应数据。

            // 修改页面的显示
            document.querySelector('h1').innerHTML = ajaxObj.responseText;
        }
    }
}