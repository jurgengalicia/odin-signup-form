var tel = document.getElementById("tel-input")

tel.addEventListener('keydown', function(e){
    if(e.key != "Backspace" && (tel.value.length === 3 || tel.value.length === 7))
        tel.value += "-";
    
})