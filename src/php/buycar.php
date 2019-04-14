<?php
    include 'connect.php';
    $uname = $_GET["uname"];
    // $user = "aaa";
    // echo $user;
    $res = $conn->query("select * from car");
    $data = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($data);
    $j=0;
    for($i=0;$i<count($data);$i++){
        if($data[$i]["uname"] == $uname){
            $arr[$j]=$data[$i];
            $j++;
        }
    }
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);


?>