<template>  
  <div class="lg:w-4/5 w-11/12 mx-auto pb-10">
      <h1 class="text-2xl md:text-4xl block my-4">About me</h1>
      <Subtitle name="Perfil"/>
      <div class="block">
        <img :src="img" alt="Foto de más sobre mí" class="rounded-full float-none ml-0 p-0 absolute md:static right-4 top-28 md:float-right h-28 md:h-60 md:ml-2" style="shape-outside: ellipse()">
        <p>Soy un desarrollador <span class="text-[--secondary]">Full Stack</span> con experiencia desempeñando trabajos tanto en el papel de <span class="text-[--secondary]">Front-end</span> como en el <span class="text-[--secondary]">Back-end</span>.</p><br>
        <p>Mi compromiso con el aprendizaje continuo me impulsa a buscar constantemente nuevos desafíos y oportunidades de crecimiento profesional.</p><br>
        <p>Destaco por mi capacidad para garantizar <span class="text-[--secondary]">la calidad del producto final </span>y por realizar <span class="text-[--secondary]">pruebas exhaustivas de usabilidad y funcionalidad</span> para asegurar la mejor experiencia de usuario posible.</p><br>
        <p>Mi experiencia abarca el manejo de diversas tecnologías, incluyendo <span class="text-[--secondary]">Laravel, Node.js, CodeIgniter, VueJS, React, AWS y MySQL</span>, lo que me permite desarrollar herramientas eficaces para la optimización de procesos.</p><br>
      </div>
      <BoxExpansion name="Experiencia" :items="experiences"/>
      <BoxExpansion name="Educación" :items="education" :formation="true" />
      <InfoBox name="Skills" :items="skills"/>
      <InfoBox name="Idiomas" :items="languages"/>
      <InfoBox name="Intereses" :items="interests"/>
  </div>
  <Footer/>
</template>

<script setup>
import img from '@/assets/foto.webp'
import InfoBox from '@/components/InfoBox.vue'
import Subtitle from '@/components/Subtitle.vue'
import BoxExpansion from '@/components/BoxExpansion.vue'
import Footer from '@/components/Footer.vue'
import hackaboss_img from '@/assets/empresas/hackaboss.webp';
import astibot_img from '@/assets/empresas/astibot.webp';
import idearium_img from '@/assets/empresas/idearium.webp';

const experiences = [
  {
    business: 'Idearium 2.0',
    date_start: '10/2022',
    date_end: 'presente',
    position: 'Full Stack Developer',
    img: idearium_img,
    alt: 'Logo de la empresa Idearium',
    location: 'Madrid, España',
    description: [
      'Brindar soporte técnico durante todas las etapas del proyecto, desde la reunión inicial hasta la publicación final.',
      'Participar en el diseño web, maquetación, desarrollo y programación.',
      'Manejar diversas bases de datos y trabajar en contextos de Back-end y Front-end.',
      'Crear herramientas para la optimización de procesos.',
      'Garantizar el cumplimiento de los estándares de calidad y realizar pruebas exhaustivas para verificar la funcionalidad y el rendimiento del software, asegurando entregas de calidad y sin errores.',
      'Laravel, CodeIgniter, VueJS, AWS, MySQL'
    ]
  },
  {
    business: 'Astibot',
    date_start: '09/2021',
    date_end: '10/2022',
    position: 'Full Stack Developer',
    img: astibot_img,
    alt: 'Logo de la empresa Astibot',
    location: 'Valladolid, España',
    description: [
      'Realizar pruebas de usabilidad y funcionalidad para garantizar la calidad del sitio web.',
      'Colaborar con los equipos de marketing y diseño para optimizar la experiencia del usuario.',
      'Drupal,Java,PHP,jQuery,JavaScript',
    ]
  },
];

const education = [{
    business: 'Hack A Boss',
    date_start: '04/2021',
    position: 'Bootcamp',
    img: hackaboss_img,
    location: 'A Coruña, España',
    description: [
      'En este <i>bootcamp</i> intensivo de 400 horas, adquirí habilidades exhaustivas en desarrollo web full stack utilizando tecnologías clave como HTML, JavaScript, CSS, SQL, Node.js y React. Participé en <i>workshops</i> prácticos y culminé el curso desarrollando un proyecto completo, consolidando mi experiencia en el campo de la programación web.',
    ]
  }]

const skills = ['Node', 'React', 'JavaScript', 'PHP', 'CSS', 'HTML', 'CodeIgniter', 'Laravel', 'Symfony', 'AWS', 'EC2', 'RDS', 'Cloudfront', 'GitHub', 'GitLab', 'MySQL', 'Apache', 'Linux', 'MacOS', 'Vue.js', 'Angular', 'Docker', 'Visual Studio Code', 'Tailwind CSS'];
const languages = ['Español', 'Gallego'];
const interests = ['Desarrollo Web', 'Tecnologías de la Nube', 'Seguridad Informática', 'Metodologías Ágiles', 'Desarrollo Front-end', 'Desarrollo Back-end', 'Open Source', 'Innovación Tecnológica','SCRUM',];

</script>