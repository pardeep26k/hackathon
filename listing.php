<?php 
# File :	listing.php
# Description :file use to show olx listing via curl
# Input	: Request Parameter
# Output:NA
# Author : pardeep  
# Version : v1.0
# Date :26-9-2015

include('include/header.php');
include_once("include/db.php");
$db = new db();
$likesData=$db->GetUserLikes($_SESSION['userid']);
while($row=mysql_fetch_array($likesData))
{
$KeywordSearch=$row['likename'];
echo $getData=$db->GetDataByCurl($KeywordSearch);
}
?>
 <!-- Title Bart Start -->
              <div class="panel-heading">
              <div class="title">
                <h2>Your Like Details</h2>
              </div>
              </div>
            <!-- Title Bart End -->
			 <div class="panel-body top-padding">
 </div>  
<?php
include('include/footer.php');
?>  