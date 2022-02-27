window.onload=function(){
    var dropright=document.getElementById("dropright");
    var droprightLi=dropright.getElementsByTagName("li");
//    console.log(dropright);
//    console.log(droprightLi);
    for(let i=0;i<droprightLi.length;i++){
        // 因为2,3,4没有效果所以不添加
        if(i!==0) continue;
            droprightLi[i].onmouseover=function(){
                this.classList.add("show");
            }
            droprightLi[i].onmouseout=function(){
                this.classList.remove("show");
            }
    }
    var dropdown=document.getElementById("dropdown");
    var dropdownLi=dropdown.getElementsByTagName("li");
    // console.log(dropdown);
    // console.log(dropdownLi);
    for(let i=0;i<dropdownLi.length;i++){
        // 因为2,3,4没有效果所以不添加
        if(i>0&&i<4) continue;
            dropdownLi[i].onmouseover=function(){
                this.classList.add("show");
            }
            dropdownLi[i].onmouseout=function(){
                this.classList.remove("show");
            }
    }
    // 轮播图
    var carousel=document.getElementById("carousel");
    var left=document.getElementById("left");
    var right=document.getElementById("right");
    var img=document.getElementById("image");
    var links=document.getElementById("links");
    var numList=document.getElementById("number").getElementsByTagName("li");
    // 移除显示左右箭头
    carousel.onmouseover=function(){
        left.style.display="block";
        right.style.display="block";
    }
    carousel.onmouseout=function(){
        left.style.display="none";
        right.style.display="none";
    }
    //添加第一张图片
    img.src="./images/ad01.jpg"
    numList[0].style.background="#fff";
    // 轮播切换图片
    var add=1;
    function carouselLb(){
        lun=setInterval(function(){
            add=add+1;
            if(add>6){
                add=1;
            }
            img.src="./images/ad0"+add+".jpg";
            var x=add-1;
            for(let i=0;i<numList.length;i++){
                numList[i].style.background="#3e3e3e";
                if(i===x) numList[i].style.background="#fff";
            }
        },3000);
    }
    carouselLb();
    // 点击左右箭头切换图片
    left.onclick=function(){
        // console.log(1);
        add=add-1;
        if(add<1) add=6;
        img.src="./images/ad0"+add+".jpg";
        var x=add-1;
        for(let i=0;i<numList.length;i++){
            numList[i].style.background="#3e3e3e";
            if(i===x) numList[i].style.background="#fff";
        }
    }
    right.onclick=function(){
        // console.log(1);
        add=add+1;
        if(add>6) add=1;
        img.src="./images/ad0"+add+".jpg";
        var x=add-1;
        for(let i=0;i<numList.length;i++){
            numList[i].style.background="#3e3e3e";
            if(i===x) numList[i].style.background="#fff";
        }
    }
    // 鼠标滑过li时切换图片
    for(let i=0;i<numList.length;i++){
        numList[i].onmouseover=function(){
            add=this.innerHTML;//此行中console出的结果为123456
            console.log(add);
            img.src="./images/ad0"+add+".jpg";
            let x=add-1;
            for(let i=0;i<numList.length;i++){
                numList[i].style.background="#3e3e3e";
                if(i===x) numList[i].style.background="#fff";
            }
        }
    }
//猫眼电影部分

}