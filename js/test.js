window.onload=function(){
    var local=document.getElementById("hotel_nav_localLsit");
    var localLi=document.getElementsByTagName("li");
    console.log(localLi);
    var hotel=document.getElementById("hotelcontainer");
    var hotelLi=hotel.getElementsByClassName("hotellist");
    console.log(hotelLi);
    for(let i=0;i<localLi.length;i++){
        // 点中的li的变量要设置
        // hotelLi[i].index=i;
        localLi[i].onclick=function(){
            for(let j=0;j<localLi.length;j++){
                hotelLi[j].style.display="none";
                if(j===i) hotelLi[j].style.display="flex";
            }
        }
    }
}