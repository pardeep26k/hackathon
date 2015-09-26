<?php 

# File :	login.php
# Description :file use to handle login singup html
# Input	: Request Parameter
# Output:NA
# Author : pardeep  
# Version : v1.0
# Date :26-9-2015


error_reporting(0);
session_start();
if($_SESSION['userid'])
{
ob_start();
header("Location:index.php");
}
?>
<!doctype html>
<html class="fuelux" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>OLX - Social Apps</title>

    <!-- Bootstrap -->
  <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css">
  
  <!-- FontIcons -->
  <link rel="stylesheet" type="text/css" href="assets/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="assets/weather-icons/weather-icons.min.css">

  <link rel='stylesheet' type='text/css' href='assets/datatables/jquery.dataTables.css' />
  <link rel='stylesheet' type='text/css' href='assets/icheck/flat/_all.css' />
  <link rel='stylesheet' type='text/css' href='assets/fuelux/style.css' />


  
  <!-- Fontello -->

  
</head>

<body class="login-page simple">

<section class="content login-page">

  <div class="content-liquid">
    <div class="container">
	<form method="post" action="" class="basic-form" id="loginform">
        <div class="login-page-container">

          <div class="boxed animated flipInY">
            <div class="inner">

              <div class="login-title text-center">
                <h4>Sign up</h4>
              </div>

              <input type="button" class="btn btn-lg btn-success facebook" value="Sign Up with Facebook" name="submit" id="submit" />

            </div>
          </div>

        </div>
      </form>
    </div>
  </div>

</section>

<!-- Javascript -->
<script src="assets/jquery/jquery.min.js"></script>
<script src="js/login.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/flippy/jquery.flippy.min.js"></script>
</body>
</html>