$(document).ready(function () {
    
    //LLAMAMOS AL FORMULARIO DE RESERVAS
    $.getScript("scripts/formularioreserva.js", function () {
        formularioreserva();
    });
    $.getScript("scripts/listadoreservas.js", function () {
        listadoreservas();
    });

});