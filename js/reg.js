window.onload=function(){
    // 手机号强度验证
    var phone=document.getElementsByName("phone");
    var span=document.getElementsByTagName("span");
    // console.log(phone);
    // console.log(span);
    //手机号码验证
    phone[0].onfocus=function(){
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
            // 通过onload.setAttribute("disabled",true)来将onload按钮作废
            onload.setAttribute("disabled",true);
            onload.style.color="red";
        }
        console.log(/^1[3456879]\d*9$/.test(phoneValue));
        if(/^1[3456879]\d{9}$/.test(phoneValue)){
            span[1].className='display-inline icon-check-circle';//icon-times-circle为定义的样式
            span[1].innerHTML="手机号正确";
            onload.removeAttribute("disabled");
            onload.style.color="#000";
        }
        else{
            span[1].className='display-inline icon-times-circle';//icon-times-circle为定义的样式
            span[1].innerHTML="手机号填写错误";
            onload.setAttribute("disabled",true);
            onload.style.color="red";
        }
    }
    //短信验证码验证
    var button=document.getElementsByTagName("button");
    //点击button获取四位随机数
    button[1].onclick=function(){
        var random_num=Math.floor(Math.random()*(9999-1000+1)+1000);
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
            onload.setAttribute("disabled",true);
            onload.style.color="red";
            return false;//如果不执行的话后续判断会改为“验证码不能为空”
        }
        if(codeValue!=spanValue){
            span[3].className='display-inline icon-times-circle';
            span[3].innerHTML="验证码填写错误";
            onload.setAttribute("disabled",true);
            onload.style.color="red";
        }
        else{
            span[3].className='display-inline icon-check-circle';
            span[3].innerHTML="验证码正确";
            onload.removeAttribute("disabled");
            onload.style.color="red";
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
    //修改输入框
    password.onfocus=function(){
        password.style.border="1px solid #FFBE00";
    }
    password.onblur=function(){
        password.style.border="1px solid #aaa";
    }
    //onkeyup是每次键盘输入抬起后的功能
    password.onkeyup=function(){
        var pwd=password.value;
        var strongNum=checkStrong(pwd);
        console.log(strongNum);
        //得到密码强度条以修改其背景颜色
        var tipsB=document.getElementById("tips").getElementsByTagName("b");
        switch(strongNum){
            case 0:
                tipsB[0].style.backgroundColor="red"
                break;
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
    //密码匹配判定
    var passrepeat=document.getElementById("passrepeat");
    passrepeat.onfocus=function(){
        passrepeat.style.border="1px solid #FFBE00";
    }
    //监听按钮被点击
    //点击后可以通过ajax发送到后台
    passrepeat.onblur=function(){
        //修改边框的颜色
        passrepeat.style.border="1px solid #aaa";
        if(passrepeat.value==""){
            span[4].className='display-inline icon-times-circle';
            span[4].innerHTML="输入密码不能为空";
            onload.setAttribute("disabled",true);
            onload.style.color="red";
            return false;
        }
        if(passrepeat.value==password.value){
            span[4].className='display-inline icon-check-circle';
            span[4].innerHTML="两次输入的密码相同";
            onload.removeAttribute("disabled");
            onload.style.color="#000";
        }
        else{
            span[4].className='display-inline icon-times-circle';
            span[4].innerHTML="两次输入的密码不相同";
            onload.setAttribute("disabled",true);
            onload.style.color="red";
        }
    }
    // 上传按钮
    var onload=document.getElementById("onload");
    onload.onclick=function(){
        if(phone[0].value==""||code.value==""||password.value==""||passrepeat==""){
            alert("表单信息未填写完整");
        }
        else{
            console.log(1);
            // 传递手机号及密码参数
            window.location.href="./login.html?phonenumber="+phone[0].value+"&password="+password.value;//页面跳转函数
        }
    }

}

