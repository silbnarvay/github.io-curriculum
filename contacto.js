let form = document.getElementById("form");
form.addEventListener('submit', validar);
let cont = 0;

function validar(event){
    let resultado = true;
    let txtNombre = document.getElementById("nombre");
    let txtEmail = document.getElementById("email");
    let txtAsunto = document.getElementById("asunto");
    let txtMensaje = document.getElementById("mensaje");

    limpiarMensajes();

    //validación nombre

    if (txtNombre.value == "") {
        resultado = false;
        mensaje("Campo obligatorio", txtNombre);
    } else if(txtNombre.length <10){
        resultado = false;
        mensaje("Ingrese su nombre completo", txtNombre);
    }
    
    //validación email

    if (txtEmail.value == "") {
        resultado = false;
        mensaje("Campo obligatorio", txtEmail);
    }

    if (txtAsunto.value == "") {
        resultado = false;
        mensaje("Campo obligatorio", txtAsunto);
    }else if(txtAsunto.length <10){
        resultado = false;
        mensaje("Debe ser un asunto descriptivo", txtAsunto);
    }

    if (txtMensaje.value == "") {
        resultado = false;
        mensaje("Campo obligatorio", txtMensaje);
    }else if(txtMensaje.length <100){
        resultado = false;
        mensaje("El mensaje debe tener más de 100 caracteres", txtMensaje);
    }
     
    if(!resultado){
        event.preventDefault();        //stop submit
    }
    
}

function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    let nodoPadre = elemento.parentNode;
    let nodoMensaje = document.createElement("span");
    nodoMensaje.textContent = cadenaMensaje;
    nodoMensaje.style.color = "red";
    nodoMensaje.display = "block";
    nodoMensaje.setAttribute("class", "mensajeError");
    nodoPadre.appendChild(nodoMensaje);
}

//Remueve o elimina un elemento del html

function limpiarMensajes() {
    let mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();
}}