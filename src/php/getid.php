<?php
    // 1.接收传送过来的数量
    include 'connect.php';
    $id = $_GET["id"];

    $sql_id = "SELECT * FROM list_goods where id='".$id."'"; 
    $result_id = $conn->query($sql_id);
    $row_id=  mysqli_fetch_all($result_id);

    

    
    echo json_encode($row_id,JSON_UNESCAPED_UNICODE);



?>