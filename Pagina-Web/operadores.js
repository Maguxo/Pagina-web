
var nombre;
var correo;
var telefono;
var mensaje;
var boton;

function capturarTexto(){

    nombre = document.getElementById("nombreapellido").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    mensaje = document.getElementById("Mensaje").value;
    
    alert("En breve sera contestada su respuesta Mr/Ms \n" + nombre +"\n"+ correo +"\n"+ telefono +"\n"+mensaje);
}

boton = document.getElementById("llamar");
boton.onclick = capturarTexto;


