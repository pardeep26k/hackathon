<?php

# File :	logout.php
# Description :file use to destroy session
# Input	: Request Parameter
# Output:NA
# Author : pardeep  
# Version : v1.0
# Date :26-9-2015


session_start();
@session_destroy();
ob_start();
header("Location: index.php");
exit;


?>