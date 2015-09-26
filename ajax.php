<?php
require_once('include/db.php');
session_start();
$dbObj = new db();
$firstName=$_POST['firstname'];
$lastname=$_POST['lastname'];
$email=$_POST['email'];
$gender=$_POST['gender'];
$LikesArray=$_POST['likes'];
$type=$_POST['type'];

if($email)
	{
	$registerUserID=$dbObj->RegisterUser($firstName,$lastname,$email,$gender,$type,$LikesArray);
	if($registerUserID)
	{
	$_SESSION['userid']=$registerUserID;
	}
	echo $registerUserID;exit;
	}

?>