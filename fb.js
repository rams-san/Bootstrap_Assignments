function validation(){
   var regex =/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
   var regex1 =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
   var regex3 =/^\(?\d{3}\)?-?\s*-?\d{4}$/;

var mobileNumberOrEmail = document.getElementById('mobileNumberOrEmail').value;
var password = document.getElementById('pwd').value;
if((regex.test(mobileNumberOrEmail))&&(regex1.test(password)))
{
console.log(mobileNumberOrEmail);
console.log(password);
return true;
}
else{
    alert("Enter vallid credentials");
    return false;
}
}

