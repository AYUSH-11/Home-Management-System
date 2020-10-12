<?php
class dbconnect{

	function db($table_name){
		$servername = "localhost";
		$username = "root";
		$password = "";
		$db=$table_name;

		$conn=new mysqli($servername,$username,$password,$db);
		if($conn->connect_error)
		{
			echo "Connection failed";
		}
		else{
			return $conn;
		}
	}

}



?>