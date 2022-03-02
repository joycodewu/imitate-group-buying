window.onload=function(){
    var dropright=document.getElementById("dropright");
    var droprightLi=dropright.getElementsByTagName("li");
//    console.log(dropright);
//    console.log(droprightLi);
    for(let i=0;i<droprightLi.length;i++){
        // 因为2,3,4没有效果所以不添加
        if(i!==0) continue;
            droprightLi[i].onmouseover=function(){
                // 关键部分就在于在this.classList中加入show元素
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
    // 1.设置循环，使得不同部分可以遍历直到出现和鼠标所指的块相同序号的
    // 2.定义numlist[i]的浮动函数，其中
    // 通过innerHTML得到li中的值
    // 编写img的引用地址
    // 设立for循环。将numlist中非指定的块改为黑色，指定的块改为白色
    for(let i=0;i<numList.length;i++){
        numList[i].onmouseover=function(){
            add=this.innerHTML;//此行中console出的结果为123456
            //123456是写在<li></li>中的
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
var maoyanBoxBody=document.getElementById("maoyan-box-body");
    var maoyanLeft=document.getElementById("maoyan-left");
    var maoyanRight=document.getElementById("maoyan-right");
    var movieTab=document.getElementById("movie-tab");
    var movieTabList=movieTab.getElementsByTagName("li");
    var movieTriangle=movieTab.getElementsByClassName("triangle-display");
    var nowhot=document.getElementById("nowhot");
    var quick=document.getElementById("quick");

    // 鼠标进入时显示移除左右标记
    maoyanBoxBody.onmouseover=function(){
        maoyanLeft.style.display="block";
        maoyanRight.style.display="block";
    }
    maoyanBoxBody.onmouseout=function(){
        maoyanLeft.style.display="none";
        maoyanRight.style.display="none";
    }
    // 鼠标移入li节点显示上面对应的区域
    for(let i=1;i<movieTabList.length;i++){
        let x=i-1;//三角只有两个元素，i比其下标大1，因此要定义x
        if(i===1){
            movieTabList[i].onmouseover=function(){
                nowhot.style.display="block";
                quick.style.display="none";
                movieTriangle[x].style.display="block";
                for(let j=0;j<movieTriangle.length;j++){
                    if(j!=x) movieTriangle[j].style.display="none";
                    else continue;
                }
            }
        }
        if(i===2){
            movieTabList[i].onmouseover=function(){
                nowhot.style.display="none";
                quick.style.display="block";
                movieTriangle[x].style.display="block";
                for(let j=0;j<movieTriangle.length;j++){
                    if(j!=x) movieTriangle[j].style.display="none";
                    else continue;
                }
            }
        }
    }
    // 点击左右键切换图片
    var num=0;//声明在此处的原因是num是位置标记，声明在函数内会导致从0开始定位
    maoyanRight.onclick=function(){
        if(nowhot.style.display=="block"){
            let movielun=setInterval(function(){
                num-=20;
                nowhot.style.left=num+"px";
                if(num<=-1100){
                    clearInterval(movielun);
                    maoyanRight.disabled=true;
                    maoyanLeft.disabled=false;
                }
            },20);
        }
        else{
            let movielun=setInterval(function(){
                num-=20;
                console.log(num)
                quick.style.left=num+"px";
                if(num<=-1100){
                    clearInterval(movielun);
                    maoyanRight.disabled=true;
                    maoyanLeft.disabled=false;
                }
            },20)
        }
    }
    maoyanLeft.onclick=function(){
        if(nowhot.style.display=="block"){
            let movielun=setInterval(function(){
                num+=20;
                nowhot.style.left=num+"px";
                if(num>=0){
                    clearInterval(movielun);
                    maoyanLeft.disabled=true;
                    maoyanRight.disabled=false;
                }
            },20);
        }
        else{
            let movielun=setInterval(function(){
                num+=20;
                // console.log(num)
                quick.style.left=num+"px";
                if(num>=0){
                    clearInterval(movielun);
                    maoyanLeft.disabled=true;
                    maoyanRight.disabled=false;
                }
            },20)
        }
    }
    //民宿区域JS代码
    var local=document.getElementById("hotel_nav_localLsit");
    var localLi=local.getElementsByTagName("li");
    console.log(localLi);
    var hotel=document.getElementById("hotelcontainer");
    var hotelLi=hotel.getElementsByClassName("hotellist");
    console.log(hotelLi);
    for(let i=0;i<localLi.length;i++){
        // 点中的li的变量要设置
        // hotelLi[i].index=i;
        console.log(hotelLi[i]);
        localLi[i].onclick=function(){
            for(let m=0;m<localLi.length;m++){
                hotelLi[m].style.display="none";
                if(m===i) hotelLi[m].style.display="flex";
            }
            //这一步骤是用于替代if函数的
            // console.log(this.index);
            // hotelLi[this.index].style.display="flex";
        }
    }
}