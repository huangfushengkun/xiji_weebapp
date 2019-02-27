<?php
include("../inc/dbconn.php");
$sql = "select * from evaluate";
$result=$mysqli->query($sql);
// print_r()
//使用while循环抽取每一条数据
while($row=mysqli_fetch_assoc($result)){
    $data[]=$row;//相当于js中的 arr.push(row);这是一个索引值数组
}
