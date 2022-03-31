var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var datos = new FormData(formulario);
    var mostrar = '<?php $resultado ?>';
    fetch('ficheros/upload.php',{
        method: 'POST',
        body: datos
    })
    .then( res => res.json())
    .then( data => {
        console.log(data)
        if(data === 'error') {
            Swal.fire(
              'Error',
              'Revise los datos ingresados',
              'error'
            )
           
        }else{
          Swal.fire(
            'Success',
            'La respuesta es: ' + document.write(mostrar),
            'success'
          )
        }
    })
})