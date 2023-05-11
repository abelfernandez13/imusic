function cargarDatos() {
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "datos.json");

    peticion.onload = function() {
        var arreglo = JSON.parse(this.responseText);

        lista = arreglo.canciones;


        //   logica javascript

        //Ordena canciones segun las reproduciones (los mas recientes primero)
        lista = lista.sort(function(x, y) {
            if (x.reproducciones > y.reproducciones) {
                return -1;
            }
            return 1;
        });

        // tomar solo los 3 primero lugares
        lista = lista.slice(0, 3);


        // if (this.reproducciones == 90) {
        var otrodiv = "";

        for (var i = 0; i < lista.length; i++) {
            var nombre = lista[i].nombre;

            otrodiv += `
			<tr>
			      <td class="th">${i}</td>
			 	  <td class="th">${nombre}</td>
			 	  <td class="th"><audio controls>
				   <source src="./canciones/${lista[i].ruta}"type="audio/mp3">
				   El navegador utilizado no soporta ese formato de audio
			   </audio></td>
		    </tr>


			`
        }


        // }

        document.getElementById("res").innerHTML = otrodiv
    }
    peticion.send();
}

$(document).ready(function() {
    cargarDatos();
});
