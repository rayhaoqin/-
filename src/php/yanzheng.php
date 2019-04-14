<?php
    include 'connect.php';
    //1.拿到前端传输过来的uname值，
    $uname = isset($_GET["uname"])? $_GET["uname"] : "";
    //2.在数据库进行查找，若找到一样的值，返回前端false。若没有返回true
    //(1)执行sql语句(查询=>查询结果集)
    $res = $conn->query("select * from zhuce where uname='".$uname."'");
    //(2)判断查询结果集是否有值
    //  * num_rows ：结果集中的数量，用于判断是否查询到结果
    $num = $res->num_rows;
    if($num == 0){
        echo true;
    }else{
        echo false;
    }
    $res->close();
    $conn->close();
?>