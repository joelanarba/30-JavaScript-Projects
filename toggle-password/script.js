let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "images/eye-open.png";
        // eyeicon.className = "fa fa-eye-slash";
    }else{
        password.type = "password";
        eyeicon.src = "images/eye-close.png";
        // eyeicon.className = "fa fa-eye";
    }
}