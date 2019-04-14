// document.addEventListener("DOMContentLoaded", function(){
//         var actbtn = document.querySelector(".actbtn");




// })



$(document).ready(function(){

    // $btnbuy = $(".btn-buy");
    // console.log($btnbuy);
    // $btnfastbuy = $("btn-fastbuy");
    var uname = Cookie.getCookie("uname");
    var id = location.search.slice(1);
    id = id.split("=")[1];

    console.log(id);
    console.log($(".btn-fastbuy"))
    $(".btn-fastbuy").on("click",function(){
        // console.log(5555);
        $uname = Cookie.getCookie("uname") || null;
        if ($uname == null){
            alert("请登录");
        }else{
            
            $.get("../php/car.php?uname=" + uname + "&gid=" + id,function(data){
                location.href = ("../html/car.html");
                    // console.log(555555555)
            })
        }


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










})