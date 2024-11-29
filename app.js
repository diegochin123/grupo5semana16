new Vue({
  //  montamos la intancia vue en el elemento HTML con el id 'app'
  el: '#app', 

  // despues definimos los datos que usará la instancia de Vue
  data: {
    formData: {
      // Los datos del formulario, inicializados con valores vacíos
      name: '',  // el nombre del usuario
      email: '',  // el correo electrónico del usuario
      message: ''  // el mensaje que el usuario desea enviar
    },
    submitted: false  // aqui nos indica si el formulario fue enviado 
  },

  // intruducimos un nuevo que se pueden invocar dentro de esta instancia
  methods: {
    submitForm() {
   
      // aquí es donde agregarías la lógica para enviar los datos, como hacer una solicitud HTTP a un servidor.
      
      this.submitted = true;  // Cambia el valor de 'submitted' a verdadero para indicar que el formulario ha sido enviado
    }
  }
});
