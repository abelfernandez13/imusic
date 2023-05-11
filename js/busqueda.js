function buscarDatos() {
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "datos.json");
    peticion.onload = function() {
        var arreglo = JSON.parse(this.responseText);
        arreglo1 = arreglo.canciones;
        $("#canciones").empty();
        var texto = $("#inputBuscar").val().toLowerCase();
        console.log(texto);

        for (var x = 0; x < arreglo1.length; x++) {

            var nombreCancion = arreglo1[x].nombre.toLowerCase();

            if (nombreCancion.indexOf(texto) !== -1) {
                console.log("estoy en el if");
                var rutaCancion = ` "./canciones" + ${arreglo1[x].ruta} `

                var html = `
        		<div class="card card-3" id="selector">
    			<img src="./imagenes/icon_${arreglo1[x].icono}.svg" class="img>
				<div class="card-body">
					<h5 class="card-title">${nombreCancion}</h5>
					<audio class="audio" controls>
					<source src="./canciones/${arreglo1[x].ruta}"type="audio/mp3">
					El navegador utilizado no soporta ese formato de audio
				</audio>
			</div>

		   </div> `;
                $("#canciones").append(html);
            }
        }
    }
    peticion.send();
}


$(document).ready(function() {

    $("#inputBuscar").keyup(function() {
        buscarDatos();
    })

});
