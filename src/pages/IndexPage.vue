<template>
  <q-page padding>
    <HeroSection :hero-image="heroImage" @cta="() => scrollToSection('quienes-somos')" />
    <AboutUs :info-cards="infoCards" :pillars="pillars" :environment-message="environmentMessage" />
    <EducationalLevels :levels="levels" />
    <Schedules :schedules="schedules" />
    <FacilitiesGallery :slides="facilities" />
    <ActivitiesGallery :activities="activities" />
    <TeamSection :team="team" />
    <LocationMap :address="contactDetails.address" :map-url="mapUrl" :directions-url="contactDetails.directions" />
    <ContactForm :contact-details="contactDetails" />
    <FloatingWhatsApp phone="+573045736903" message="Hola, quiero más información sobre las matrículas en ÁGORA" />
    <Footer :sections="footerSections" :socials="contactDetails.socials" />
  </q-page>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import AboutUs from '../components/AboutUs.vue';
import EducationalLevels from '../components/EducationalLevels.vue';
import Schedules from '../components/Schedules.vue';
import FacilitiesGallery from '../components/FacilitiesGallery.vue';
import ActivitiesGallery from '../components/ActivitiesGallery.vue';
import TeamSection from '../components/TeamSection.vue';
import LocationMap from '../components/LocationMap.vue';
import ContactForm from '../components/ContactForm.vue';
import FloatingWhatsApp from '../components/FloatingWhatsApp.vue';
import Footer from '../components/Footer.vue';

const heroImage =
  'https://scontent.fbaq1-1.fna.fbcdn.net/v/t39.30808-6/476285968_1711730879376858_4955764365073193767_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=ZGTkVuOuuEcQ7kNvwGDt93m&_nc_oc=AdkWAkqCD2lKoKMYkiFAadtWvFGD_rOCYiNdiqdSpOytp6ZNepehIU3kKVmshrjHoTo&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=VAci2L8X-e_PDfYDx0WRoQ&oh=00_AfsvL5p_-bS2D7wTpUBqMYTFgO2O6tSCOLPAt1k3Fx6Ruw&oe=698EB361';

const infoCards = [
  {
    id: 'mision',
    title: 'Misión',
    content:
      'Potenciar el desarrollo integral de niños y niñas de 2 a 6 años con experiencias que integran la exploración sensorial, la investigación guiada y el juego colaborativo.'
  },
  {
    id: 'vision',
    title: 'Visión',
    content:
      'Ser referentes en educación infantil sostenible, inspirando a las familias a construir comunidades más empáticas, creativas y conscientes de su entorno.'
  },
  {
    id: 'filosofia',
    title: 'Filosofía educativa',
    content:
      'Aplicamos metodologías activas Reggio Emilia, aprendizaje basado en proyectos y pedagogía verde para respetar los ritmos individuales.'
  },
  {
    id: 'enfoque',
    title: 'Enfoque Cuerpo · Mente · Espíritu',
    content:
      'Cada jornada incluye movimiento consciente, experiencias STEAM, espacios de mindfulness y prácticas de gratitud hacia la naturaleza.'
  }
];

const pillars = [
  {
    title: 'Cuerpo',
    icon: 'self_improvement',
    description: 'Psicomotricidad, alimentación saludable y hábitos de autocuidado presentes en toda la jornada.'
  },
  {
    title: 'Mente',
    icon: 'psychology',
    description: 'Desafíos STEAM, alfabetización temprana y resolución creativa de problemas reales.'
  },
  {
    title: 'Espíritu',
    icon: 'favorite',
    description: 'Educación emocional, círculos de diálogo y proyectos de servicio comunitario.'
  }
];

const environmentMessage =
  'Recolectamos agua lluvia, compostamos nuestros residuos y lideramos campañas de reforestación urbana con familias y aliados.';

const levels = [
  {
    title: 'Párvulos',
    ageRange: '2 años',
    icon: 'park',
    description: 'Primeros vínculos con el entorno a través de experiencias sensoriales y musicalidad.'
  },
  {
    title: 'Prejardín',
    ageRange: '3 años',
    icon: 'emoji_nature',
    description: 'Exploradores curiosos que construyen proyectos sobre naturaleza y convivencia.'
  },
  {
    title: 'Jardín',
    ageRange: '4 años',
    icon: 'auto_graph',
    description: 'Fortalecemos pensamiento lógico, arte y comunicación oral.'
  },
  {
    title: 'Transición',
    ageRange: '5 años',
    icon: 'school',
    description: 'Listos para primaria con competencias lectoras iniciales y ciudadanía ambiental.'
  }
];

const schedules = [
  {
    name: 'Jornada Mañana',
    hours: '7:20 a.m. - 11:30 a.m.',
    description: 'Rutinas activas con proyectos cortos, momentos de reproducción musical y exploración exterior.'
  },
  {
    name: 'Jornada Tarde',
    hours: '1:30 p.m. – 4:30 p.m.',
    description: 'Ideal para familias que buscan refuerzo artístico, clubes de ciencias y acompañamiento terapéutico.'
  },
  {
    name: 'Jornada Continua',
    hours: '7:20 a.m. - 4:30 p.m.',
    description: 'Incluye alimentación balanceada, siesta consciente y talleres extracurriculares.'
  }
];

const facilities = [
  {
    title: 'Aulas luminosas',
    category: 'Aulas',
    description: 'Ambientes equipados con materiales naturales, mesas colaborativas y rincones sensoriales.',
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t51.75761-15/480046904_17933738109004640_7163071927012554958_n.webp?stp=dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Dwv0q3d8_FAQ7kNvwG0beu1&_nc_oc=AdmZkR-s32z5GrHQCAHFS8oZCCmbOzdSN4HvOzpTAvB2cYBq0NfmlFmAvHY3XjB7otc&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=KvUQDs3NTZJwE01cESnASg&oh=00_AfsT9QibIrZiFmKRrBoEf5qLFwqbVTdu0nvn5F_zz90oNQ&oe=698EC1C9'
  },
  {
    title: 'Bosque sensorial',
    category: 'Áreas verdes',
    description: 'Huertos verticales, estaciones de compostaje y recorridos de biorritmos.',
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t39.30808-6/470640014_1679065405976739_4008986018469357367_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7WGk1ODHPkcQ7kNvwFOmb4r&_nc_oc=AdmMqdgbotuNFdAji3Ofv35PZrpqQu_ZqlKCmEDCC71xvkQ7Arf0YlLLHXuJCghC4Ms&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=ZQMhskZ_aDSinEdPCBjD-Q&oh=00_AfuRflWRN_9tur-iyn3beVjRFRcoM4aqcCmKqRBFQ52V8w&oe=698EC3DD'
  },
  {
    title: 'Huerta ecológica',
    category: 'Huerta',
    description: 'Niños cuidando plantas, aprendiendo sobre el ciclo de la naturaleza y la alimentación.',
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/115984587_713205782562711_6423472745826330938_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=qWPfK6YoFbsQ7kNvwEjXbT3&_nc_oc=AdkwvHTUbpN2I7I2J0lwo2lzW_wQXaJXs8acm1E9ad3ryf4Pvkh46GiLArdR_3A7YbA&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=PZgkY6HSe1auCDCr0wybRQ&oh=00_AfsLNyUJAIUdydGRrQs3QECCg7TkFy6A5qgiH6jSJhYRoQ&oe=69B043B9'
  },
  {
    title: 'Zonas de juego y movimiento',
    category: 'Zonas de juego',
    description: 'Circuitos motrices, lomas suaves y elementos de integración sensorial.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1400&h=900&q=80',
    externalImage:
      'https://scontent.fbaq1-1.fna.fbcdn.net/v/t39.30808-6/471244618_1679831299233483_8575720265469555455_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oWawzaPP20QQ7kNvwGa5Alw&_nc_oc=AdnWUcnvr3LtZnBiCX7o_kxhSCxLS9qVhxzI9HBUuq1sLJbDsGMxCSeKBXuIf8OiQp4&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=YoDhKhWllbfRj5RXXw3rdw&oh=00_AfvxsAVPgZUlZkkfZntPGifd1LOtD1WnB6hHi3adtGNerg&oe=698EBA22'
  },
  {
    title: 'Espacios que te reciben',
    category: 'Instalaciones',
    description: 'Vista exterior de nuestras instalaciones, pensadas para brindar un entorno seguro, cómodo y acogedor para toda la comunidad.',
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t39.30808-6/477778052_1714852985731314_7102117242556649519_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=Yuf02P0ZjRAQ7kNvwHXjw3r&_nc_oc=Adm3FIjEAVHOq98jjncO-ol-QQa4c0wmRY7ME_A5DSokD-9r6ZAomGU_4EX7oxkCfss&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=J1M_pWSoO7RbNbVxIfVkAg&oh=00_AfuPwIkRYh49izBSg73YTNx3RpQXqow7Zw8tgViytVYQNA&oe=698EC1C9'
  },
  {
    title: 'Rincón de lectura',
    category: 'Biblioteca',
    description: 'Biblioteca infantil acogedora con libros ilustrados, cojines y espacios tranquilos.',
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/175108346_882800338936587_446265988058509879_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fl69uhrbMpYQ7kNvwEWZ1g1&_nc_oc=AdmMfgNjRU3666aHYfED7KNjKZr4tbkQ9kGyiBYqVSfV9Q9o0z5pwW1QwunI_stkX4g&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=hLmvTZiminvRVvKlJNR7xw&oh=00_AfuhK6Cd7mThtSG-k-XxkzUkfGdl1Z5F1pUtIj2T9R2IAw&oe=69B07034'
  },
  {
    title: 'Comedor consciente',
    category: 'Comedor',
    description: 'Menú diseñado por nutricionistas con ingredientes locales y orgánicos, servido en un espacio luminoso y alegre.',
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/38752192_305067916709835_7946103034231128064_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lGWf09hyRrIQ7kNvwEnLZbO&_nc_oc=AdnmMx26hu8eh2RqvUfc_tgCVOhDO-71F-X2Lqh5OjgUa5JqV6xCfHit2ef3LqnDwIU&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=IeDELT9qy7UEx1JsRc6L2w&oh=00_AfuzPjyQubhqoAnl-6uIoVhIPzHQcwo9ZVUs-S-fbnMgSA&oe=69B05153'
  }
];

const activities = [
  {
    title: 'Guardianes ambientales',
    description: 'Jornadas de siembra, monitoreo del clima y creación de estaciones de reciclaje hechas por los niños.',
    tags: ['Ambiental', 'STEM'],
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t51.75761-15/486762300_17937976905004640_6618719087962307758_n.webp?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=w2acf5kHFPIQ7kNvwEPFFvw&_nc_oc=Adl-uq-l5BMqzcF-7RwL8bseam2jDjC0kQsYzYV6p6YyW6mfBVoS7rUj4FrLbDLEC9g&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=zXnN0bcwJuzEYeri5oXe5w&oh=00_Afu2gULDQAXSjnChjuLDxCfMJb-hyPBjGGydsYvd5XDAEQ&oe=698EB97B'
  },
  {
    title: 'Laboratorio botánico',
    description: 'Niños explorando plantas y experimentando con tierra, semillas y lupas.',
    tags: ['Naturaleza', 'Exploración'],
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/38716388_305047693378524_7923080098264121344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=HG-GA0ntGsIQ7kNvwHBJgnh&_nc_oc=AdlRKAIHrWleCYfJ4WeTcmdGOrKtyKeFdyx8BgYPcqVuQdVjW025YlqFtJIyR5g7yjo&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=kF0g0hjzhPkLcV6DXwq9ng&oh=00_AfuHvclyDK5PW8hCgTY8Lz5wUm-_NJ1wvPjDes3O1_Y-HQ&oe=69B03FF0'
  },
  {
    title: 'Ritmos del mundo',
    description: 'Festivales culturales que visibilizan tradiciones, lenguas y gastronomía latinoamericana.',
    tags: ['Cultural', 'Artística'],
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t51.75761-15/486721943_17937974631004640_383362188736795708_n.webp?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-46Gme7kLW8Q7kNvwHGKTfh&_nc_oc=AdnN5UdfgfhKjVw55OrkHCpnU557H5lerJHx_mTBUwUmD2UjskIti5fIJn3631afITs&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=l-qDJJbrXTF4EBjN2Y9pnA&oh=00_AfvOo8QnSZBOYyeKzcsXWEWq3-J6XJDtTvBXAah2LWbtGw&oe=698EC892'
  },
  {
    title: 'Arte y pintura',
    description: 'Murales colaborativos, acuarelas y experimentos con texturas naturales.',
    tags: ['Artística', 'Maker'],
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t51.82787-15/550796577_17958870417004640_3007813908191931798_n.webp?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9dCHKQb_3-kQ7kNvwENqJt3&_nc_oc=Adlj9Q-fn1EOZcJPKj_j9KZl53-lS0KiQpyNLrOk7Apgtpobkqzlt1WwFkJIXEIrFCU&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=BuZe5GmtIpp3DyL6cGifgQ&oh=00_AfsLQ6xTBdsI7_JBjSX2fema4WzRqHEbR-znTaAB4VYrEw&oe=698EAD93'
  },
  {
    title: 'Reciclaje creativo',
    description: 'Proyectos ambientales con materiales reutilizados para crear juguetes y esculturas.',
    tags: ['Ambiental', 'Creatividad'],
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/121103997_768587207024568_7921709045345328927_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=8Y-mHAxtlScQ7kNvwEIr59r&_nc_oc=AdlhiiQv1Mxm6TbP1M2DnDsdeCNNZe_WqWfkY42wBTPx3Ez8hIODY04kJG39W2cxZ5Y&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=cJK-cnxzaWmtd_H41gXPHQ&oh=00_AfuCFm4XfjKcg47Fh95MqElZvAobYegPLA9YQe6qLvY01g&oe=69B0388C'
  },
  {
    title: 'Mini Olimpiadas ÁGORA',
    description: 'Retos cooperativos que fortalecen coordinación, trabajo en equipo y autocuidado.',
    tags: ['Deportiva'],
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/40609590_324676468082313_7379168527980167168_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jlzORkdESvMQ7kNvwF7HxbF&_nc_oc=Adl2oxxbW8CUm8vymCfrqpqRkKY7ivke35WOlKGBx7E7Adnm2IT5aMkqkmrmkfom9_s&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=BjGHavUOqj58Hu0Zoq-vEw&oh=00_Afu-Bj1rKNKzXaUSHvMPdNzSSgFxFQgBhxopxEQlzFms2g&oe=69B03E5A'
  },
  {
    title: 'Exploradores en salida',
    description: 'Excursiones a parques y reservas para observar aves, ríos y ecosistemas locales.',
    tags: ['Excursión', 'Naturaleza'],
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/39024295_308773773005916_8324074398390681600_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UeznHANeiLAQ7kNvwHCBeRf&_nc_oc=Adk3CC9zNoXwmaY65gUChVdqCl0on2GlhNGnje39nmhvLk9fqbojdzSnux0sW1eG-KM&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=cCmkS4ah1uExer3ZtuBK2g&oh=00_AfvqKAaEHQWBlrn4qE7ks5bS62xtZGkCCZV-nJPNNdJv0Q&oe=69B0658F'
  },
  {
    title: 'Ciencias divertidas',
    description: 'Experimentos sencillos con agua, colores y materiales seguros que despiertan la curiosidad científica.',
    tags: ['STEM', 'Exploración'],
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/120896490_765644387318850_4802870262474140990_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=IqiI1Wb_siIQ7kNvwHb8TBm&_nc_oc=Adk241D0O-ihSa2YLo-Redepv1au3ZuQXSML-nQtgFOOJ2u4LIN81jsLrt-0BQygvQ4&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=qaZ3Vz2W8061WjX7X6Lwew&oh=00_AftozmSCM3RBq1EtUj4OEl3VMTPeauC-xUZjiSC695K0Ng&oe=69B05AC6'
  },
  {
    title: 'Cuentacuentos mágicos',
    description: 'Sesiones interactivas de lectura donde los niños participan creando finales y actuando personajes.',
    tags: ['Literatura', 'Creatividad'],
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/31562071_244422002774427_6196126692604379136_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=bx5tz88dfrkQ7kNvwFFu-Nl&_nc_oc=Adkywns5R9chggjEcj402m_PDIuQZN6prkdwWNWl0HTyNE8j88gBGnh2pvMYAp5unr0&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=MYDULy3YtH2iO9TLh5JoOQ&oh=00_AfvIsZh7jwMR2VJ7SRdq5YehGngAYf5AtSULYj1eqhzOLQ&oe=69B0622A'
  },
  {
    title: 'Día de recreación en familia',
    description: 'Un día de juegos y espectáculos para grandes y chicos, celebrando el encuentro y la alegría.',
    tags: ['Bienestar', 'Mindfulness'],
    image: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t39.30808-6/482360112_1736326796917266_2646448693587288544_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=bWdwfNLKtVYQ7kNvwHgo_lK&_nc_oc=AdnL3DHE6f6zhnRFHANk1-3jBDvQl8cm2Igk_KUIaFoLrtO_oCWOSxEb2mBzTfy3Hlk&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=ixujXvLYCIT0l5uu18JCpw&oh=00_AftHIhuGdXMJoxZvdEzT1fnIye6cR5eTyn_6u1R_p0tEUA&oe=698EA522'
  }
];

const team = [
  {
    name: 'Hilda Ramírez',
    role: 'Directora Psicóloga',
    description: 'Especialista en primera infancia y liderazgo socioemocional.',
    photo: 'https://picsum.photos/seed/directora/200'
  },
  {
    name: 'Sara Jiménez',
    role: 'Docente Transición',
    description: 'Prepara a los niños para primaria con proyectos de ciudadanía activa y neuropedagogía infantil.',
    photo: 'https://picsum.photos/seed/ambiental/200'
  },
  {
    name: 'Laura ',
    role: 'Docente Párvulos y Prejardín',
    description: 'Fortalece hábitos de autonomía a través del arte y el juego simbólico.',
    photo: 'https://picsum.photos/seed/parvulos/200'
  },
  {
    name: 'Silvia',
    role: 'Docente Jardín',
    description: 'Promueve pensamiento lógico, creatividad y habilidades sociales con proyectos lúdicos.',
    photo: 'https://picsum.photos/seed/steam/200'
  },
  {
    name: 'Melina',
    role: 'Auxiliar Parvulos y Prejardín',
    description: 'Acompaña con calidez y cuidado las primeras experiencias de los niños en el jardín.',
    photo: 'https://picsum.photos/seed/psicologia/200'
  },
  {
    name: 'Luis',
    role: 'Contador y administrativo',
    description: 'Gestiona finanzas, matrículas y procesos administrativos con eficiencia y transparencia.',
    photo: 'https://picsum.photos/seed/artes/200'
  },
];

const contactDetails = {
  phone: '+57 304 573 6903',
  email: 'agora742@hotmail.com',
  address: 'Cra. 6ª D ##440, Piedecuesta, Santander',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=Cra.%206%C2%AA%20D%20%23440,%20Piedecuesta,%20Santander',
  socials: [
    {
      label: 'Facebook',
      icon: 'fab fa-facebook',
      url: 'https://www.facebook.com/agora.piedecuesta.12'
    },
    {
      label: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/agora_piedecuesta?igsh=OWxyams5a2h6dHc0'
    },
    {
      label: 'TikTok',
      icon: 'fab fa-tiktok',
      url: 'https://www.tiktok.com/@agorapiedecuesta?_r=1&_t=zs-93zcnujhfp6'
    },
    {
      label: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      url: 'https://api.whatsapp.com/send?phone=573045736903&text=Hola%20quiero%20informaci%C3%B3n%20de%20%C3%81GORA'
    }
  ]
};

const mapUrl =
  'https://maps.google.com/maps?q=Centro%20de%20Estimulaci%C3%B3n%20Temprana%20AGORA,Cra.%206%C2%AA%20D%20%23440,%20Piedecuesta,%20Santander&output=embed&z=17';

const footerSections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'quienes-somos', label: 'Quiénes somos' },
  { id: 'niveles', label: 'Niveles' },
  { id: 'jornadas', label: 'Jornadas' },
  { id: 'instalaciones', label: 'Instalaciones' },
  { id: 'actividades', label: 'Actividades' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'ubicacion', label: 'Ubicación' },
  { id: 'contacto', label: 'Contacto' }
];

const scrollToSection = id => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

let observer;

const observeElements = () => {
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  document.querySelectorAll('[data-animate]').forEach(element => observer.observe(element));
};

onMounted(() => {
  observeElements();
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
