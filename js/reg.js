window.onload=function(){
    var phone=document.getElementsByName("phone");
    var span=document.getElementsByTagName("span");
    // console.log(phone);
    // console.log(span);
    //手机号码验证
    phone[0].onclick=function(){
        phone[0].style.border="1px solid #f76120";
        span[1].className='display-none';
    }
    phone[0].onblur=function(){
        phone[0].style.border="1px solid #aaa";
        //得到phone[0]的值去进行后续正则判断
        var phoneValue=phone[0].value;
        if(phoneValue==''){
            span[1].className='display-inline icon-times-circle';//icon-times-circle为定义的样式
            //通过classname来修改span的状态
            span[1].innerHTML="手机号不能为空";
        }
        console.log(/^1[3456879]\d*9$/.test(phoneValue));
        if(/^1[3456879]\d{9}$/.test(phoneValue)){
            span[1].className='display-inline icon-check-circle';//icon-times-circle为定义的样式
            span[1].innerHTML="手机号正确";
        }
        else{
            span[1].className='display-inline icon-times-circle';//icon-times-circle为定义的样式
            span[1].innerHTML="手机号填写错误";
        }
    }
    //短信验证码验证
    var button=document.getElementsByTagName("button");
    //点击button获取四位随机数
    button[1].onclick=function(){
        var random_num=Math.floor(Math.random()*10000);
        span[2].className="display-inline";
        span[2].innerHTML=random_num;
    }
    var code=document.getElementById("code");
    code.onfocus=function(){
        code.style.border="1px solid #f76120";
        span[3].className="display-inline";
    }
    code.onblur=function(){
        code.style.border="1px solid #aaa"
        //获取输入的值
        var codeValue=code.value;
        //获取生成的随机数值
        var spanValue=span[2].innerHTML;
        if(codeValue==''){
            span[3].className='display-inline icon-times-circle';
            span[3].innerHTML="验证码不能为空";
            return false;//如果不执行的话后续判断会改为“验证码不能为空”
        }
        if(codeValue!=spanValue){
            span[3].className='display-inline icon-times-circle';
            span[3].innerHTML="验证码填写错误";
        }
        else{
            span[3].className='display-inline icon-check-circle';
            span[3].innerHTML="验证码正确";
        }
    }
    //密码强度验证
    //字符串声明
    var astr=["弱","中","强","安全"];
    //密码强度检测函数
    function checkStrong(val){
        var count=0;
        if(val.length<6) return 0;
        if(/\d/.test(val)) count++;
        if(/[a-z]/.test(val)) count++;
        if(/[A-Z]/.test(val)) count++;
        if(/\W/.test(val)) count++;
        if(val.length>20) return 4;
        return count;
    }
    //获得用户输入的密码
    var password=document.getElementById("password");
    //onkeyup是每次键盘输入抬起后的功能
    password.onkeyup=function(){
        var pwd=password.value;
        var strongNum=checkStrong(pwd);
        console.log(strongNum);
        //得到密码强度条以修改其背景颜色
        var tipsB=document.getElementById("tips").getElementsByTagName("b");
        switch(strongNum){
            case 0:break;
            case 1:
                tipsB[0].style.backgroundColor="red";
                tipsB[0].innerHTML=astr[strongNum-1];
            case 2:
                tipsB[0].style.backgroundColor="yellow";
                tipsB[0].innerHTML=astr[strongNum-1];
                tipsB[1].style.backgroundColor="yellow";
                tipsB[1].innerHTML=astr[strongNum-1];
                break;
            case 3:
                for(let i=0;i<strongNum;i++){
                    tipsB[i].style.backgroundColor="green";
                    tipsB[i].innerHTML=astr[strongNum-1];
                }
                break;
            case 4:
                for(let i=0;i<strongNum;i++){
                    tipsB[i].style.backgroundColor="green";
                    tipsB[i].innerHTML=astr[strongNum-1];
                    }
                break;
        }
    }
}