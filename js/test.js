window.onload=function(){
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



}