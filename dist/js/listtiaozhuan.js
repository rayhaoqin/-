"use strict";$(document).ready(function(){console.log(7777),$(".goods").on("click","dl",function(t){console.log(666),dl=t.target.parentNode.parentNode.parentNode,console.log(dl.getAttribute("data-id")),location.href="./xiangqing.html?id="+dl.getAttribute("data-id")})});