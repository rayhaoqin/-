<?php
    include 'connect.php';
    $gid = isset($_GET["gid"])? $_GET["gid"] : "";

    // 查询
    // $sql= "SELECT * FROM goods where id between 2 and 5";
    // $sql2= "SELECT * FROM goods where id = 1";
    // $sql3= "SELECT * FROM goods where rank between 1 and 10";
    // $sql4= "SELECT * FROM goods where id between 16 and 20";
    // $sql5= "SELECT * FROM goods where id between 21 and 24";
    $sql6= "SELECT * FROM list_goods where id ='".$gid."'";

    // $res = $conn->query($sql);
    // $res2 = $conn->query($sql2);
    // $res3 = $conn->query($sql3);
    // $res4 = $conn->query($sql4);
    // $res5 = $conn->query($sql5);
    $res6 = $conn->query($sql6);

    // $data1 = $res->fetch_all(MYSQLI_ASSOC);
    // $data2 = $res2->fetch_all(MYSQLI_ASSOC);
    // $data3 = $res3->fetch_all(MYSQLI_ASSOC);
    // $data4 = $res4->fetch_all(MYSQLI_ASSOC);
    // $data5 = $res5->fetch_all(MYSQLI_ASSOC);
    $data6 = $res6->fetch_all(MYSQLI_ASSOC);
    // $data = array(
        // "data1" => $data1,
        // "data2" => $data2,
        // "data3" => $data3,
        // "data4" => $data4,
        // "data5" => $data5,
        // "data6" => $data6
        
    // );
    echo json_encode($data6,JSON_UNESCAPED_UNICODE);
    // $res->close();
    // $conn->close();
   

?>