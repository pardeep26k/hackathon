<?php
# File :	db.php
# Description :file use to hand database and connetcion all db query related activity
# Input	: Request Parameter
# Output:NA
# Author : pardeep  
# Version : v1.0
# Date :26-9-2015


error_reporting(E_ERROR);
   class db
    {
        var $arr=array();
        var $fields=array();
	    function __construct($hostname='localhost',$username='root',$password='',$database='olx')
        {
            $this->hostname=$hostname;
            $this->username=$username;
            $this->password=$password;
            $this->database=$database;
            $this->conn=mysql_pconnect($hostname,$username,$password) or die(mysql_error());
            //if($this->conn){echo "congrwn";}else {echo "nooooooooooooo";}
            mysql_select_db($database) or die(mysql_error());
        }
		function selectRules()
		{
			$this->query="select * from rules";
			$this->result=mysql_query($this->query,$this->conn) or die(mysql_error().': '.$this->query);
			return $this->result;
		}
		function RegisterUser($firstName,$lastname,$email,$gender,$type,$LikesArray)
		{
			$UserID=$this->CheckUserExist($email);
			if(!$UserID['id']){
			$this->query="insert into  user (firstname,	lastname,email,gender,type) values ('".mysql_real_escape_string($firstName)."','".mysql_real_escape_string($lastname)."','".mysql_real_escape_string($email)."','".mysql_real_escape_string($gender)."','".mysql_real_escape_string($type)."')";
			$this->result=mysql_query($this->query,$this->conn) or die(mysql_error().': '.$this->query);
			$lastInsertId= mysql_insert_id();	
			if($lastInsertId){
			$this->DeletePreviousData($lastInsertId);
			$this->InsertUserLikes($LikesArray,$lastInsertId);
			}
			return $lastInsertId;
			}
			else 
			{
			$this->DeletePreviousData($UserID['id']);
			$this->InsertUserLikes($LikesArray,$UserID['id']);
			return $UserID['id'];die;
			}
		}
		
		function CheckUserExist($email)
		{
			$this->query="select id from user where email='$email'";
			$this->result=mysql_query($this->query,$this->conn) or die(mysql_error().': '.$this->query);
			return mysql_fetch_assoc($this->result);
		}
		function InsertUserLikes($LikesArray,$registerUserID)
		{
			if($LikesArray){
			foreach ($LikesArray['data'] as $value)
			{
				$this->query="insert into  userlikes (likename,	fb_id,fb_created_date,user_id) values ('".mysql_real_escape_string($value[name])."','".mysql_real_escape_string($value[id])."','".mysql_real_escape_string($value[created_time])."','".mysql_real_escape_string($registerUserID)."')";
				$this->result=mysql_query($this->query,$this->conn) or die(mysql_error().': '.$this->query);
			}
				}
			return true;
		}
		function GetUserDetailsHome($id)
		{
			$this->query="select * from user where id='$id'";
			$this->result=mysql_query($this->query,$this->conn) or die(mysql_error().': '.$this->query);
			return mysql_fetch_assoc($this->result);
		}
		
		function DeletePreviousData($id)
		{
			$this->query="Delete from userlikes where user_id='$id'";
			$this->result=mysql_query($this->query,$this->conn) or die(mysql_error().': '.$this->query);
		}
		
		function GetUserLikes($id)
		{
			$this->query="select * from userlikes where user_id='$id'";
			$this->result=mysql_query($this->query,$this->conn) or die(mysql_error().': '.$this->query);
			return $this->result;
		}
		
		function GetDataByCurl($keyword)
		{
		  $curl_handle=curl_init();
		  echo $url='http://olx.in/ajax/search/list/?q='.$keyword;
		  curl_setopt($curl_handle,CURLOPT_URL,$url);
		  curl_setopt($curl_handle,CURLOPT_CONNECTTIMEOUT,2);
		  curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,1);
		  $buffer = curl_exec($curl_handle);
		  curl_close($curl_handle);
		  if (empty($buffer)){
			  print "Nothing returned from url.<p>";
		  }
		  else{
			  print $buffer;
		  }
		
		}
		
	
	}