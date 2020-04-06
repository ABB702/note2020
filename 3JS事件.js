// 1、获取事件源
var div = document.getElementById("box1");
// 2、绑定事件
div.onclick = function () {//onmouseover
    // 3、书写事件驱动程序
    alert("我是弹出的内容");
}
<div id="box1" onclick="fn()"></div>
js的加载是和html同步加载的
window.onload = function() {}
var a1 = document.createElement("li"); 
父节点.appendChild(新的子节点);
父节点.insertBefore(新的子节点,作为参考的子节点)
node1.parentNode.removeChild(node1);
元素节点.getAttribute("属性名称");//拿属性值&&set&&remove,对非原始属性，不能和 元素节点.属性 混用
                                                            //.NodeType     .NodeName   .NodeValue
var element = document.getElementById("box1");  //元素节点（标签）      1   div         null
var attribute = element.getAttributeNode("id"); //获取box1的属性节点    2   id          box1 
var txt = element.firstChild;                   //获取box1的文本节点    3   #text       生命壹号
var value = element.getAttribute("id");         //获取id的属性值
//处理行内style
box1.style.backgroundColor = "red";
function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];
    }
    return ele.currentStyle[attr];
}

//offset
offsetWidth = width + padding + border
offsetParent：获取当前元素的定位父元素
function animate(ele, target) {
    //要用定时器，先清除定时器
    //一个盒子只能有一个定时器，这样的话，不会和其他盒子出现定时器冲突
    //我们可以把定时器本身，当成为盒子的一个属性
    clearInterval(ele.timer);
    //我们要求盒子既能向前又能向后，那么我们的步长就得有正有负
    //目标值如果大于当前值取正，目标值如果小于当前值取负
    var speed = target > ele.offsetLeft ? 10 : -10;  //speed指的是步长
    ele.timer = setInterval(function () {
        //在执行之前就获取当前值和目标值之差
        var val = target - ele.offsetLeft;//offsetLeft从父亲的 padding 开始算起，父亲的 border 不算在内;只读
        //移动的过程中，如果目标值和当前值之差如果小于步长，那么就不能在前进了
        //因为步长有正有负，所有转换成绝对值来比较
        if (Math.abs(val) < Math.abs(speed)) {  //如果val小于步长，则直接到达目的地；否则，每次移动一个步长
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        } else {
            ele.style.left = ele.offsetLeft + speed + "px";
            //缓动
            //div.style.left = div.offsetLeft + (400 - div.offsetLeft) / 10 + "px";
            //最后距离到不了的解决--offsetLeft有四舍五入
            //step = step > 0 ? Math.ceil(step) : Math.floor(step);
        }
    }, 30)
}
//scroll
div.scrollWidth//max(盒子宽，内容宽)
scrollHeight - scrollTop/*滚动条滚动距离*/ == clientHeight//到底
document.documentElement//document.html (X)
//client
clientWidth : width + padding//只读，无px
window.onresize = fn;

/**o
 * ffsetTop/offsetLeft：
- 调用者：任意元素。(盒子为主)
- 作用：距离父系盒子中带有定位的距离。

scrollTop/scrollLeft：
- 调用者：document.body.scrollTop（window调用）(盒子也可以调用，但必须有滚动条)
- 作用：浏览器无法显示的部分（被卷去的部分）。

clientY/clientX：
- 调用者：event
- 作用：鼠标距离浏览器可视区域的距离（左、上）。
 * 
 */

 //事件绑定
 btn.addEventListener("click", fn1);//ie8:attachEvent()
 event = event || window.event; // 兼容性写法
 //参数为true，代表事件在「捕获」阶段触发；参数为false或者不写参数，代表事件在「冒泡」阶段触发
 box3.addEventListener("click", function () {
    alert("捕获 child");
}, true);
第一个接收到事件的对象是 window
//不是所有的事件都能冒泡,查验：
box1.onclick = function (event) {
    alert("冒泡 child");
    event = event || window.event;
    console.log(event.bubbles); //打印结果：true。说明 onclick 事件是可以冒泡的
}
//事件委托 ：利用了冒泡机制
window.onload = function() {
    // 获取父节点，并为它绑定click单击事件。 false 表示事件在冒泡阶段触发（默认）
    document.getElementById('parent-list').addEventListener('click', function(event) {
        event = event || window.event;
        // e.target 表示：触发事件的对象
        //如果触发事件的对象是我们期望的元素，则执行否则不执行
        if (event.target && event.target.className == 'link') {
        // 或者写成 if (event.target && event.target.nodeName.toUpperCase() == 'A') {
            console.log('我是ul的单击响应函数');
        }
    }, false);
};
//event.keyCode可以判断按下什么键

//BOM
//Window;Navigator浏览器信息;Location;History;Screen
var ua = navigator.userAgent; // 获取当前浏览器的 userAgent
history.go( int n);  // 需要整数作为参数,关闭则清1
console.log(location.href); // 获取当前页面的url 路径
location.href = 'www.baidu.com'; // 跳转
location.reload(); // 重新加载当前页面。
location.reload(true); // 在方法的参数中传递一个true，则会强制清空缓存刷新页面。
window.open(url,target,param)