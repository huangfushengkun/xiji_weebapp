<?php
    include("../inc/dbconn.php");
    $user = $_GET["tel"];
    $pwd = $_GET["pass"];

    $sql = "select * from users where user='$user'";

    $result = $conn->query($sql);
    if ($result->num_rows > 0){
        $row = mysqli_fetch_assoc($result);
         if($pwd==$row["password"]){
                // 登录成功
                $data["code"] = 0;
            }else{
                //密码错误 
                $data["code"] = 2;
            }
    }else{
        // 用户名不存在
        $data["code"] = 1;
    }
    echo json_encode($data);
?>