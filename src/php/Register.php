<?php
    include 'connect.php';
    //1.拿到前端传输过来的email、upwd
    $uname = isset($_POST["uname"])? $_POST["uname"] : "";
    $upwd = isset($_POST["upwd"])? $_POST["upwd"] : "";
    
    // var_dump($uname);

    //2.插入数据库
    //(1)执行sql语句
    $res = $conn->query("insert into zhuce (uname,upwd) values ('".$uname."','".$upwd."')");
    
    if($res){
        echo "注册成功";
    }
    $conn->close();




?>