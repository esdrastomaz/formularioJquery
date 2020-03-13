function buscaDadosForm(){
    var txtNome = document.getElementById("nome").value;
    alert('O nome digitado é: ' + txtNome);
}

$(document).ready(function(){
    $("#btnJquery").click(function(){
        alert('O nome digitdado em jQuery é: ' + $("#nome").val());

    });
});