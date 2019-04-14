
<?php
    include 'connect.php';
    // 查询商品
    $sql= "SELECT * FROM goods ";
    $sql2= "SELECT * FROM lanqiuxie ";
    $sql3= "SELECT * FROM weiyi ";
    // $sql3= "SELECT * FROM goods where rank between 1 and 10";
    // $sql4= "SELECT * FROM goods where id between 16 and 20";
    // $sql5= "SELECT * FROM goods where id between 21 and 24";
    $res = $conn->query($sql);
    $res2 = $conn->query($sql2);
    $res3 = $conn->query($sql3);
    // $res4 = $conn->query($sql4);
    // $res5 = $conn->query($sql5);
    
    $data1 = $res->fetch_all(MYSQLI_ASSOC);
    $data2 = $res2->fetch_all(MYSQLI_ASSOC);
    $data3 = $res3->fetch_all(MYSQLI_ASSOC);
    // $data4 = $res4->fetch_all(MYSQLI_ASSOC);
    // $data5 = $res5->fetch_all(MYSQLI_ASSOC);
    $data = array(
        "data1" => $data1,
        "data2" => $data2,
        "data3" => $data3,
        // "data4" => $data4,
        // "data5" => $data5
    );
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    $res->close();
    $conn->close();
   

?>
