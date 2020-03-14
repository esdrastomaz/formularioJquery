function buscaDadosForm(){
    var txtNome = document.getElementById("nome").value;
    if(txtNome.length == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campo nome Vazio!',        
        });
    }
    else{
        Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'Campo nome preenchido!',        
        });
    }
        
    
}

$(document).ready(function(){
    $("#btnJquery").click(function(){
        alert('O nome digitdado em jQuery é: ' + $("#nome").val());

    });

    $("#btnMudarClass").click(function(){
        var classe = $("#idade").attr("class");
        if(classe.indexOf("bg-danger") > 0){
            $("#idade").removeClass("bg-danger");
            $("#idade").removeClass("text-white");
        }
        else{
            $("#idade").addClass('bg-danger text-white');
        }      
    });

    //exibir modal

    $("#imgEndereco").click(function(){
        $("#modalEndereco").modal();
    });

    //lançar no endereço os dados do modal

    $("#btnGravarModal").click(function(){
        var tipo = $("#cmbTipo").val();
        var nome = $("#txtLogradouro").val();
        var numero = $("#txtNumero").val();
        var endereco = tipo + ' ' + nome + ', ' + numero;
        
        $("#endereco").val(endereco);
        $("#modalEndereco").modal("toggle");
    });
    
});