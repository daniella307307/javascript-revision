var username = document.myForm.username.value.trim(); 
var email = document.myForm.email.value.trim(); 
let atPosition = email.indexOf("@");
let dotPosition = email.lastIndexOf("."); 
var password = document.myForm.password.value;
var comFirmPassword = document.myForm.comFirmPassword.value;

if (username.length < 1 || atPosition < 1 || dotPosition < atPosition + 1 || password !== comFirmPassword) {
    alert("Username, password, or email is not valid");
} else {
    document.write("You are a valid user");
}
