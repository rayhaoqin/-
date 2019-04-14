<?php
    include 'connect.php';
    // $res = $conn ->query("select * from shangping order by xiaoliang");
    // fetch_all(MYSQLI_ASSOC);
    $yema = $_GET["yema"]; 
    $num = $_GET["num"];

    $sql_xiaoliang = "SELECT * FROM list_goods order by xiaoliang desc ";
    $sql_price = "SELECT * FROM list_goods order by price";
    $result_xiaoliang = $conn->query($sql_xiaoliang);
    $result_price = $conn->query($sql_price);
    // var_dump($result2,$result1);
    // 按xiaoliang排序取出来的数据
    if($result_xiaoliang->num_rows>0 && $result_price->num_rows>0){
        // 获取商品表的所有数据
        $row_xiaoliang = $result_xiaoliang->fetch_all(MYSQLI_ASSOC);
        $row_price = $result_price->fetch_all(MYSQLI_ASSOC);
        $caijian_xiaoliang = array_slice($row_xiaoliang,($yema-1)*$num,$num);
        $caijian_price = array_slice($row_price,($yema-1)*$num,$num);
        $data = array(
            "row_xiaoliang" => $caijian_xiaoliang,
            "row_price" => $caijian_price,
            "len" => count($row_xiaoliang),
            "yema" => $yema,
            "num" => $num
        );
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    else {
        echo "0 个结果";
    }
?>

