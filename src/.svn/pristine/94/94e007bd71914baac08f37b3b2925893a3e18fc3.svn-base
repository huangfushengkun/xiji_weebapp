<?php
include("../inc/dbconn.php");
$user = $_GET['user'];
$pwd = $_GET['pwd'];
$sql = "insert into userinfo (name,password) values ('$user','$pwd')";
$result = $conn->query($sql);
// if($affect){
//     // echo "注册成功";
//     // $data =array("success"=>1);
//     $data["success"]=1;
// }else{
//     // echo "注册失败";
//     $data["success"]=0;
// }
if($result->num_rows>0){
    $data["success"]=1;
}else{
    $data["success"]=0;
}
echo json_encode($data);
