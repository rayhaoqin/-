<?php
    // 1.接收传送过来的数量
    include 'connect.php';
    $gid = $_GET["gid"];
    $uname = $_GET["uname"];
    $qty = $_GET["qqty"];
    // $ggg = $_GET["ggg"];
    // var_dump($gid);

    
     $res = $conn->query("select * from car where gid='".$gid."' and uname='".$uname."'");
     
     $num = $res->num_rows;
    // $row_id=  mysqli_fetch_all($result_id);

if($num == 0){
        $conn->query("insert into car (gid,uname,qty) values ('".$gid."','".$uname."',1)");
    }
    else if($num != 0){
        $conn->query("update car set qty='".$qty."' where gid='".$gid."' and uname='".$uname."'");
    }
    



?>