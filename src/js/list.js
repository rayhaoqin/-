document.addEventListener("DOMContentLoaded", function() {
    var status = [200, 304];
    var goods = document.querySelector(".goods");
    var xhr = new XMLHttpRequest();
    var jiage = document.querySelector(".jiage");
    var xiaoliang = document.querySelector(".xiaoliang");
    var page = document.querySelector(".page");
    var yema = 1;
    var num = 20;
    //默认为id排序
    request("row_price");

    // 价格排序
    jiage.onclick = function() {
        request("row_price");
    }

    //时间排序
    xiaoliang.onclick = function() {
        request("row_xiaoliang");
    }
    page.onclick = function(e){
        var spanyema = e.target.innerHTML;
        xhr.open("get","../php/list.php?yema="+spanyema+"&num="+num);
        xhr.send(null);
    }
    //封装获取数据库数据并进行页面渲染的函数
    function request(idx) {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && status.indexOf(xhr.status) != -1) {                    
                var res = JSON.parse(xhr.responseText);
                var content = res[idx];
                console.log(content);
                goods.innerHTML = content.map(function(item) {
                    return `<dl data-id=${item.id}>
                            <dt><a href="javascript:;"><img src="${item.imgurl}" alt="" /></a></dt>
                                <dd class="clearfix">
                                <a href="javascript:;" target="_blank" > 
                        <ul> 
                            <li class="r2">${item.name}</li> 
                            <li class="r1">
                            <i class="price">￥${item.price}</i>
                            <del class="del_price">￥${item.del_price}</del>
                            <span>已售${item.xiaoliang}</span>
                            </li> 
                        </ul> 
                    </a>               
                </dd>
            </dl>`;              
            }).join('');
                page.innerHTML = "";
                var spanNum = Math.ceil(res.len/res.num);
                for(var i=1;i<=spanNum;i++){
                    var span = document.createElement("span");
                    span.innerHTML = i;
                    page.appendChild(span);
                }
                page.children[res.yema-1].classList.add("active");

            }
        }
        xhr.open("get", "../php/list.php?yema="+yema+"&num="+num);
        xhr.send(null);
    }
})

$(document).ready(function(){
    $user = $(".user");


$signout = $(".signout");
console.log($signout)

hasCookie();


function hasCookie(){
    var  uname = Cookie.getCookie("uname") || null;
    // var  user = document.querySelector("")
      // console.log(typeof uname);
      if(uname == null)
      {
        // console.log(1);
      }
      else{
        console.log(2);

        $user.html(
                `<span class="a1">欢迎您，${uname}</span>
                <a href="javascript:void(0)" class="a1 signout">退出登录</a>`
                 );
        $signout = $(".signout");
        $signout.on("click",function(){
        console.log(666);
        var d = new Date();
        d.setDate(d.getDate()-1);
            document.cookie = `uname=aa; expires=${d.toUTCString()}; path=/`;
        // Cookie.removeCookie("uname","/");
         // hasCookie();
        location.href="../index.html";
        })
      }
      // console.log($user)
    }



})