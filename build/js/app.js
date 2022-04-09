document.addEventListener("DOMContentLoaded", function(){

setDate();

checkInputs();

setErrorFor();

setSuccessFor();

});


//Día de la semana

function setDate(){ //Checar problema de iteracion 
    const dateNumero = document.getElementById("dateNumero");

    const date = new Date();

    
    dateNumero.textContent = date.toLocaleString("es", {day: "numeric"});
        
    //alert(dateNumero);
        
}


//ValidaciónFormulario
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("tarea");
var imagen = document.getElementById("imagen");



    formulario.addEventListener("submit", e =>{
        e.preventDefault();//Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento
        checkInputs(); //Metodo que valida los inputs

    });


function checkInputs(){
    const txtMensaje = mensaje.value.trim();//Elimina los espacios vacios
    

    if(txtMensaje === "" ){
        setErrorFor(mensaje,"Rellene el campo");
        console.log(mensaje,"Rellene");
    }else{
        setSuccessFor(mensaje);
    }

}

function setErrorFor(input, message) {
	const formularioControl = input.parentElement;
	const small = formularioControl.querySelector('small');
	formularioControl.className = 'campo error';
	small.innerText = message;
}

function setSuccessFor(input){
    const formularioControl = input.parentElement;
    formularioControl.className = "campo success";
}

