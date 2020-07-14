document.getElementById("btnSubmit").onclick = function() {
    var radios = document.getElementsByName("band-rock");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            window.alert("Escolheu: " + radios[i].value);
        }
    }
};