(async () => {

  const { value: name } = await Swal.fire({
    title: 'Bienvenido!',
    input: 'text',
    inputLabel: 'Ingresa tu nombre',
    inputPlaceholder: 'Escribe tu nombre',
    allowOutsideClick:false
  })
  
  if (name) {
    Swal.fire(`Hola ${name}, para comenzar llena el siguiente formulario, un avez que lo termines, da click en el boton, "Registrate"`)
  }
  
  })()

'use strict';

const btn_guardar = document.querySelector('#btnSavePaciente');
let validar = ()=>{
  let inputs_requeridos = document.querySelectorAll('#frm-registro [required]');
  let error = false;
  for (let i = 0; i < inputs_requeridos.length; i++) {
      if (inputs_requeridos[i].value == '') {
          inputs_requeridos[i].classList.add('input_error');
          error = true;
      } else {
          inputs_requeridos[i].classList.remove('input_error');
      }
  }
  return error;
};

let obtener_datos = () => {
  let error = validar();
  if (error) {
      Swal.fire({
          'title': 'Sus datos no se pudieron enviar',
          'text': 'Por favor revise los campos resaltados',
          'icon': 'error'
      });
  } else {
    savePaciente()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tus datos se estan guardando',
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar:true,
      allowOutsideClick:false
    });
    
  }
};
btn_guardar.addEventListener('click', obtener_datos)
btn_guardar.addEventListener('click', function(event){
  event.preventDefault()
})



function savePaciente(){
  var sNombre = document.querySelector('#txtNombre').value,
      sPaterno = document.querySelector('#txtPaterno').value,
      sMaterno = document.querySelector('#txtMaterno').value,
      sEdad = document.querySelector('#txtEdad').value,
      sGenero = document.querySelector('#txtGenero').value,
      sOcupacion = document.querySelector('#txtOcupacion').value,
      sCivil = document.querySelector('#txtCivil').value,
      sAcademico = document.querySelector('#txtAcademico').value,
      sTelefono = document.querySelector('#txtTelefono').value,
      sFecha = document.querySelector('#txtFecha').value,
      sCorreo = document.querySelector('#txtCorreo').value,
      sContraseña = document.querySelector('#txtContraseña').value;

  addPacienteToSystem(sNombre, sPaterno, sMaterno, sEdad, sGenero, sOcupacion, sCivil, sAcademico, sTelefono, sFecha, sCorreo,sContraseña);

}



//document.querySelector('#btnSavePaciente').addEventListener('click', savePaciente);
//function savePaciente(){
    //var sNombre = document.querySelector('#txtNombre').value,
        //sPaterno = document.querySelector('#txtPaterno').value,
        //sMaterno = document.querySelector('#txtMaterno').value,
        //sEdad = document.querySelector('#txtEdad').value,
        //sGenero = document.querySelector('#txtGenero').value,
       // sOcupacion = document.querySelector('#txtOcupacion').value,
        //sCivil = document.querySelector('#txtCivil').value,
        //sAcademico = document.querySelector('#txtAcademico').value,
        //sTelefono = document.querySelector('#txtTelefono').value,
        //sFecha = document.querySelector('#txtFecha').value,
        //sCorreo = document.querySelector('#txtCorreo').value,
        //sContraseña = document.querySelector('#txtContraseña').value;

    //addPacienteToSystem(sNombre, sPaterno, sMaterno, sEdad, sGenero, sOcupacion, sCivil, sAcademico, sTelefono, sFecha, sCorreo,sContraseña);
  
//}



