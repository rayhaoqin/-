$(document).ready(function(){

 // var ul =document.querySelector(".list ul");
 // $dl = ;


            // ul.onclick = function(e){
            //     console.log(e.target.parentNode.parentNode);
            // }
      console.log(7777)  

function aaa(){
    $(".goods").on("click","dl",function(e){
            console.log(666)
                dl=e.target.parentNode.parentNode.parentNode;
                console.log(dl.getAttribute("data-id"));
                
                location.href = "./xiangqing.html?id="+dl.getAttribute("data-id");
            })
    // setTimeout(aaa)
}
           
aaa()
 
   
    
});

