//得到待修改的参数
var addrShow=document.getElementById("addr-show");
var prov=document.getElementById("prov");
var city=document.getElementById("city");
var country=document.getElementById("country");
var btn=document.getElementsByClassName("confirm")[0];
console.dir(btn)

// 用于保存省市区的对象
var current={
    prov:"",
    city:"",
    country:""
};

// 自动获取加载省信息
(function provShow(){
    //禁用btn的按钮
    btn.disabled=true;
    var len=provice.length;
    for(let i=0;i<len;i++){
        //创建新的节点option
        var provOpt=document.createElement("option");
        //将option节点赋值为provice中的城市 prov为provOpt为option的对象obj
        provOpt.innerText=provice[i].name;
        provOpt.value=provice[i].name;
        //将城市节点插入到prov节点的后面.appendChild
        // console.dir(provOpt);
        prov.appendChild(provOpt);
    }
})()

//城市遍历函数的调用在prov的select框中onchange="showCity(this)"函数中，既传入的参数为option的省份值。
//根据省的信息来显示市的信息
//传入参数obj为操作对象，其中obj就是option节点
//声明一个变量val用来记录省的名字
//当val不为空时，遍历省份列表，声明变量provIndex来记录该省份的序列号
//根据序列号来得到省份然后获取其中的列表
function showCity(obj){
    // 得到obj省份值在Provice列表中的下表
    var val=obj.options[obj.selectedIndex].value;//得到省份名字
    //切换省份时会重复插对象，父元素中增加约束条件
    //  判断当前的省份和保存的内容是否相同，不相同需要清空
    if(val!=current.prov){
        current.prov=val;
        // 不相等时清除city列表，其长度为1，刚好是首option
        city.length=1;
        btn.disabled=true;
        // 修改省份列表时，让县区列表清零
        country.length=1;
    }

    //用len记录prov的length
    var len=provice.length;
    // console.log(val);
    if(val!=""){
        var provIndex=0;
        for(let i=0;i<len;i++){
            if(val===provice[i].name){
                provIndex=i;
                // console.log(provIndex);
            }
        }
    }
    //遍历市节点
    city_len=provice[provIndex].city.length;
    // console.log(city_len);
    for(let j=0;j<city_len;j++){
        var cityOpt=document.createElement("option");
        cityOpt.innerText=provice[provIndex].city[j].name;
        cityOpt.value=provice[provIndex].city[j].name;
        // console.dir(cityOpt);
        city.appendChild(cityOpt);
    }
}
// 得到县区节点
function showCountry(obj){
    console.dir(obj);
    //得到城市的值val
    var val=obj.options[obj.selectedIndex].value;
    // console.log(val)
    //解决重复输入的bug
    if(val!=current.city){
        //把val的值赋给暂存区的city值
        current.city=val;
        // 不相等时清除city列表，其长度为1，刚好是首option
        country.length=1;
        btn.disabled=true;
    }
    if(val!=""){
        // 得到省节点
        let len=provice.length;
        // console.log(len)
        // console.log(current.prov)
        let provIndex=0;
        for(let i=0;i<len;i++){
            if(current.prov===provice[i].name){
                provIndex=i;
            }
        }
        // 得到市节点
        let cityIndex=0;
        for(let j=0;j<provice[provIndex].city.length;j++){
            if(provice[provIndex].city[j].name===val){
                cityIndex=j;
            }
        }
        // 遍历县区县区节点
        var countryLen=provice[provIndex].city[cityIndex].districtAndCounty.length;
        //城市里没有区县需要处理一下
        if(countryLen==0)
        addrShow.value=current.prov+"-"+current.city;
        // console.log(countryLen);
        for(k=0;k<countryLen;k++){
            var countryOpt=document.createElement("option");
            countryOpt.innerText=provice[provIndex].city[cityIndex].districtAndCounty[k];
            countryOpt.value=provice[provIndex].city[cityIndex].districtAndCounty[k];
            country.appendChild(countryOpt);
        }
    }
}
//选择县区之后的处理函数
function selectCountry(obj){
    current.country=obj.options[obj.selectedIndex].value;
    // console.log(current);
    if(current.prov!=""&&current.city!=""&&current.coutry!=""){
        btn.disabled=false;
    }
}
function showaddr(){
    console.log(1);
    addrShow.value=current.prov+"-"+current.city+"-"+current.country;
}

