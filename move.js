// JavaScript Document
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