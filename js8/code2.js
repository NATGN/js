window.onload = function() {
    var aLi = document.getElementsByClassName('ali');
    var down = document.getElementById('down1');
    var up = document.getElementById('up1')
    var weiXin = document.getElementsByClassName("weixin")[0];
    var body = document.getElementsByTagName('body');
    var images = document.querySelectorAll('#lunbotu img')
    var timer3;
    var k = 3000;
    var j = 1;
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function() {
            startMove(this, { fontSize: 20 })
        }
        aLi[i].onmouseout = function() {
            startMove(this, { fontSize: 16 })
        }
    }
    down.onclick = function() {
        down.style.display = "none";
        up.style.display = "inline";
        weiXin.style.opacity = "1"
    }
    up.onclick = function() {
        up.style.display = "none";
        down.style.display = "inline"
        weiXin.style.opacity = "0";
    }
    function showImage(index) {
        for (var i = 0; i < images.length; i++) {
            images[i].index = i
            images[i].style.zIndex = 100 - i;
            images[i].style.opacity = '0';
        }
        images[index].style.opacity = '1';
    }
    showImage(0);
    var count = 1;
    function imageMove() {
        if (count % 2 == 0) {
            count = 0;
        }
        showImage(count);
        count++;
    }
    imageMove();
    var imageInitailMove = setInterval(function(){
    	if (count % 2 == 0) {
            count = 0;
        }
        showImage(count);
        count++;
    } ,10000);
};