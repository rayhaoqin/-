document.addEventListener("DOMContentLoaded", function(){
        var magnify = document.querySelector('.magnify-box');
        var minBox = document.querySelector('.min-img');
        var minImg = document.querySelector('.min-img img');
        var mask = document.querySelector('.mask');

        var maxBox = document.querySelector('.max-img');
        var maxImg = document.querySelector('.max-img img');

        var imgList = document.querySelectorAll('.img-list li');
        var maskHeight = 0; // 遮罩的高度
        var maskWidth = 0; // 遮罩的宽度
        var minBoxWidth = 0; // 小图片盒子的宽度
        var minBoxHeight = 0; // 小盒子图片的高度
        var maxImgWidth = 0; // 大图片的宽度
        var maxImgHeight = 0; // 大图片的高度
        var maxBoxWidth = 0; // 大图片盒子的宽度
        var maxBoxHeight = 0; // 大图片盒子的高度

        minBox.onmouseenter = function(){
            mask.style.display = 'block';
            maxBox.style.display = 'block';
            maskHeight = mask.offsetHeight;
            maskWidth = mask.offsetWidth;
            minBoxWidth = minBox.offsetWidth;
            minBoxHeight = minBox.offsetHeight;

            maxBoxHeight = maxBox.offsetHeight;
            maxBoxWidth = maxBox.offsetWidth;

            maxImgHeight = maxImg.offsetHeight
            maxImgWidth = maxImg.offsetWidth;
            console.log(maskWidth, maskHeight);
        }

        minBox.onmousemove = function(ev){
            var x = ev.clientX - magnify.offsetLeft - maskWidth/2;
            var y = ev.clientY - magnify.offsetTop - maskHeight/2;

            var maxX = minBoxWidth - maskWidth; 
            var maxY = minBoxHeight - maskHeight; 

            if(x>maxX) {
                x = maxX
            }
            if(y>maxY) {
                y = maxY;
            }
            if(x<=0) {
                x= 0;
            }
            if(y<=0) {
                y = 0;
            }
            var biliX = (maxImgWidth - maxBoxWidth)/ maxX;
            var biliY = (maxImgHeight - maxBoxHeight)/ maxY;

            mask.style.left = x + 'px';
            mask.style.top = y + 'px';

            maxImg.style.left = - x * biliX + 'px';
            maxImg.style.top = - y * biliY + 'px';

        }

        minBox.onmouseleave = function(){
            mask.style.display = 'none';
            maxBox.style.display = 'none';
        }

        for(var i = 0; i< imgList.length; i++){
            (function(i){
                imgList[i].onmouseover= function(){
                    minImg.src = `../img/min${i+1}.jpg`
                    maxImg.src = `../img/max${i+1}.jpg`
                }
            })(i)
        }

        



        $(document).ready(function(){
    


    //0.获取地址问好后面的数值
    var params = location.search.slice(1);
    console.log(params);
    var id = params.split("=")[1];//002
                // 1.发送请求给php
            var xhr = new XMLHttpRequest();
            var status = [200,304]
            xhr.onreadystatechange =  function(){
                if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
                    var res = JSON.parse(xhr.responseText);
                    var content = res.resArr;
                    console.log(res[0][2][3]);

                    //渲染页面
                    var bigImg = document.querySelector(".min-img img");
                    var fdjImg = document.querySelector(".max-img img");
                    var price1 = document.querySelector(".price1");
                    var minImg1 = document.querySelector(".imgli1 img");
                    var minImg2 = document.querySelector(".imgli2 img");
                    var minImg3 = document.querySelector(".imgli3 img");
                    var minImg4 = document.querySelector(".imgli4 img");
                    // var bigImg = document.querySelector(".min-img");
                    console.log(bigImg)
                    bigImg.setAttribute("src",res[0][3]);
                    fdjImg.setAttribute("src",res[0][3]);
                    price1.innerHTML = res[0][2];

                    // minImg1.setAttribute("src",res[0][3]);
                    // minImg2.setAttribute("src",res[0][3]);
                    // minImg3.setAttribute("src",res[0][3]);
                    // minImg4.setAttribute("src",res[0][3]);
                    // minImg.firstChild.firstChild setAttribute("src",res[0][3]);                               
                }
            }
            xhr.open("get","../php/getid.php?id="+id);
            xhr.send(null);
});
})

$(document).ready(function(){
    $user = $(".user");


$signout = $(".signout");
console.log($signout)

hasCookie();


function hasCookie(){
    var  uname = Cookie.getCookie("uname") || null;
    // var  user = document.querySelector("")
      // console.log(uname);
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




