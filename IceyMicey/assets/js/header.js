
$(document).ready(function(){
	$("#footer").load("footer.html");
    $( "#header" ).load( "header.html" ,function(){
	  	var email=sessionStorage.getItem("email");
		var replace = $('#replace');
		var edit = $('#edit');
		if(email != null){
			console.log('loggedin');
			replace.html('<a href="signup-login.html" onclick="logout()" >Log Out');
			edit.html('<a href="edit-profile.html" ><i class="fa fa-cog"></i></a>');	
		}
		else if(email == null){
			console.log('signup-login-btn');
			replace.html('<a href="signup-login.html">Log in');
												       					    
		}
    });
});
function  logout(){
console.log("log out clicked");
sessionStorage.clear();
window.location.replace('/Myapp/IceyMicey/index.html');
}