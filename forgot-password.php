<!DOCTYPE html>
<html lang="en">
 
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Concept - Bootstrap 4 Admin Dashboard Template</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">
    <link href="assets/vendor/fonts/circular-std/style.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/libs/css/style.css">
    <link rel="stylesheet" href="assets/vendor/fonts/fontawesome/css/fontawesome-all.css">
    <style>
    html,
    body {
        height: 100%;
    }

    body {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
    }
    </style>
</head>

<body>
    <!-- ============================================================== -->
    <!-- forgot password  -->
    <!-- ============================================================== -->
    <div class="splash-container">
        <div class="card">
            <div class="card-header text-center"><img class="logo-img" src="assets/images/logo.png" alt="logo"><span class="splash-description">Please enter your information.</span></div>
            <div class="card-body">
                <form method="POST">
                    <p>Don't worry, we'll send you an email to reset your password.</p>
                     <!--<div class="form-group">
                        <input class="form-control form-control-lg" type="text" name="homeid" required="" placeholder="homeid" autocomplete="off">
                    </div>-->
                    <div class="form-group">
                        <input class="form-control form-control-lg" type="email" name="email" required="" placeholder="Your Email" autocomplete="off"><span id="emailspan" style="color: red;"></span>
                    </div>
                    <div class="form-group pt-1">
                    	<input class="btn btn-block btn-primary btn-xl" type="submit" name="submitbtn" value="Reset Password">  
                    </div>
                </form>
            </div>
            <div class="card-footer text-center">
                <span>Don't have an account? <a href="sign-up.php">Sign Up</a></span>
            </div>
        </div>
    </div>

    <?php
    	if(isset($_POST['submitbtn']))
    	{

    		include 'db_connect.php';
			$conn=dbconnect::db('iwt_project');

			$sql="select email from authentication";
			$result=$conn->query($sql);
			$temp=1;
			if($result->num_rows>0){
				while ($row=$result->fetch_assoc()) {
					

					if($row['email']==$_POST['email']){
						
						$temp=0;
						header("location: login.php");
    					exit;
					}
				}
				
				if($temp==1)
				{
					echo "<script type='text/javascript'>
					document.getElementById('emailspan').innerHTML='Please Enter Proper id';
					</script>";
				}
			}
    	}
		?>
    <!-- ============================================================== -->
    <!-- end forgot password  -->
    <!-- ============================================================== -->
    <!-- Optional JavaScript -->
    <script src="assets/vendor/jquery/jquery-3.3.1.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
</body>

 
</html>
