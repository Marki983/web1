const API_URL = 'http://52.42.237.240:8080/ords/mindworks/newtestee/';
var pacienteLista = [];

function addPacienteToSystem(pnombre, ppaterno, pmaterno, pedad, pgenero, pocupacion, pcivil, pacademico, ptelefono, pfecha, pcorreo, pcontraseña){
    var newPaciente = {
        "TESTEE_FIRSTNAME":pnombre,
        "TESTEE_LASTNAME":ppaterno,
        "TESTEE_2NDLASTNAME":pmaterno,
        "TESTEE_AGE":pedad,
        "TESTEE_GENDER":pgenero,
        "TESTEE_OCCUPATION":pocupacion,
        "TESTEE_MARITALSTAT":pcivil,
        "TESTEE_STUDIES":pacademico,
        "TESTEE_PHONE":ptelefono,
        "TEESTE_DATE":pfecha,
        "TESTEE_EMAIL":pcorreo,
        "TESTEE_PASSWORD":pcontraseña
    };
    
    pacienteLista.push(newPaciente);
    console.log(newPaciente);

    fetch(API_URL,{
        method:'POST',
        body: JSON.stringify(newPaciente),
        headers: {
            'Contente-Type':'application/json'
        }
    })
    .then(res => res.json())
    .then((response) =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tus dattos han sido guardados, puedes iniciar el test, da click en el boton verde "Ir al Test"',
            showConfirmButton: false,
            timer: 6000,
            timerProgressBar:true,
            allowOutsideClick:false
        });
    })
    .catch((error)=> {
        Swal.fire({
            'title': 'Sus datos no se pudieron enviar',
            'icon': 'error'
        }),
        document.querySelector('#frm-registro').reset()}
    )
    
}

//document.querySelector('#frm-registro').reset();
