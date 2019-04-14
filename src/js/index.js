$(document).ready(function(){

function request(res){
    ress = res.map(function(item){
                    return `<dl data-id=${item.id}>
                            <dt><a href="#"><img src="${item.imgurl}" alt="" /></a></dt>
                                <dd class="clearfix">
                                <a href="//www.s.cn/adidas-AW3890.html" target="_blank" title="adidas阿迪达斯男子板鞋透气休闲运动鞋AW3890"> 
                        <ul> 
                            <li class="r2">${item.name}</li> 
                            <li class="r1">
                            <i class="price">￥${item.price}</i>
                            <del class="del_price">￥${item.del_price}</del>
                            <i class="buy_btn">立即抢购</i>
                            </li> 
                        </ul> 
                    </a>               
                </dd>
            </dl>`;              
            }).join('');
    return ress;
}


$.ajax({
        type:'get',
        async:true,
        url:'./php/index.php',
        success:function(str){
            // console.log(str);
            var att = JSON.parse(str);
            var res = att.data1;
            console.log(att)
            var bb =  request(res);
            $('.xiajixinpingoods').html(bb);
        }
    })
function request(res){
    ress = res.map(function(item){
                    return `<dl data-id=${item.id}>
                            <dt><a href="#"><img src="${item.imgurl}" alt="" /></a></dt>
                                <dd class="clearfix">
                                <a href="//www.s.cn/adidas-AW3890.html" target="_blank" title="adidas男鞋篮球鞋2019新款TMAC MILLENNIUM麦迪比赛运动鞋G2774"> 
                        <ul> 
                            <li class="r2">${item.name}</li> 
                            <li class="r1">
                            <i class="price">￥${item.price}</i>
                            <del class="del_price">￥${item.del_price}</del>
                            <i class="buy_btn">立即抢购</i>
                            </li> 
                        </ul> 
                    </a>               
                </dd>
            </dl>`;              
            }).join('');
    return ress;
}


$.ajax({
        type:'get',
        async:true,
        url:'./php/index.php',
        success:function(str){
            // console.log(str);
            var att = JSON.parse(str);
            var res = att.data2;
            console.log(att)
            var bb =  request(res);
            $('.lanqiuxiegoods').html(bb);
        }
    })

function request(res){
    ress = res.map(function(item){
                    return `<dl data-id=${item.id}>
                            <dt><a href="#"><img src="${item.imgurl}" alt="" /></a></dt>
                                <dd class="clearfix">
                                <a href="//www.s.cn/adidas-AW3890.html" target="_blank" title="adidas阿迪达斯三叶草男装2019新款男运动休闲红色卫衣"> 
                        <ul> 
                            <li class="r2">${item.name}</li> 
                            <li class="r1">
                            <i class="price">￥${item.price}</i>
                            <del class="del_price">￥${item.del_price}</del>
                            <i class="buy_btn">立即抢购</i>
                            </li> 
                        </ul> 
                    </a>               
                </dd>
            </dl>`;              
            }).join('');
    return ress;
}


$.ajax({
        type:'get',
        async:true,
        url:'./php/index.php',
        success:function(str){
            // console.log(str);
            var att = JSON.parse(str);
            var res = att.data3;
            console.log(att)
            var bb =  request(res);
            $('.wygoods').html(bb);
        }
    })


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
        location.href="index.html";
        })
      }
      // console.log($user)
    }



})
