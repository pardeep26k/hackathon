var loginObj={
		init:function(){
		},
	facebookLoginCall:function(response){
				if(response.authResponse) {
						var access_token =   FB.getAuthResponse()['accessToken'];
						console.log(access_token);
						FB.api('/me',{fields: 'gender, first_name, last_name, email, likes'}, function(response) {
						var firstname=response.first_name;
						var lastname=response.last_name;
						var gender=response.gender;
						var email=response.email;
						var likes=response.likes
						$.post('ajax.php', { firstname:firstname,lastname:lastname,email:email,gender:gender,likes:likes,type:'fb'})
							.done(function( data ) {
								if(data)
								{
								window.location.reload();
								}else{
								alert('some Problem in System');
								}
							});
						$('div.overlaydive').hide();
						});
		}
		else {
		alert("Problem in Facebook Login");
		return false;
		}
		},
		linkedinlogin:function(firstname,lastname,email,image_url,gender){
						$('div.overlaydive').show();
						$.post( CONSTANT.SITE_URL+'/loginfb', { firstname:firstname,lastname:lastname,email:email,image_url:image_url,gender:gender,type:'linkedin'})
							.done(function( data ) {
								//ths.hideLoader();
								if(data)
								{
								window.location.reload();
								}else{
								alert('some Problem in System');
								}
							$('div.overlaydive').hide();
							});
						
			},
			googlelogin:function(firstname,lastname,email,gender,image_url){
						$('div.overlaydive').show();
						$.post( CONSTANT.SITE_URL+'/loginfb', { firstname:firstname,lastname:lastname,email:email,gender:gender,image_url:image_url,type:'google'})
							.done(function( data ) {
								//ths.hideLoader();
								if(data)
								{
								window.location.reload();
								}else{
								alert('some Problem in System');
								}
							$('div.overlaydive').hide();
							});
						
			},
}


	$(document).ready(function(){
	$('.facebook').click(function(){
			FB.login(loginObj.facebookLoginCall,{scope: 'email,user_likes'});
  });

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1013989715331547', // App ID
    channelUrl : '3f881e377491883da5384c8deb5f064b', // Channel File
    cookie     : true,  // enable cookies to allow the server to access 
                       // the session
	status     : false,
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.
  };
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
	});
