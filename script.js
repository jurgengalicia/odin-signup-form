var tel = document.getElementById("tel")
var password = document.getElementsByClassName("pass")
var conf_password = document.getElementsByClassName("conf-pass")

tel.addEventListener('keydown', function(e){
    if(e.key != "Backspace" && (tel.value.length === 3 || tel.value.length === 7))
        tel.value += "-";
})

function validatePassword(){
    if(password.value != conf_password.value)
        conf_password.setCustomValidity("Passwords do not match");
    else
        conf_password.setCustomValidity("");
}

password.onchange = validatePassword;
conf_password.onchange = validatePassword;