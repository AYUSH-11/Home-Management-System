<?php
ob_start();
session_start();
include '../../db_connect.php';
$homeid=$_SESSION['homeid'];
$userid="";
$documentname=$_COOKIE['useridfordoc'];


$sql="Delete from dg_locker where home_id='$homeid' and user_id='$userid' and document_name='$documentname'";

mysqli_query($conn,$sql);

header("location: homedocument.php");
exit;
?>
