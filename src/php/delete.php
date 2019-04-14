<?php
    // 1.接收传送过来的数量
    include 'connect.php';
    $gid = $_GET["gid"];
    $uname = $_GET["uname"];
    var_dump($gid);

    
     $res = $conn->query("select * from car where gid='".$gid."' and uname='".$uname."'");
     $num = $res->num_rows;
    // $row_id=  mysqli_fetch_all($result_id);

if($num == 0){
        $conn->query("insert into car (gid,uname,qty) values ('".$gid."','".$uname."',1)");
    }
    



?>