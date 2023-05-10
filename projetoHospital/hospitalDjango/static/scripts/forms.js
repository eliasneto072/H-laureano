$("#form-telefone").mask("(00) 90000-0000");

$(document).ready(function() {
    //This condition will check if form with id 'contact-form' is exist then only form reset code will execute.
    if($('#formulario').length>0){
        $('#formulario')[0].reset(); 
    }
});