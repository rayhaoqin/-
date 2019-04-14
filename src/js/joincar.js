
$(document).ready(function(){

    // $btnbuy = $(".btn-buy");
    // console.log($btnbuy);
    // $btnfastbuy = $("btn-fastbuy");
    var uname = Cookie.getCookie("uname");
    var id = location.search.slice(1);
    id = id.split("=")[1];

    // console.log(id);
    // console.log($(".btn-fastbuy"))
    $(".btn-buy").on("click",function(){
        console.log(5555);
        $uname = Cookie.getCookie("uname") || null;
        if ($uname == null){
            alert("请登录");
        }else{
                $.get("../php/car.php?uname=" + uname + "&gid=" + id+"&ggg="+2,function(data){
                    console.log(data);
                })
                

             var res = Cookie.getCookie("uname");
                var str = '';
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
                console.log(xr);
                str = `<ul class="clearfix" style="z-index:1040;width:300px;height:50px;background:#fff;" data-id=${xr.id}>
                
                <li class=".rli2"><img src="${xr.imgurl}" width=50 height=50; alt="" /><span style="font-size:10px;">${xr.name}</span></li>
                <li class=".rli3">${xr.price}</li>
                <li class=".rli4 delete">删除</li>
                
                <li class=".rli6">去结算</li></ul>`
                $(".logo_rb").append(str);

                $(".delete").on("click", function () {
                    var $ful = $(this).parent();
                    console.log($ful);
                    var dataid = $ful.data("id");
                    
                    $.get("../php/car.php?uname=" + res + "&gid=" + dataid, function (data) {
                        
                    });
                })
                countP += Number(xr.price*data[idx].qty);
                console.log(countP);
                }, 'json');
            

        })
$(".zongji").append(countP);
    }, 'json');
}
            })
        })


    



    $(document).ready(function(){

 // var ul =document.querySelector(".list ul");
 $ul = $("ul");
           $ul.on("click",function(e){
                li=e.target.parentNode.parentNode;
                console.log(li.getAttribute("data-id"));

                location.href = "./goods.html?id="+li.getAttribute("data-id");
            })  
});
