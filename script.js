var tel = document.getElementById("telefono")
var password = document.getElementsByClassName("pass")
var conf_password = document.getElementsByClassName("conf-pass")
var submit_form = document.getElementById("submit-button")

tel.addEventListener('keydown', function(e){
    if(e.key != "Backspace" && (tel.value.length === 3 || tel.value.length === 7))
        tel.value += "-";
})

function validatePassword(){
    if(password.value != conf_password.value){
        console.log("this worked");
        conf_password.value = "";
        password.value = "";
        conf_password.setCustomValidity("Passwords do not match");
    }else
        console.log("not work");
        console.log(password.value);
}

password.onchange = validatePassword;
conf_password.onchange = validatePassword;
submit_form.addEventListener('click', validatePassword);