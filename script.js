var tel = document.getElementById("telefono")
var password = document.getElementById("pass")
var conf_password = document.getElementById("conf-pass")
var submit_form = document.getElementById("submit-button")


tel.addEventListener('keydown', function(e){
    if(e.key != "Backspace" && (tel.value.length === 3 || tel.value.length === 7))
        tel.value += "-";
})

submit_form.addEventListener('click', function(e){
    if(password.value !== conf_password.value){
        console.log("string not same");
        conf_password.style.border = "1px solid red";
        password.style.border = "1px solid red";
    }else
        console.log("string same");
        console.log(password.value);
})
