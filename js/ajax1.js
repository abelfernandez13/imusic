function cargarDatos() {
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "datos.json");

    peticion.onload = function() {
        var arreglo = JSON.parse(this.responseText);

        lista = arreglo.canciones;

        //   logica javascript

        //Ordena canciones segun las reproduciones (los mas recientes primero)
        lista = lista.sort(function(x, y) {
            if (x.reproducciones < y.reproducciones) {
                return -1;
            }
            return 1;
        });

        var otrodiv = "";

        for (var i = 0; i < lista.length; i++) {
            var nombre = lista[i].nombre;

            otrodiv += `
			<div class="card card-3" id="selector">
    			<img src="./imagenes/icon_${lista[i].icono}.svg" class="img>
				<div class="card-body">
					<h5 class="card-title">${nombre}</h5>
					<audio class="audio" controls>
					<source src="./canciones/${lista[i].ruta}"type="audio/mp3">
					El navegador utilizado no soporta ese formato de audio
				</audio>
			</div>

		   </div>
			`
        }
        document.getElementById("res").innerHTML = otrodiv

    }
    peticion.send();

}

$(document).ready(function() {
    cargarDatos();
});
