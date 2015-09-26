<?php
# File :	header.php
# Description :header file 
# Input	: Request Parameter
# Output:NA
# Author : pardeep  
# Version : v1.0
# Date :26-9-2015

session_start();
if (!$_SESSION['userid'] ) {
	header("Location: login.php");
	exit;
} 
else 
{
require_once('include/db.php');
$dbObj = new db();
$UserDetails=$dbObj->GetUserDetailsHome($_SESSION['userid']);
}
?>
<!doctype html>
<html class="fuelux" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>OLX - Social Admin </title>

    <!-- Bootstrap -->
  <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css">
  
  <!-- FontIcons -->
  <link rel="stylesheet" type="text/css" href="assets/font-awesome/css/font-awesome.min.css">

  <!-- Google Fonts -->
  <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
  
  <!--[if lt IE 9]>
  <script src="assets/bootstrap/js/html5shiv.js"></script>
  <script src="assets/bootstrap/js/respond.js"></script>
  <![endif]-->

  <!-- Assets -->
  <link rel='stylesheet' type='text/css' href='assets/jquery-ui/ui-lightness/jquery-ui-1.10.3.custom.css' />
  <link rel='stylesheet' type='text/css' href='assets/datepicker/css/bootstrap-datetimepicker.min.css' />
  
  <!-- Theme Styles -->
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/responsive.css">
  
  <!--[if IE 8]><script type="text/javascript" src="assets/flotcharts/excanvas.min.js"></script><![endif]-->

  <!-- FavIcon -->
  <link rel="shortcut icon" href="favicon.ico" type="image/png">
  <link rel="shortcut icon" type="image/png" href="favicon.ico" />
  
<!-- jQuery -->
<script type="text/javascript" src="assets/jquery/jquery.min.js"></script>


<!-- jQuery UI -->
<script type="text/javascript" src="assets/jquery-ui/jquery-ui.min.js"></script>

<!-- Menu State -->
<script type="text/javascript" src="js/menu.js"></script>

<!-- Bootstrap -->
<script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js"></script>


<!-- datepicker -->
<script type="text/javascript" src="assets/datepicker/js/moment.js"></script>
<script type="text/javascript" src="assets/datepicker/js/bootstrap-datetimepicker.min.js"></script>

</head>

<body>


<section class="content">

  <!-- Sidebar Start -->
  <div class="sidebar">

      <!-- Logo Start -->
    <a href="index.php">
      <div class="logo-container" id="step1">
        <h1>OLX</h1>
      </div>
    </a>
    <!-- Logo End -->


    <!-- Sidebar User Profile Start -->
    <div class="sidebar-profile">
      <div class="user-avatar">
        <img src="http://placehold.it/60x60" alt="Jennifer Zang" />
      </div>
      <div class="user-info">
        <a href=""><?php echo $UserDetails['firstname'].' '.$UserDetails['lastname'];?></a>
      </div>
    </div>

    <div class="responsive-menu">
      <a href="#"><i class="fa fa-bars"></i></a>
    </div>
    <!-- Sidebar User Profile End -->


    <!-- Menu Start -->
    <ul class="menu">
      <li class="parent lightred active">
        <a href="#">
          <span class="menu-icon"><i class="fontello-doc"></i></span>
          <span class="menu-text">Forms-Pages</span>
        </a>
        <ul class="child">
          <li>
            <a href="index.php">Profile</a>
          </li>
          	 <li>
            <a href="likes.php">Your Likes</a>
          </li> 
		  	 <li>
            <a href="listing.php">Olx Listing </a>
          </li> 
        </ul>
      </li>
    </ul>
    <!-- Menu End -->
  </div>
  <!-- Sidebar End -->

  <div class="content-liquid-full">
    <div class="container">

     <!-- Header Bar Start -->
      <div class="row header-bar" id="step2">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <ul class="right-icons" id="step3">
            <li>
              <a href="logout.php" class="lock"><i class="fa fa-lock"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Header Bar End -->