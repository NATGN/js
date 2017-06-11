/**
 先把字符串转为数组，再反转数组顺序，最后把数组换为字符串；
 **/
function reverseString(str) {
    str = str.split('');
    str = str.reverse();
    str = str.join();
    return str;
}
/**阶乘 **/
function factorialize(num) {

    return num > 1 ? num * factorialize(num - 1) : 1;
}
/**
 验证回文，如果是回文返回true，否则为false；思路是先去掉多余的标点符号；然后全部转换为小写；
 把它复制给其他变量；这个变量利用reversestring方法，最后判断这个新变量是否等于原始变量；
 **/
function palindrome(str) {
    str = str.replace(/[&\|\\\*^%$#@\-\s\.\,\_\(\)\;]/g, "");
    str = str.toLowerCase();
    var a = str;
    a = a.split('');
    a = a.reverse();
    a = a.join("");
    if (a == str) {
        return true;
    } else {
        return false;
    }
}
/**
 比较数组中大小
 */
function findLongestWord(str) {
    str = str.replace(/[&\|\\\*^%$#@\-\.\,\_\(\)\;]/g, "");
    str = str.split(' ');
    var max = str[0];
    for (var i = 1; i < str.length; i++) {
        if (max.length < str[i].length) {
            max = str[i];
        }
    }
    return max;
}
/**
 *使句子中每个单词首字母大写
 */
function titleCase(str) {
    var ss = str.toLowerCase().split(" ");
    var res = ss.map(function(val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    });
    return res.join(" ");
}
/**
 *运动方法
 */
function startMove(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var bStop=true;
        for(var attr in json){
            var iCur=0;
            if(attr=='opacity'){
                iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
            }
            else{
                iCur=parseInt(getStyle(obj,attr));
            }

            var iSpeed=(json[attr]-iCur)/8;
            if(iSpeed>0){
                iSpeed=Math.ceil(iSpeed)
            }
            else{
                iSpeed=Math.floor(iSpeed)
            }
            if(iCur!=json[attr]){
                bStop=false;
            }
            if(attr=='opacity'){
                obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
                obj.style.opacity=(iCur+iSpeed)/100;
            }
            else{
                obj.style[attr]=iCur+iSpeed+'px';
            }
            if(bStop){
                clearInterval(obj.timer);
                if(fn){
                    fn();
                }
            }
        }
    },30);
}
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}
/**********
 监听事件，兼容所有浏览器
 **********/
function addEventHandler(target,type,func){
    if(target.addEventListener){
        //监听IE9，谷歌和火狐
        target.addEventListener(type, func, false);
    }else if(target.attachEvent){
        target.attachEvent("on" + type, func);
    }else{
        target["on" + type] = func;
    }
}