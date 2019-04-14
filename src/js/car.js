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
    var res = Cookie.getCookie("uname");
    var str = '';
    // console.log(res);
    $.get("../php/buycar.php", {"uname": res}, function (data) {
        console.log(data);
        var countP = 0;
        $.each(data, function (idx, item) {
            console.log(item.uname);
            var idd = item.gid;

            // var qq = data
            console.log(idd);
            $.get("../php/goods.php", {"gid": idd}, function (data1) {
                var xr = data1[0];
                console.log(data1);
                str = `<ul class="clearfix" data-id=${xr.id}>
                <li class=".rli1"> <input type="checkbox" class="one"> </li>
                <li class=".rli2"><img src="${xr.imgurl}" width=100 height=100; alt="" /><span>${xr.name}</span></li>
                <li class=".rli3">${xr.price}</li>
                <li class=".rli4"><input data-id=${xr.id} class="jian" type="button" value="-" style="width:20px;height:20px;"> <span>${item.qty}</span> <input class="jia" type="button" data-id=${xr.id} value="+" style="width:20px;height:20px;"></li>
                <li class=".rli5">${xr.price*item.qty}</li>
                <li class=".rli6 delete">删除</li></ul>`
                $(".realcar").append(str);


                $(".allCheck").on("click",function(){
                    $(".one").prop("checked",this.checked);

                })

                // 增加商品
                $(".jia").off("click").on("click", function () {
                    var $gid = $(this).data("id");
                    console.log($gid);
                    var a = $(this).prev().html();
                    a++;
                    
                    $(this).prev().html(a);
                    var $qqty = $(this).prev().html();
                    var $danjia = $(this).parent().prev().html();
                    console.log($danjia);
                    var zongjia = ($qqty*$danjia).toFixed(2);

                    // console.log($qty,$danjia);
                    
                    // setTimeout(function(){
                    //      console.log(7777);
                    //     $(this).parent().parent().find(".rli5").html(zongjia);
                    // },1000)
                    // var bb = $(this).parent().parent().find(".rli5").html(zongjia);
                    
                    

                    $.get("../php/jia.php?uname=" + res + "&gid=" + idd + "&qqty=" + $qqty, function (data) {
                       location.href = ("car.html");

                    });
                })
               
                   
                 // 减少商品
                $(".jian").off("click").on("click", function () {
                    var $gid = $(this).data("id");
                    console.log($gid);
                    var a = $(this).next().html();
                    a--;
                    if(a<=0){
                        a=1;
                    }
                    $(this).next().html(a);
                    var $qqty = $(this).next().html();
                    var $danjia = $(this).offsetParent().find(".rli3").html();
                    var zongjia = ($qqty*$danjia).toFixed(2);
                    
                    // console.log($qty,$danjia);
                    $(this).offsetParent().find(".rli5").html(zongjia);
                    

                    $.get("../php/jia.php?uname=" + res + "&gid=" + idd + "&qqty=" + $qqty, function (data) {
                       // $(".rli5").html(zongjia) = xr.price*item.qty;
                    });
                    location.href = ("car.html");
                })

                $(".delete").on("click", function () {
                   var $ful = $(this).parent();
                    console.log($ful);
                    var dataid = $ful.data("id");
                    
                    $.get("../php/car.php?uname=" + res + "&gid=" + dataid, function (data) {
                        location.href = "car.html";
                    });
                })
                countP += xr.price*item.qty;
                $(".total").text(countP);
                console.log(countP);
                }, 'json');
            

        })

    }, 'json');
})



