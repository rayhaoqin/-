"use strict";function draw(a){var t=$("#canvas").width(),o=$("#canvas").height(),r=document.getElementById("canvas"),n=r.getContext("2d");r.width=t,r.height=o;for(var e="a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0".split(","),l=e.length,d=0;d<4;d++){var h=Math.floor(Math.random()*l),i=Math.random()-.5,m=e[h];a[d]=m.toLowerCase();var s=10+20*d,v=20+8*Math.random();n.font="bold 23px 微软雅黑",n.translate(s,v),n.rotate(i),n.fillStyle=randomColor(),n.fillText(m,0,0),n.rotate(-i),n.translate(-s,-v)}for(d=0;d<=5;d++)n.strokeStyle=randomColor(),n.beginPath(),n.moveTo(Math.random()*t,Math.random()*o),n.lineTo(Math.random()*t,Math.random()*o),n.stroke();for(d=0;d<=30;d++){n.strokeStyle=randomColor(),n.beginPath();s=Math.random()*t,v=Math.random()*o;n.moveTo(s,v),n.lineTo(s+1,v+1),n.stroke()}}function randomColor(){return"rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")"}$(function(){var o=[];draw(o),$("#canvas").on("click",function(){draw(o)}),$(".btn").on("click",function(){var a=$(".input-val").val().toLowerCase(),t=o.join("");""==a?(alert("请输入验证码！"),$("#btn").attr("disabled","disabled")):a==t?(alert("提交成功！"),$("#btn").attr("disabled","true")):(alert("验证码错误！请重新输入！"),$(".input-val").val(""))})});