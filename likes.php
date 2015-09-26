<?php 
include('include/header.php');
include_once("include/db.php");
$db = new db();
$likesData=$db->GetUserLikes($_SESSION['userid']);

?>
 <!-- Title Bart Start -->
              <div class="panel-heading">
              <div class="title">
                <h2>Your Like Details</h2>
              </div>
              </div>
            <!-- Title Bart End -->
			 <div class="panel-body top-padding">
  <ul class="menu">
<?php 
while($row=mysql_fetch_array($likesData))
{?>

      <li class="lightblue active">
          <span class="menu-text">Page :- </span>
            <span class="menu-text"><?php echo $row['likename'];?> </span>
			</br>
			<span class="menu-text">Page Like Date :-<?php echo $row['likename'];?> </span>
            <span class="menu-text"><?php echo $row['fb_created_date'];?>  </span>
			   </li>
	
<?php 
}	
?>		
  </ul>
 </div>  
<?php
include('include/footer.php');
?>  