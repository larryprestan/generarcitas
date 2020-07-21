function formularioreserva(){

    let formularioreserva = `
        <!--FORMULARIO DE CITAS-->
        <div id="formulariocontainer" class="container mt-4">
            <h5>FORMATO DE RESERVA</h5>
            <form id="formreserva">
                <label id="labelcedula">CEDULA:</label>
                <div class="form-group">
                    <input type="text" class="form-control" name="cedula" id="cedula" autocomplete="off">
                </div>
                <label id="labelnombre">NOMBRE:</label>
                <div class="form-group">
                    <input type="text" class="form-control" name="nombre" id="nombre" autocomplete="off">
                </div>
                <label id="labelfecha">FECHA:</label>
                <div class="form-group">
                    <input type="date" class="form-control" name="fecha" id="fecha" autocomplete="off">
                </div>
                <label id="labelhora">HORA:</label>
                <div class="form-group">
                    <input type="time" class="form-control" name="hora" id="hora" autocomplete="off">
                </div>
                <label id="labelnota">NOTAS:</label>
                <div class="form-group">
                    <textarea class="form-control" name="notas" id="notas" rows="3"></textarea>
                </div>
                <button id="btnreservar" class="btn btn-block">RESERVAR</button>
            </form>

        </div>`;
    $('#rootcontainer').append(formularioreserva);

    //BOTON RESERVAR
    $('#btnreservar').click(function (e) { 

        let datos = $('#formreserva').serialize();
        $.ajax({
            type: "POST",
            url: "php/agregarcita.php",
            data: datos,
            success: function (res) {
                if(res==1){
                    mensajecitaok();
                    $.getScript("scripts/listadoreservas.js", function () {
                        listado();
                    });
                }else{
                    mensajecitaerror();
                }
            }
        });
        $('#formreserva')[0].reset();
        e.preventDefault();
    });

}



function mensajecitaok(){
    let alerta=`
    <div class="alert alert-success" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    <h4 class="alert-heading">FELICIDADES!!</h4>
    <h5>LA CITA FUE GENERADA CORRECTAMENTE</h5>
    </div>
    `;
    $('#alert').append(alerta);
}

function mensajecitaerror(){
    let alerta=`
    <div class="alert alert-danger" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="alert-heading">OPS!!</h4>
        <h5>LA CITA NO SE PUDO GENERAR POR FAVOR VERIFIQUE!</h5>
    </div>`;
    $('#alert').append(alerta);
}