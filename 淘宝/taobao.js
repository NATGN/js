/**
 * Created by Administrator on 2017/5/13 0013.
 */
window.onload=function () {
    var timer1=null;
    var timer2=null;
    var aDiv2=document.getElementById('demo2');
    var aDiv=document.getElementById('demo1');
    var nav=document.getElementById('Nav');
    nav.style.width=document.clientWith;
    var sousou=document.getElementById('sousuo');
    sousou.focus();
    timer1=setInterval(function () {
        var asd=aDiv.offsetTop;
        if (asd==20){
            startMove(aDiv,{top:0});
        }if(asd==-20){
            aDiv.style.top=20+'px';
            startMove(aDiv,{top:0})
        }
        if(asd==0){
            startMove(aDiv,{top:-20});
        }
    },10000);
    timer2=setInterval(function () {
        var asdf=aDiv2.offsetTop;
        if(asdf==20){
            startMove(aDiv2,{top:0});
        }
        if (asdf==-20){
            aDiv2.style.top=20+'px';
            startMove(aDiv2,{top:0})
        }
        if(asdf==0){
            startMove(aDiv2,{top:-20});
        }
    },10000);
    var oPic = document.getElementById('pic2');
    var pfive = document.getElementById('five');
    var timer3 = null;
    var timer4 = null;
    var timer5=null;
    var all1 = document.getElementById('all1');
    timer3=setInterval(function () {
        var picleng=oPic.offsetLeft;
        if (picleng==0){
            startMove(oPic,{left:-520})
        }
        if (picleng==-520){
            startMove(oPic,{left:-1040})
        }
        if (picleng==-1040){
            startMove(oPic,{left:-1560});
        }
        if (picleng==-1560){
            startMove(oPic,{left:-2080});
        }
    },4000);
    timer4=setInterval(function () {
        var pfiveleng=pfive.offsetLeft;
        var picleng=oPic.offsetLeft;
        if (picleng==-1560){
            startMove(pfive,{left:0})
        }
    },4000)
    timer4=setInterval(function () {
        var pfiveleng=pfive.offsetLeft;
        var picleng=oPic.offsetLeft;
        if (picleng==-2080){
            oPic.style.left=0+'px';
            pfive.style.left=520+'px'
        }
    },1000)
}

