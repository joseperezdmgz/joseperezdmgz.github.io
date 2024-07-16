<template>
    <div class="lg:w-3/5 w-11/12 mx-auto">
        <h1 class="text-2xl md:text-4xl block my-4">Portfolio</h1>
        <p>¡Bienvenido a mi portafolio! Aquí puedes explorar una colección de mis proyectos. Estoy constantemente trabajando en cosas nuevas y emocionantes.</p>
        <ul class="py-4">
            <CardProject :cards="proyectos"/>
        </ul>
    </div>
    <Footer/>
</template>

<script setup>
import CardProject from '@/components/CardProject.vue'
import Footer from '@/components/Footer.vue'
import oldisgold from '@/assets/proyectos/oldisgold.webp';
import velada from '@/assets/proyectos/velada.webp';

const proyectos = [
    {
        "title" : "La Velada del Año 4",
        "link" : "https://lavelada.es/",
        "img" : velada,
        "desc" : "Colaboré en el desarrollo de la web para La Velada del Año 4, creada por Midudev. Realicé ajustes estéticos en la ordenación de imágenes para mejorar las animaciones. Aunque fue una contribución menor, mi trabajo se incorporó en la versión final, demostrando mi capacidad para colaborar en proyectos de alto perfil y trabajar en equipo."
    },
    {
        "title" : "Old is Gold",
        "link" : "https://dms.licdn.com/playlist/vid/C5605AQGU5FOrTq5LGw/mp4-640p-30fp-crf28/0/1616149263339?e=2147483647&v=beta&t=s4gDeH8RpQ1isZA4cRSUSNniM16exR8A-bsvMypCeck",
        "img" : oldisgold,
        "desc" : "Plataforma de comercio electrónico usando React para el frontend y Node.js para el backend. La aplicación permite a los usuarios listar, buscar y comprar artículos de segunda mano, con funcionalidades como autenticación segura, gestión de productos y un sistema de búsqueda avanzado."
    },
]
</script>