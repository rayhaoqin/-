document.addEventListener("DOMContentLoaded",function(){
            var status = [200,304];
            var uname = document.querySelector("#uname");
            var upwd = document.querySelector("#upwd");
            var dlbtn = document.querySelector("#dlbtn");
           
            uname.onblur = function(){
                var _uname = uname.value;
                if(_uname==""){
                        alert('用户名不能为空');
                        
                    }
            }
            upwd.onblur = function(){
                var _upwd = upwd.value;
                if(_upwd==""){
                        alert('用户名不能为空');
                        
                    }
            }
            dlbtn.onclick = function(e){
                var _uname = uname.value;
                console.log(_uname);
                
                var _upwd = upwd.value;
                if(_upwd=="" && _upwd == ""){
                        alert('用户名和密码不能为空');
                        
                    }
                // if(_uname==""){
                //         alert('用户名不能为空');
                        
                //     }
                // if(_upwd==""){
                //         alert('密码不能为空');
                        
                //     }
                e.preventDefault();
                
                var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function(){
                        if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
                            if(xhr.responseText=="登录成功"){
                        var d = new Date();
                         d.setDate(d.getDate()+7);
                                document.cookie = "uname="+_uname+"; expires="+d.toUTCString()+"; path =/";
                                document.cookie = "upwd="+_upwd+"; expires="+d.toUTCString()+"; path =/";
                                if(_uname !== "" && _upwd !== ""){
                            // alert('用户名不能为空');
                         location.href = "../index.html";
                    }
                               
                            }else{
                                alert("该用户有误");
                            }
                        }
                    }
                    xhr.open("post","../php/Login.php");
                    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
                    xhr.send("uname="+uname.value+"&upwd="+upwd.value);
            }   

        })
