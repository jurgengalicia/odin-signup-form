var tel = document.getElementById("tel-input")

console.log(tel.id);

tel.addEventListener('keydown', function(e){
    if(e.key != "Backspace" && (tel.value.length === 3 || tel.value.length === 7)){
        tel.value += "-";
    }
})