// script.js

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe normalmente
    event.preventDefault();
  
    // Mostrar el aviso de mensaje enviado
    alert('Mensaje enviado con éxito.');
  
    // Puedes agregar aquí el código para enviar el formulario al servidor si es necesario
    // Por ejemplo, puedes usar Fetch API o enviar los datos mediante AJAX
  });
  