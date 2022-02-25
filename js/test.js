
window.onload=function(){
    var dropright=document.getElementById("dropright");
    var droprightLi=dropright.getElementsByTagName("li");
   console.log(dropright);
   console.log(droprightLi);
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
    console.log(dropdown);
    console.log(dropdownLi);
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
}