<template>
  <div class="lg:w-3/5 w-11/12 mx-auto">
    <h1 class="text-2xl md:text-4xl block my-4">Contacto</h1>
    <form class="my-10" @submit.prevent="submitForm">
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <input v-model="form.floating_first_name" type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[--secondary] focus:outline-none focus:ring-0 focus:border-[--secondary] peer" placeholder=" " />
          <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[--secondary] peer-focus:dark:text-[--secondary] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input v-model="form.floating_last_name" type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[--secondary] focus:outline-none focus:ring-0 focus:border-[--secondary] peer" placeholder=" " />
          <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[--secondary] peer-focus:dark:text-[--secondary] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos</label>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <input v-model="form.floating_email" type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[--secondary] focus:outline-none focus:ring-0 focus:border-[--secondary] peer" placeholder=" " />
          <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[--secondary] peer-focus:dark:text-[--secondary] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input v-model="form.floating_company" type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[--secondary] focus:outline-none focus:ring-0 focus:border-[--secondary] peer" placeholder=" " />
          <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[--secondary] peer-focus:dark:text-[--secondary] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Empresa</label>
        </div>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input v-model="form.floating_subject" type="text" name="floating_subject" id="floating_subject" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[--secondary] focus:outline-none focus:ring-0 focus:border-[--secondary] peer" placeholder=" " />
        <label for="floating_subject" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[--secondary] peer-focus:dark:text-[--secondary] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Asunto</label>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <textarea v-model="form.floating_textarea" name="floating_textarea" id="floating_textarea" rows="4" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[--secondary] focus:outline-none focus:ring-0 focus:border-[--secondary] peer" placeholder=" "></textarea>
        <label for="floating_textarea" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[--secondary] peer-focus:dark:text-[--secondary] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensaje</label>
      </div>
      <button type="submit" class="dark:text-black text-white bg-[--secondary] hover:bg-[--secondary] focus:ring-4 focus:outline-none focus:ring-[--secondary] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[--secondary] dark:hover:bg-[--secondary] dark:focus:ring-[--secondary]">Enviar</button>
    </form>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

const form = ref({
  floating_first_name: '',
  floating_last_name: '',
  floating_email: '',
  floating_company: '',
  floating_subject: '',
  floating_textarea: ''
});

function swalAlert(message, id) {
  Swal.fire({
    position: "top-end",
    icon: id == 1 ? "success" : "error",
    title: message,
    showConfirmButton: false,
    timer: 1500
  });
}

const submitForm = async () => {
  const { floating_first_name, floating_last_name, floating_email, floating_company, floating_subject, floating_textarea } = form.value;

  const validateForm = () => {
    if (!form.value.floating_first_name.trim()) {
      swalAlert('Por favor, ingresa tu nombre.', 0);
      return false;
    }
    if (!form.value.floating_last_name.trim()) {
      swalAlert('Por favor, ingresa tus apellidos.', 0);
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.value.floating_email)) {
      swalAlert('Por favor, ingresa un correo electrónico válido.', 0);
      return false;
    }
    if (!form.value.floating_subject.trim()) {
      swalAlert('Por favor, ingresa el asunto.', 0);
      return false;
    }
    if (!form.value.floating_textarea.trim()) {
      swalAlert('Por favor, ingresa tu mensaje.', 0);
      return false;
    }
    return true;
  };

  if (!validateForm()) {
    return;
  }

  try {
    const response = await axios.post('http://tu-servidor/tu-archivo.php', {
      nombre: floating_first_name,
      email: floating_email,
      mensaje: floating_textarea
    });

    console.log('Respuesta del servidor:', response.data);

    swalAlert('Mensaje enviado correctamente', 1);
    
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    swalAlert('Ocurrió un error al enviar el mensaje', 0);
  }
};
</script>
