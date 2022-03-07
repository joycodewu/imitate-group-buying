// 获取注册页面传输过来的值
// 定义query函数
function getParamsByurl(url){
    //定义对象得到new object 发送的请求
    var result=new Object();
    console.log(url);
    //得到URL中？的下标index
    var index=url.indexOf("?");
    //当index不为-1时，用url.substr()获取到?后的字符串,记载为str
    if(index!=-1){
        var str=url.substr(index+1);//没有用过的关键在于substr
    }
    //用split把转换为字符串数组
    let strs=str.split("&");
    //遍历得到数组的每个值,还是通过split("=")来获得对象前后的值
    for(let i=0;i<strs.length;i++){
        // strs[i].split("=")[0]是对象值
        result[strs[i].split("=")[0]]=strs[i].split("=")[1];
    }
    //返回对象
    return result;
}
// 获取地址栏 location.href
var local_str=location.href;
//调用函数
var params=getParamsByurl(local_str);
console.log(params);
// 获取输入值
var phoneNumber=document.getElementById("phonenumber");
var phonenumberPass=document.getElementById("phonenumberpass");
var passWord=document.getElementById("password");
var pwdPass=document.getElementById("pwdpass");
// HTML文件中增加输入窗口
//判断是否匹配 不匹配或者空加入button的disable函数
phoneNumber.onfocus=function(){
    phoneNumber.style.border="1px solid #f76120";
}
phoneNumber.onblur=function(){
    phoneNumber.style.border="1px solid #aaa";
    if(phoneNumber.value===params.phonenumber){
        // console.log(1);
        phonenumberPass.className='display-inline icon-check-circle';
        phonenumberPass.innerHTML="手机号输入正确"
        logButton.removeAttribute("disabled");
    }
    else{
        phonenumberPass.className='display-inline icon-times-circle';
        phonenumberPass.innerHTML="手机号输入错误"
        logButton.setAttribute("disabled",true);
    }
}
passWord.onfocus=function(){
    passWord.style.border="1px solid #f76120";
}
passWord.onblur=function(){
    passWord.style.border="1px solid #aaa";
    if(passWord.value===params.password){
        console.log(1);
        pwdPass.className='display-inline icon-check-circle';
        pwdpass.innerHTML="密码输入正确"
        logButton.removeAttribute("disabled");
    }
    else{
        pwdpass.className='display-inline icon-times-circle';
        pwdpass.innerHTML="密码输入错误"
        logButton.setAttribute("disabled",true);
    }
}
//登录按钮的设置
var logButton=document.getElementById("log_button");
logButton.onclick=function(){
    if(phoneNumber.value==""||passWord.value==""){
        alert("表单信息未填写完整");
    }
    else{
        window.location.href="./index.html?phonenumber="+phoneNumber.value;
    }
}
