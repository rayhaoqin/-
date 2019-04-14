document.addEventListener("DOMContentLoaded",function(){
            var status = [200,304];
            var uname = document.querySelector("#uname");
            var upwd = document.querySelector("#upwd");
            var upwds = document.querySelector("#upwds");
            var btn = document.querySelector("#btn");
            var show = document.querySelector("#show");
            var ty = document.querySelector("#ty");
            var unameStatus = false;
            var upwdStatus = false;
            var upwdsStatus = false;
            var tyStatus = false;

            uname.onblur =function(){
                var _uname = uname.value;
                console.log(uname.value);
                     
                if(/^[\D\S][\S]{5,11}$/.test(_uname)){
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange =function(){
                        if(xhr.readyState == 4 && status.indexOf(xhr.status)!= -1 ){
                            var res = xhr.responseText;
                            console.log(res)   
                            if(res){
                                show.innerHTML = "用户名可用";
                                show.style.color = "#58bc58";
                                unameStatus = true;
                            }else{
                                show.innerHTML = "用户名重复";
                                show.style.color = "red";
                                unameStatus = false;
                            }
                        }           
                    }       
                    xhr.open("get","../php/yanzheng.php?uname="+_uname);
                    xhr.send(null);         
                }else{
                    uname.nextElementSibling.innerHTML = "不能为空，限制6-12位";
                    uname.nextElementSibling.style.color= "red";
                    uname.nextElementSibling.style.fontSize= 14 +'px';
                    unameStatus = false;
                }
                panduan();
            }
            upwd.onblur = function(){
                //小写字母开头，数字字母下划线6-12位
                if(/^[a-z]\w{5,11}$/.test(upwd.value)){
                    upwd.nextElementSibling.innerHTML = "密码格式正确";
                    upwd.nextElementSibling.style.color= "#58bc58";
                    upwdStatus = true;
                }else{
                    upwd.nextElementSibling.innerHTML = "密码应以字母开头，6-12位";
                    upwd.nextElementSibling.style.color= "red";
                    upwd.nextElementSibling.style.fontSize= 14 +'px';
                    upwdStatus = false;
                }
                panduan();
            }
            upwds.onblur = function(){
                if(upwds.value == upwd.value){
                    upwds.nextElementSibling.innerHTML = "密码一致";
                    upwds.nextElementSibling.style.color= "#58bc58";
                    upwdsStatus = true;
                }else{
                    upwds.nextElementSibling.innerHTML = "2次密码必须输入一致";
                    upwds.nextElementSibling.style.color= "red";
                    upwds.nextElementSibling.style.fontSize= 14 +'px';
                    upwdsStatus = false;
                }
                panduan();
            }
            // if($("#ty").attr("checked") == "checked"){
            //     tyStatus = true;
            // }else{
            //     tyStatus = false;
            //     }
            
            // ty.onblur = function(){

            //     if(ty.checked == true){
            //         tyStatus = true;
            //     }else if(ty.checked == false){
                    
            //         tyStatus = false;
            //     }
            //     panduan();
            // }
            
            function panduan(){
                // btn.disabled = false;
                if(unameStatus && upwdStatus && upwdsStatus){
                    btn.disabled = false;
                }else{
                    btn.disabled = true;
                }
            }
            btn.onclick = function(e){
                e.preventDefault();
                var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function(){
                        if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
                            console.log(xhr.responseText);
                                 
                            if(xhr.responseText=="注册成功"){
                                location.href = "Login.html";
                            }
                        }
                    }
                    xhr.open("post","../php/Register.php");
                    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
                    xhr.send("uname="+uname.value+"&upwd="+upwd.value);
            }

        })