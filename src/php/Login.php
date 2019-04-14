<?php
    include 'connect.php';
    //1.拿到前端传输过来的uname、upwd
    $uname = isset($_POST["uname"])? $_POST["uname"] : "";
    $upwd = isset($_POST["upwd"])? $_POST["upwd"] : "";
    


    //2.查询数据库
    //(1)执行sql语句
    $res = $conn->query("select * from zhuce where uname='".$uname."' and upwd='".$upwd."'");
    $num = $res->num_rows;
    if($num != 0){
        echo "登录成功";
    };
    $res->close();
    $conn->close();



?>