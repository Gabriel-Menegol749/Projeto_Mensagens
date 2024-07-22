const botaoLogOFF = document.getElementById("logOFF");

botaoLogOFF.addEventListener('click', function(e){
    e.preventDefault();
    window.open("/Login")
})