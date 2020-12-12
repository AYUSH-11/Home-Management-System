<?php
	//include '../../db_connect.php';

	include '../login_check1.php';

	//$id=$_GET['delete'];
	$selected_issue_date=$_GET['delete'];
	$sql="delete from bill_management where(home_id='".$_SESSION['homeid']."' and issue_date='".$selected_issue_date."')";

    $result=mysqli_query($conn,$sql);

    echo "<script type='text/javascript'>
            alert('Deleted Successfully!!');
        </script>";

	//$a="delete from product_tbl where p_id=".$id;
	//$r=mysql_query($a);
	if($result==true)
	{
		echo '<META HTTP-EQUIV="Refresh" Content="0; URL=electricity.php">';
	}
  ?>

 <!--  <td><a onclick=\'javascript: return confirm('Are You Sure to Delete This Bill ??');\' href='deleteForm.php?id=$issue_date'>Delete</a></td> -->