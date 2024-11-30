const app = Vue.createApp({
    data() {
        return {
            formData: {
                name: '',
                email: '',
                faculty: '',
                city: '',
                cycle: '',
                message: ''
            },
            errores: {}
        };
    },
    methods: {
        validarFormulario() {
            this.errores = {};

            // aqui se valida nombre
            if (!this.formData.name) {
                this.errores.name = "El nombre es obligatorio.";
            }

            // aqui se valida email
            const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!this.formData.email) {
                this.errores.email = "El correo electrónico es obligatorio.";
            } else if (!patronEmail.test(this.formData.email)) {
                this.errores.email = "El correo electrónico no es válido.";
            }

            // aqui se valida facultad
            if (!this.formData.faculty) {
                this.errores.faculty = "Debe seleccionar una facultad.";
            }

            // aqui se valida ciudad
            if (!this.formData.city) {
                this.errores.city = "Debe seleccionar una ciudad.";
            }

            // aqui se valida ciclo
            if (!this.formData.cycle) {
                this.errores.cycle = "El ciclo es obligatorio.";
            } else if (this.formData.cycle < 1 || this.formData.cycle > 10) {
                this.errores.cycle = "El ciclo debe estar entre 1 y 10.";
            }

            // aqui se valida el mensaje
            if (!this.formData.message) {
                this.errores.message = "El mensaje es obligatorio.";
            }

            // se envía el formulario si no encuentra errores
            if (Object.keys(this.errores).length === 0) {
                alert("Formulario enviado exitosamente.");
                console.log(this.formData); // Simular envío
            }
        }
    }
});

app.mount('#app');
