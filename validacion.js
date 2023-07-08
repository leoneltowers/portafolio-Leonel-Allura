//Haz tú validación en javascript acá
//Haz tú validación en javascript acá
function validarDatos(){
    window.event.preventDefault()
     
    if (document.form.nombre.value=="" ) {
        alert("Campo nombre es obligatorio")  
        document.form.nombre.focus()
    
    }else if (document.form.email.value=="") {
        alert("Campo e-mail es obligatorio")
        document.form.email.focus() 

    }else if (document.form.asunto.value=="" ) {
        alert("Campo Asunto es obligatorio")
        document.form.asunto.focus() 

    }else if (document.form.mensaje.value=="" || document.form.mensaje.value.length <= 50 ){
        alert("Campo Mensaje es obligatorio y debe contener máximo 50 carateres") 
        document.form.mensaje.focus()
      
    } else if (document.form.email.value.indexOf('@')==-1 ||
    document.form.email.value.indexOf('.')==-1 ) {
        alert("e-mail inválido")
    }
   
}
    document.querySelector('form').addEventListener('submit',validarDatos)


// function validateForm() {
//     var nombre = document.getElementById("nombre").value;

//     var email = document.getElementById("email").value;

//     var asunto = document.getElementById("asunto").value;

//     var mensaje = document.getElementById("mensaje").value;

//         if (nombre == "") {
//             alert ("Por favor, ingresa tu nombre");
//             return false;
//         }

//         if (email == "") {
//             alert ("Por favor, ingresa tu email");
//             return false
//         }

//         if (asunto == "") {
//             alert("Por favor, ingresa el asunto");
//         }

//         if (mensaje == "") {
//             alert("Por favor, ingresa tu mensaje");
//             return false;
//         }

//         return true
// }
// const inputs = document.querySelectorAll("input");

// inputs.forEach((input) => {
//     input.addEventListener("blur", (input) => {
//         valida(input.target);
//     });
// });

// function valida(input) {

//     const tipoDeInput = input.dataset.tipo;
//     if (validadores[tipoDeInput]) {
//         validadores[tipoDeInput](input);
//     }

//     if (input.validity.valid) {
//         input.classList.add("formcontato__message__error--valid");
//         input.parentNode.querySelector(`[data-error]`).textContent = "";
//         // console.log(input.validity);

//     } else {
//         // console.log(input.validity);
//         input.classList.remove("formcontato__message__error--valid");
//         input.classList.add("formcontato__message__error--error");

//         input.parentNode.querySelector(`[data-error]`).textContent = errorMessage(tipoDeInput, input);
//     }

// }

// const errorTypes = [
//     "valueMissing",
//     "typeMismatch",
//     "patternMismatch",
//     "customError",
// ];

// const mensajesDeError = {
//     nombre: {
//         valueMissing: "El campo nombre no puede estar vacío",
//     },
//     email: {
//         valueMissing: "El campo correo no puede estar vacío",
//         typeMismatch: "El correo no es válido",
//         patternMismatch: "El correo no es válido",
//     },
//     asunto: {
//         valueMissing: "El campo asunto no puede estar vacío",
//         typeMismatch: "El asunto no es válido",
//     },
// };


// function errorMessage(tipoDeInput, input) {

//     let mensaje = "";
//     errorTypes.forEach((error) => {
//         if (input.validity[error]) {
//             mensaje = mensajesDeError[tipoDeInput][error];
//         }
//     });
//     return mensaje;
// }

// function validarNombre(input) {
//     return
// }


// const validadores = {
//     nombre: (input) => validarNombre(input),
// };

// document.querySelectorAll(`[data-form-error]`);