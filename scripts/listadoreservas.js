function listadoreservas(){
    
    let listadoreservas = `
    <!--LISTADO DE CITAS-->
    <div id="listadocontainer" class="container mt-4">
        <div class="row">
            <div class="col">
                <h5>LISTADO DE CITAS</h5>
            </div>
            <div class="col"></div>
            <div class="col">
                <a id="btnsettings" href="#">
                    Opciones.
                    <img src="images/settings-icon.png" alt="settings" width="40">
                </a>
            </div>
            </div>
            <table class="table">
                <thead>
                    <th>Cedula</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Notas</th>
                </thead>
                <tbody id="tbodylist">

                </tbody>
            </table>
        </div>`;
    $('#rootcontainer').append(listadoreservas);
    listado();
}

function listado(){
    $.ajax({
        type: "POST",
        url: "php/obtenercitas.php",
        success: function (res) {
            let info = ``;
            let datos = JSON.parse(res);
            datos.forEach(dato => {
                info+=`
                <tr>
                    <td>`+dato[1]+`</td>
                    <td>`+dato[2]+`</td>
                    <td>`+dato[3]+`</td>
                    <td>`+dato[4]+`</td>
                    <td>`+dato[5]+`</td>
                </tr>
                `;
                $('#tbodylist').html(info);
            });
        }
    });
}